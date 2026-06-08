"use client";

import { useState } from "react";
import { salvarLead } from "./actions";

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

// Máscara de telefone: (11) 99999-9999
function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.replace(/(\d{0,2})/, "($1");
  if (digits.length <= 6)
    return digits.replace(/(\d{2})(\d{0,4})/, "($1) $2");
  if (digits.length <= 10)
    return digits.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

const WHATSAPP_DIRETO =
  "https://wa.me/5516996496957?text=" +
  encodeURIComponent(
    "Olá! Quero uma avaliação gratuita do meu carro financiado.",
  );

/* -------------------------------------------------------------------------- */
/*  Ícones (inline SVG, sem dependências)                                     */
/* -------------------------------------------------------------------------- */

function CheckIcon() {
  return (
    <svg
      className="h-6 w-6 flex-shrink-0 text-emerald-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Dados estáticos                                                            */
/* -------------------------------------------------------------------------- */

const dores = [
  {
    titulo: "Parcelas acumuladas e juros absurdos",
    texto:
      "A dívida só cresce. Cada mês que passa, os juros tornam o financiamento impagável e o buraco fica maior.",
    emoji: "📉",
  },
  {
    titulo: "Medo constante da busca e apreensão",
    texto:
      "Aquele aperto no peito toda vez que tocam a campainha ou bate um carro estranho na frente de casa.",
    emoji: "🚗",
  },
  {
    titulo: "Nome sujo e cobranças sem fim",
    texto:
      "Ligações ininterruptas, CPF negativado e a pressão psicológica das cobranças tirando seu sono.",
    emoji: "📵",
  },
];

const beneficios = [
  "Quitação integral do contrato de financiamento",
  "Liberação imediata do seu CPF",
  "Contrato registrado em cartório, com total segurança jurídica",
  "Pagamento do saldo à vista, na hora, via PIX",
];

const passos = [
  {
    n: "1",
    titulo: "Envie seus dados",
    texto:
      "Preencha o formulário ou chame no WhatsApp. Leva menos de 1 minuto.",
  },
  {
    n: "2",
    titulo: "Análise jurídica e comercial",
    texto:
      "Nossa equipe avalia seu veículo e a situação do contrato — sem custo e sem compromisso.",
  },
  {
    n: "3",
    titulo: "Dinheiro na conta",
    texto:
      "Assinamos o contrato em cartório, quitamos o banco e você recebe o saldo via PIX.",
  },
];

const faqs = [
  {
    q: "Minha busca e apreensão já foi decretada. Ainda dá pra fazer?",
    a: "Na maioria dos casos, sim. Quanto antes você falar com a gente, maiores as chances de agir antes da apreensão efetiva. Faça a avaliação gratuita agora mesmo e analisamos o seu caso com urgência.",
  },
  {
    q: "E se o banco não aceitar a transferência?",
    a: "Trabalhamos com a assunção do saldo devedor de forma juridicamente segura e com contrato registrado em cartório. Cada caso é analisado individualmente pela nossa equipe jurídica para encontrar a melhor solução para você.",
  },
  {
    q: "A avaliação tem algum custo?",
    a: "Não. A avaliação é 100% gratuita e sem compromisso. Você só decide se quer seguir depois de receber a nossa proposta.",
  },
  {
    q: "Quanto tempo demora todo o processo?",
    a: "Depende da documentação e da situação do contrato, mas trabalhamos para agilizar ao máximo. Em muitos casos, o pagamento sai em poucos dias após a análise.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Página                                                                     */
/* -------------------------------------------------------------------------- */

export default function Home() {
  // --- Estado do formulário ---
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [veiculo, setVeiculo] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  // --- Estado do FAQ ---
  const [faqAberto, setFaqAberto] = useState<number | null>(0);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return; // trava cliques múltiplos do usuário ansioso

    setErro(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("nome", nome);
      formData.append("whatsapp", whatsapp);
      formData.append("veiculo", veiculo);

      const result = await salvarLead(formData);

      if (result.success) {
        // Redireciona para o WhatsApp — mantém o loading durante a transição.
        window.location.href = result.redirectUrl;
      } else {
        setErro(result.error);
        setLoading(false);
      }
    } catch {
      setErro(
        "Algo deu errado. Tente novamente ou fale direto pelo nosso WhatsApp.",
      );
      setLoading(false);
    }
  }

  return (
    <main className="overflow-x-hidden">
      {/* Keyframes do CTA pulsante (auto-contido, sem editar o globals.css) */}
      <style>{`
        @keyframes elitecar-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.55); }
          50%      { box-shadow: 0 0 0 14px rgba(16, 185, 129, 0); }
        }
        .cta-pulse { animation: elitecar-pulse 2s infinite; }
        @media (prefers-reduced-motion: reduce) {
          .cta-pulse { animation: none; }
        }
      `}</style>

      {/* ================= SESSÃO 1 — HERO ================= */}
      <section className="relative bg-[#0A1628] text-white">
        {/* textura sutil de fundo */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-md px-5 pb-12 pt-10 sm:max-w-xl sm:px-8">
          {/* Marca */}
          <div className="mb-8 flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight">
              Elite<span className="text-emerald-400">Car</span>
            </span>
          </div>

          {/* Selo de confiança */}
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            100% legal • Contrato em cartório
          </span>

          {/* Headline */}
          <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
            Não perca seu carro para o banco{" "}
            <span className="text-emerald-400">sem receber nada.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            A EliteCar compra seu veículo financiado hoje. Nós quitamos a sua
            dívida, evitamos a busca e apreensão e você sai com{" "}
            <strong className="font-semibold text-white">
              dinheiro na mão
            </strong>
            . 100% legal e seguro.
          </p>

          {/* Formulário rápido de captura */}
          <form
            onSubmit={handleSubmit}
            className="mt-7 rounded-2xl bg-white p-5 shadow-2xl shadow-black/30"
            noValidate
          >
            <p className="mb-4 text-center text-sm font-bold uppercase tracking-wide text-[#0A1628]">
              Avaliação gratuita em 1 minuto
            </p>

            <div className="space-y-3">
              <input
                type="text"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome completo"
                autoComplete="name"
                disabled={loading}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 disabled:opacity-60"
              />
              <input
                type="tel"
                name="whatsapp"
                inputMode="numeric"
                value={whatsapp}
                onChange={(e) => setWhatsapp(maskPhone(e.target.value))}
                placeholder="(16) 99999-9999"
                autoComplete="tel"
                disabled={loading}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 disabled:opacity-60"
              />
              <input
                type="text"
                name="veiculo"
                value={veiculo}
                onChange={(e) => setVeiculo(e.target.value)}
                placeholder="Modelo do carro (ex: Onix 2020)"
                disabled={loading}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 disabled:opacity-60"
              />
            </div>

            {erro && (
              <p className="mt-3 text-center text-sm font-medium text-red-600">
                {erro}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 text-base font-bold text-white transition hover:bg-emerald-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-emerald-500/70 ${
                loading ? "" : "cta-pulse"
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"
                    />
                  </svg>
                  Processando...
                </>
              ) : (
                "Quero uma Avaliação Gratuita"
              )}
            </button>

            <p className="mt-3 text-center text-xs text-slate-400">
              🔒 Seus dados estão seguros. Sem compromisso.
            </p>
          </form>
        </div>
      </section>

      {/* ================= SESSÃO 2 — AGITAÇÃO DA DOR ================= */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-md px-5 sm:max-w-2xl sm:px-8">
          <h2 className="text-center text-2xl font-extrabold leading-tight text-[#0A1628] sm:text-3xl">
            Você está passando por alguma destas situações?
          </h2>
          <div className="mt-8 grid gap-4">
            {dores.map((d) => (
              <div
                key={d.titulo}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm"
              >
                <div className="text-3xl">{d.emoji}</div>
                <h3 className="mt-3 text-lg font-bold text-[#0A1628]">
                  {d.titulo}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {d.texto}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-base font-semibold text-slate-700">
            Você não precisa carregar esse peso sozinho.{" "}
            <span className="text-emerald-600">Existe uma saída legal.</span>
          </p>
        </div>
      </section>

      {/* ================= SESSÃO 3 — A SOLUÇÃO LEGAL ================= */}
      <section className="bg-[#0A1628] py-14 text-white">
        <div className="mx-auto max-w-md px-5 sm:max-w-2xl sm:px-8">
          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
            Vender o ágio do seu veículo é um{" "}
            <span className="text-emerald-400">direito seu.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Nós assumimos o saldo devedor do seu financiamento. Tudo com
            transparência, segurança jurídica e o respaldo de um contrato
            formal. Veja o que você ganha:
          </p>

          <ul className="mt-7 space-y-4">
            {beneficios.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-base leading-snug text-slate-100">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= SESSÃO 4 — MÉTODO DE 3 PASSOS ================= */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-md px-5 sm:max-w-2xl sm:px-8">
          <h2 className="text-center text-2xl font-extrabold leading-tight text-[#0A1628] sm:text-3xl">
            Simples assim, em 3 passos
          </h2>

          <div className="mt-9 space-y-2">
            {passos.map((p, i) => (
              <div key={p.n} className="relative">
                <div className="flex gap-4">
                  {/* Coluna do número + linha do tempo */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-lg font-extrabold text-white">
                      {p.n}
                    </div>
                    {i < passos.length - 1 && (
                      <div className="my-1 w-0.5 flex-1 bg-emerald-200" />
                    )}
                  </div>
                  {/* Conteúdo */}
                  <div className="pb-7 pt-1.5">
                    <h3 className="text-lg font-bold text-[#0A1628]">
                      {p.titulo}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {p.texto}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#topo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A1628] px-6 py-4 text-base font-bold text-white transition hover:bg-[#0A1628]/90 active:scale-[0.99]"
          >
            Quero começar agora
          </a>
        </div>
      </section>

      {/* ================= SESSÃO 5 — FAQ INTERATIVO ================= */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-md px-5 sm:max-w-2xl sm:px-8">
          <h2 className="text-center text-2xl font-extrabold leading-tight text-[#0A1628] sm:text-3xl">
            Ainda com dúvidas?
          </h2>

          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => {
              const aberto = faqAberto === i;
              return (
                <div
                  key={f.q}
                  className="overflow-hidden rounded-2xl border border-slate-200"
                >
                  <button
                    type="button"
                    onClick={() => setFaqAberto(aberto ? null : i)}
                    aria-expanded={aberto}
                    className="flex w-full items-center justify-between gap-3 bg-slate-50 px-5 py-4 text-left transition hover:bg-slate-100"
                  >
                    <span className="text-base font-semibold text-[#0A1628]">
                      {f.q}
                    </span>
                    <svg
                      className={`h-5 w-5 flex-shrink-0 text-emerald-600 transition-transform duration-200 ${
                        aberto ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-all duration-200 ${
                      aberto
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 py-4 text-sm leading-relaxed text-slate-600">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SESSÃO 6 — FOOTER INSTITUCIONAL ================= */}
      <footer className="bg-[#070F1C] py-10 text-slate-400">
        <div className="mx-auto max-w-md px-5 sm:max-w-2xl sm:px-8">
          <span className="text-lg font-extrabold text-white">
            Elite<span className="text-emerald-400">Car</span>
          </span>
          <p className="mt-3 text-sm leading-relaxed">
            EliteCar Negócios Automotivos LTDA
            <br />
            CNPJ: 00.000.000/0001-00
            <br />
            Ribeirão Preto — SP
          </p>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href="/politica-de-privacidade" className="hover:text-emerald-400">
              Política de Privacidade
            </a>
            <a href="/termos-de-uso" className="hover:text-emerald-400">
              Termos de Uso
            </a>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-slate-500">
            © {new Date().getFullYear()} EliteCar. Todos os direitos reservados.
            As condições de negociação dependem de análise individual de cada
            contrato.
          </p>
        </div>
      </footer>

      {/* ============ BOTÃO FLUTUANTE DE WHATSAPP ============ */}
      <a
        href={WHATSAPP_DIRETO}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 transition hover:scale-105 hover:bg-emerald-600"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </main>
  );
}
