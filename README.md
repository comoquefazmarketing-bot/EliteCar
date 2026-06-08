# EliteCar — Landing Page

Landing page de captura de leads (Next.js App Router + Supabase + Tailwind v4).

## Estrutura

```
EliteCar/
├─ public/
│  └─ logo-elitecar.jpg
├─ src/
│  └─ app/
│     ├─ page.tsx
│     ├─ layout.tsx
│     ├─ actions.ts
│     ├─ globals.css
│     ├─ politica-de-privacidade/page.tsx
│     └─ termos-de-uso/page.tsx
├─ next.config.ts
├─ package.json
├─ tsconfig.json
├─ postcss.config.mjs
├─ .gitignore
└─ supabase_setup.sql
```

## Setup local

```bash
npm install
cp .env.local.example .env.local   # e preencha os valores
npm run dev
```

## Variáveis de ambiente (local e Vercel)

- `NEXT_PUBLIC_SUPABASE_URL` — URL do projeto Supabase
- `SUPABASE_SERVICE_ROLE_KEY` — chave service_role (apenas server-side; nunca commitar)

## Banco de dados

Rode o conteúdo de `supabase_setup.sql` no SQL Editor do Supabase.

## Deploy (Vercel)

1. Conecte o repositório.
2. Configure as 2 variáveis de ambiente acima.
3. Deploy.
