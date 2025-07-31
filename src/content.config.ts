// src/content/config.ts
import { defineCollection, z } from "astro:content";
import parseTomlToJson from "./lib/utils/parseTomlToJson";

// Cargar configuración del archivo TOML
const config = parseTomlToJson("./src/config/config.toml");
const { integration_folder } = config.settings;

// 📄 Esquema base reutilizable (pages, blog, products, etc.)
const page = z.object({
  title: z.string(),
  date: z.date().optional(), // e.g. 2022-01-01 or with timezone
  image: z.string().optional(),
  draft: z.boolean().optional(),
  excerpt: z.string().optional(), // ¡Agregado!
  description: z.string().optional(),
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),
  robots: z.string().optional(),
  exclude_from_sitemap: z.boolean().optional(),
  custom_slug: z.string().optional(),
  canonical: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  disable_tagline: z.boolean().optional(),
});

// 🧠 Botón opcional (para integraciones u otros usos)
const buttonSchema = z.object({
  enable: z.boolean(),
  label: z.string(),
  url: z.string(),
  rel: z.string().optional(),
  target: z.string().optional(),
});

// 📰 Blog Collection
const blog_collection = defineCollection({
  schema: page.merge(
    z.object({
      categories: z.array(z.string()).default(["others"]),
      author: z.string().optional(),
      excerpt: z.string().optional(),
    }),
  ),
});

// 🧪 Integration Collection
const integration_collection = defineCollection({
  schema: page.merge(
    z.object({
      categories: z.array(z.string()).optional(),
      excerpt: z.string().optional(),
      cta_btn: buttonSchema.optional(),
      sections: z
        .array(
          z.object({
            title: z.string(),
            description: z.string(),
            category: z.string(),
          }),
        )
        .optional(),
      fields: z
        .array(
          z.object({
            name: z.string(),
            content: z.string(),
          }),
        )
        .optional(),
    }),
  ),
});

// 🛍️ Products Collection
const products_collection = defineCollection({
  schema: page.merge(
    z.object({
      categories: z.array(z.string()).default(["productos"]),
      author: z.string().optional(),
      excerpt: z.string().optional(),
      image: z.string().optional(),
    }),
  ),
});

// 📦 Exportar todas las colecciones
export const collections = {
  blog: blog_collection,
  integration: integration_collection,
  [integration_folder]: integration_collection,

  pages: defineCollection({ schema: page }),
  products: products_collection,

  sections: defineCollection({}),
  contact: defineCollection({}),
  faq: defineCollection({}),
  pricing: defineCollection({}),
  homepage: defineCollection({}),
  author: defineCollection({}),
  changelog: defineCollection({}),
};
