"use server";

import { createClient } from "@supabase/supabase-js";

/**
 * Resultado retornado para o Client Component.
 * Em caso de sucesso devolve a URL dinâmica do WhatsApp para o
 * componente cliente fazer o redirect (window.location.href).
 */
export type LeadResult =
  | { success: true; redirectUrl: string }
  | { success: false; error: string };

// Número da EliteCar (formato internacional, sem símbolos).
const WHATSAPP_NUMBER = "5516996496957";

export async function salvarLead(formData: FormData): Promise<LeadResult> {
  // 1. Extração + sanitização básica -------------------------------------
  const nome = String(formData.get("nome") ?? "").trim();
  const whatsapp = String(formData.get("whatsapp") ?? "").trim();
  const veiculo = String(formData.get("veiculo") ?? "").trim();

  // 2. Validação ----------------------------------------------------------
  if (nome.length < 2) {
    return { success: false, error: "Por favor, informe seu nome completo." };
  }

  const digitos = whatsapp.replace(/\D/g, "");
  if (digitos.length < 10 || digitos.length > 11) {
    return {
      success: false,
      error: "Informe um WhatsApp válido com DDD, ex: (16) 99999-9999.",
    };
  }

  if (veiculo.length < 2) {
    return { success: false, error: "Informe o modelo do seu carro." };
  }

  // 3. Conexão com o Supabase (apenas server-side) ------------------------
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  // service_role NUNCA vai pro client — fica só nesta Server Action.
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error("[EliteCar] Variáveis de ambiente do Supabase ausentes.");
    return {
      success: false,
      error: "Estamos com instabilidade no momento. Tente pelo botão do WhatsApp.",
    };
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
  });

  // 4. Insert na tabela `leads` (id e created_at são gerados no banco) ----
  const { error } = await supabase.from("leads").insert({
    nome,
    whatsapp,
    veiculo,
  });

  if (error) {
    console.error("[EliteCar] Erro ao inserir lead:", error.message);
    // Mesmo se o banco falhar, não travamos a conversão: mandamos pro Whats.
  }

  // 5. Monta a URL dinâmica do WhatsApp -----------------------------------
  const mensagem =
    `Olá! Meu nome é ${nome}. ` +
    `Tenho um ${veiculo} financiado e quero uma avaliação gratuita para vender e quitar a dívida.`;

  const redirectUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

  return { success: true, redirectUrl };
}
