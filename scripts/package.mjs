import fs from 'node:fs';
import { mkdir, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import archiver from 'archiver';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDirectory = path.join(projectRoot, 'dist');
const archivePath = path.join(distDirectory, 'sections-pack-v1.0.0.zip');

await mkdir(distDirectory, { recursive: true });
await rm(archivePath, { force: true });

const output = fs.createWriteStream(archivePath);
const archive = archiver('zip', { zlib: { level: 9 } });

const finished = new Promise((resolve, reject) => {
  output.on('close', resolve);
  output.on('error', reject);
  archive.on('error', reject);
  archive.on('warning', (error) => error.code === 'ENOENT' ? undefined : reject(error));
});

archive.pipe(output);
archive.glob('**/*', {
  cwd: projectRoot,
  dot: true,
  followSymlinks: false,
  ignore: [
    '.git/**',
    '.next/**',
    'node_modules/**',
    'dist/**',
    '.env',
    '.env.local',
    '.env.development.local',
    '.env.production.local',
    '.env.test.local',
    '*.log',
    'Thumbs.db',
    '.DS_Store',
    'tsconfig.tsbuildinfo',
  ],
}, { prefix: 'sections-pack' });

await archive.finalize();
await finished;

const { size } = await stat(archivePath);
process.stdout.write(`Created ${archivePath} (${(size / 1024 / 1024).toFixed(2)} MB)\n`);
