import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Política de Privacidade | EliteCar",
  description:
    "Saiba como a EliteCar coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.",
};

const GOLD = "#E0B23E";

function Bloco({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2
        className="border-l-4 pl-3 text-lg font-bold text-[#0A0A0A] sm:text-xl"
        style={{ borderColor: GOLD }}
      >
        {titulo}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-neutral-700">
        {children}
      </div>
    </section>
  );
}

export default function PoliticaDePrivacidade() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#0A0A0A] px-5 py-5 sm:px-8">
        <a href="/" aria-label="EliteCar — página inicial">
          <Image
            src="/logo-elitecar.jpg"
            alt="EliteCar — Veículos Premium"
            width={249}
            height={250}
            className="h-auto w-[120px]"
            style={{ mixBlendMode: "screen" }}
          />
        </a>
      </header>

      {/* Conteúdo */}
      <main className="mx-auto max-w-2xl px-5 py-10 sm:px-8">
        <a href="/" className="text-sm font-medium text-neutral-500 hover:text-[#0A0A0A]">
          ← Voltar para o site
        </a>

        <h1 className="mt-5 text-2xl font-extrabold leading-tight text-[#0A0A0A] sm:text-3xl">
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-neutral-500">Última atualização: junho de 2026</p>

        <p className="mt-6 text-[15px] leading-relaxed text-neutral-700">
          A EliteCar respeita a sua privacidade e está comprometida com a
          proteção dos seus dados pessoais. Esta Política explica como coletamos,
          usamos, armazenamos e protegemos as suas informações, em conformidade
          com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados — LGPD).
        </p>

        <Bloco titulo="1. Quem é o responsável pelos seus dados">
          <p>
            O tratamento dos seus dados é realizado por{" "}
            <strong>EliteCar Negócios Automotivos LTDA</strong>, inscrita no CNPJ
            sob o nº [00.000.000/0001-00], com sede em Ribeirão Preto — SP
            (&quot;EliteCar&quot;, &quot;nós&quot;).
          </p>
          <p>
            Para qualquer questão relacionada à privacidade, fale conosco pelo
            e-mail <strong>elitecarrealiza@gmail.com</strong>.
          </p>
        </Bloco>

        <Bloco titulo="2. Quais dados coletamos">
          <p>Coletamos dois tipos de dados:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Dados fornecidos por você:</strong> nome, telefone/WhatsApp,
              modelo do veículo e demais informações enviadas em nossos
              formulários ou em conversas pelo WhatsApp.
            </li>
            <li>
              <strong>Dados de navegação:</strong> endereço IP, tipo de
              dispositivo e navegador, páginas acessadas, tempo de visita e
              identificadores de cookies, coletados automaticamente.
            </li>
          </ul>
        </Bloco>

        <Bloco titulo="3. Para que usamos seus dados">
          <ul className="list-disc space-y-1 pl-5">
            <li>Entrar em contato para avaliar seu veículo e conduzir a negociação;</li>
            <li>Prestar, manter e melhorar nossos serviços;</li>
            <li>Cumprir obrigações legais, regulatórias e contratuais;</li>
            <li>
              Realizar ações de marketing e remarketing (por exemplo, anúncios no
              Google e em redes sociais), quando aplicável.
            </li>
          </ul>
        </Bloco>

        <Bloco titulo="4. Base legal para o tratamento">
          <p>
            Tratamos seus dados com fundamento no seu consentimento, na execução
            de procedimentos preliminares relacionados a um contrato a seu pedido
            e no legítimo interesse, conforme o art. 7º da LGPD.
          </p>
        </Bloco>

        <Bloco titulo="5. Compartilhamento de dados">
          <p>Podemos compartilhar seus dados com:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Provedores de tecnologia e armazenamento (por exemplo, Supabase);</li>
            <li>Plataformas de comunicação (por exemplo, WhatsApp / Meta);</li>
            <li>
              Ferramentas de publicidade e análise (por exemplo, Google Ads,
              Google Analytics e Meta Ads);
            </li>
            <li>Autoridades públicas, quando exigido por lei ou ordem judicial.</li>
          </ul>
          <p>
            <strong>Não vendemos seus dados pessoais.</strong> O Google, como
            fornecedor terceiro, utiliza cookies para veicular anúncios com base
            em visitas anteriores ao nosso site. Você pode desativar a
            publicidade personalizada nas configurações de anúncios do Google
            (adssettings.google.com).
          </p>
        </Bloco>

        <Bloco titulo="6. Cookies">
          <p>
            Utilizamos cookies e tecnologias semelhantes para fazer o site
            funcionar, entender como ele é utilizado e personalizar anúncios.
            Você pode gerenciar ou bloquear cookies nas configurações do seu
            navegador, ciente de que isso pode afetar algumas funcionalidades.
          </p>
        </Bloco>

        <Bloco titulo="7. Por quanto tempo guardamos seus dados">
          <p>
            Mantemos seus dados pessoais apenas pelo tempo necessário para
            cumprir as finalidades descritas nesta Política e as obrigações
            legais aplicáveis. Após esse período, os dados são eliminados ou
            anonimizados.
          </p>
        </Bloco>

        <Bloco titulo="8. Seus direitos como titular">
          <p>Nos termos do art. 18 da LGPD, você pode solicitar:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Confirmação da existência de tratamento e acesso aos seus dados;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>Portabilidade dos dados a outro fornecedor;</li>
            <li>Informação sobre com quem seus dados são compartilhados;</li>
            <li>Revogação do consentimento.</li>
          </ul>
          <p>
            Para exercer esses direitos, envie um e-mail para{" "}
            <strong>elitecarrealiza@gmail.com</strong>.
          </p>
        </Bloco>

        <Bloco titulo="9. Segurança">
          <p>
            Adotamos medidas técnicas e administrativas razoáveis para proteger
            seus dados contra acessos não autorizados, perda, alteração ou
            divulgação indevida.
          </p>
        </Bloco>

        <Bloco titulo="10. Alterações nesta Política">
          <p>
            Podemos atualizar esta Política periodicamente. A data da última
            revisão estará sempre indicada no topo desta página.
          </p>
        </Bloco>

        <Bloco titulo="11. Contato">
          <p>
            Dúvidas sobre esta Política ou sobre o tratamento dos seus dados?
            Fale com a gente pelo e-mail <strong>elitecarrealiza@gmail.com</strong>{" "}
            ou pelo WhatsApp (16) 99649-6957.
          </p>
        </Bloco>
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] px-5 py-8 text-sm text-neutral-400 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <span className="font-extrabold" style={{ color: GOLD }}>
            EliteCar
          </span>{" "}
          — Ribeirão Preto, SP
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            <a href="/politica-de-privacidade" className="hover:text-[#E0B23E]">
              Política de Privacidade
            </a>
            <a href="/termos-de-uso" className="hover:text-[#E0B23E]">
              Termos de Uso
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
