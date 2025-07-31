export const PAYLOAD_API_URL = process.env.PAYLOAD_API_URL || process.env.PUBLIC_PAYLOAD_API_URL || 'http://localhost:3000';

interface FetchOptions {
  page?: number;
  limit?: number;
  locale?: string | undefined;
}

interface FetchBlogOptions extends FetchOptions {
  category?: string;
}

export async function fetchProducts({ page = 1, limit = 12, locale }: FetchOptions = {}) {
  const url = new URL('/api/productos', PAYLOAD_API_URL);
  url.searchParams.set('page', String(page));
  url.searchParams.set('limit', String(limit));
  url.searchParams.set('depth', '2');
  url.searchParams.set('draft', 'false');
  if (locale) url.searchParams.set('locale', locale);

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  return res.json();
}

export async function fetchProductBySlug(slug: string, locale?: string) {
  const url = new URL('/api/productos', PAYLOAD_API_URL);
  url.searchParams.set('where[slug][equals]', slug);
  url.searchParams.set('depth', '2');
  url.searchParams.set('draft', 'false');
  if (locale) url.searchParams.set('locale', locale);

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch product: ${res.status}`);
  }

  const data = await res.json();
  return data?.docs?.[0];
}

export async function fetchCertifications({
  page = 1,
  limit = 12,
  locale,
}: FetchOptions = {}) {
  const url = new URL('/api/certifications', PAYLOAD_API_URL);
  url.searchParams.set('page', String(page));
  url.searchParams.set('limit', String(limit));
  url.searchParams.set('depth', '2');
  url.searchParams.set('draft', 'false');
  url.searchParams.set('sort', 'createdAt');
  if (locale) url.searchParams.set('locale', locale);

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch certifications: ${res.status}`);
  }

  return res.json();
}

export async function fetchBlogs({
  page = 1,
  limit = 12,
  locale,
  category,
}: FetchBlogOptions = {}) {
  const url = new URL('/api/blogs', PAYLOAD_API_URL);
  url.searchParams.set('page', String(page));
  url.searchParams.set('limit', String(limit));
  url.searchParams.set('depth', '2');
  url.searchParams.set('draft', 'false');
  if (locale) url.searchParams.set('locale', locale);
  if (category) url.searchParams.set('where[categories][equals]', category);

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch blogs: ${res.status}`);
  }

  return res.json();
}

export async function fetchBlogBySlug(slug: string, locale?: string) {
  const url = new URL('/api/blogs', PAYLOAD_API_URL);
  url.searchParams.set('where[slug][equals]', slug);
  url.searchParams.set('depth', '2');
  url.searchParams.set('draft', 'false');
  if (locale) url.searchParams.set('locale', locale);

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch blog: ${res.status}`);
  }

  const data = await res.json();
  return data?.docs?.[0];
}
