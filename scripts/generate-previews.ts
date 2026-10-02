import { spawn } from 'node:child_process';
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';
import { FREE_SECTION_IDS } from '../config/free-sections';

async function generatePreviews() {
  const root = process.cwd();
  const port = 4317;
  const baseUrl = `http://127.0.0.1:${port}`;
  const outputDirectory = path.join(root, 'public', 'previews');
  const sectionSource = await readFile(path.join(root, 'components', 'sections.tsx'), 'utf8');
  const allSectionIds = [...sectionSource.matchAll(/^export function (\w+)\(/gm)].map((match) => match[1]);
  const freeIds = new Set<string>(FREE_SECTION_IDS);
  const lockedSectionIds = allSectionIds.filter((id) => !freeIds.has(id));

  await mkdir(outputDirectory, { recursive: true });

  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  const server = spawn(command, ['run', 'dev', '--', '-p', String(port)], {
    cwd: root,
    env: { ...process.env, NEXT_PUBLIC_DEMO_MODE: 'false' },
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

  async function waitForServer() {
    for (let attempt = 0; attempt < 60; attempt += 1) {
      try {
        const response = await fetch(baseUrl);
        if (response.ok) return;
      } catch {
        // The development server is still starting.
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    throw new Error(`Preview server did not start at ${baseUrl}`);
  }

  try {
    await waitForServer();
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 });

    for (const id of lockedSectionIds) {
      await page.goto(`${baseUrl}/preview/${id}?theme=indigo&mode=light`, { waitUntil: 'networkidle' });
      const section = page.locator('section, header, footer').first();
      await section.screenshot({ path: path.join(outputDirectory, `${id}.png`), animations: 'disabled' });
      process.stdout.write(`Generated ${id}.png\n`);
    }

    await browser.close();
    process.stdout.write(`Generated ${lockedSectionIds.length} locked-section previews in public/previews.\n`);
  } finally {
    server.kill();
  }
}

generatePreviews().catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.stack ?? error.message : String(error)}\n`);
  process.exitCode = 1;
});
