# Bioxiplas Landing Page

This project uses **Astro** together with **Payload CMS**. Products and certifications are fetched from the Payload API so new content appears without redeploy.

## Setup

1. Install dependencies:
   ```bash
   yarn install
   ```
2. Copy the environment file and update the URL of your Payload instance:
   ```bash
   cp .env.example .env
   # edit .env and set PAYLOAD_API_URL
   ```
3. Run the development server:
   ```bash
   yarn dev
   ```

## Payload API

Product data is retrieved using requests like:
`GET $PAYLOAD_API_URL/api/productos?page=1&limit=12`.

Certification data can be fetched with:
`GET $PAYLOAD_API_URL/api/certifications?page=1&limit=12`.

The front-end uses these endpoints from [`src/lib/payload.ts`](src/lib/payload.ts).

## Tests

Run unit tests with:
```bash
yarn test
```
