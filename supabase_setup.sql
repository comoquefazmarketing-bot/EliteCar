-- Execute no SQL Editor do Supabase

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nome text not null,
  whatsapp text not null,
  veiculo text not null
);

-- RLS ligado: ninguém lê/escreve pelo client.
-- A Server Action usa a chave service_role, que ignora o RLS com segurança.
alter table public.leads enable row level security;

-- (Opcional) índice pra consultar leads por data no painel admin.
create index if not exists leads_created_at_idx on public.leads (created_at desc);
