import type { MetadataRoute } from 'next';
import { SITE_URL } from '../config/free-sections';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/pages-examples/saas', '/pages-examples/agency', '/pages-examples/portfolio', '/pages-examples/mobile-app', '/pages-examples/product-launch'];
  return routes.map((route) => ({ url: `${SITE_URL}${route}`, lastModified: new Date(), changeFrequency: route ? 'monthly' : 'weekly', priority: route ? 0.7 : 1 }));
}
