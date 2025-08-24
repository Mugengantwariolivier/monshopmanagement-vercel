# MonShop (Vercel-Ready)

Static frontend in `public/`, serverless API in `api/`.

## After Deploy
- `/` — storefront
- `/admin.html` — admin login demo
- `/api/products` — GET products
- `/api/users` — POST login `{ username, password }`
- `/api/orders` — GET orders

> Writes are not persisted in Vercel serverless (demo is read-only).

## Deploy (No Terminal)
1. Push this folder to a GitHub repo (e.g., `monshop-vercel`).
2. Go to https://vercel.com → **New Project** → Import.
3. **Framework Preset**: **Other** (dropdown).
4. Leave **Build Command** empty.
5. Leave **Output Directory** empty (Vercel serves `/public` automatically).
6. Deploy.
