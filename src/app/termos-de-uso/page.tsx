import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Termos de Uso | EliteCar",
  description:
    "Condições de uso do site da EliteCar e do serviço de compra de veículos com dívida.",
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

export default function TermosDeUso() {
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
          Termos de Uso
        </h1>
        <p className="mt-2 text-sm text-neutral-500">Última atualização: junho de 2026</p>

        <p className="mt-6 text-[15px] leading-relaxed text-neutral-700">
          Estes Termos de Uso regulam o acesso e a utilização do site da EliteCar
          e o relacionamento inicial com os interessados em nossos serviços. Ao
          navegar ou enviar seus dados, você declara estar de acordo com as
          condições abaixo.
        </p>

        <Bloco titulo="1. Aceitação dos termos">
          <p>
            O uso deste site implica a aceitação integral destes Termos. Caso não
            concorde com qualquer condição, pedimos que não utilize o site nem
            envie seus dados.
          </p>
        </Bloco>

        <Bloco titulo="2. Sobre o serviço">
          <p>
            A EliteCar atua na compra e na negociação de veículos com parcelas de
            financiamento em atraso, mediante a assunção do saldo devedor e a
            negociação do ágio, sempre sujeita à análise prévia de cada caso. As
            condições, valores e a viabilidade de cada negociação dependem da
            documentação apresentada e da situação específica do contrato.
          </p>
        </Bloco>

        <Bloco titulo="3. Cadastro e informações fornecidas">
          <p>
            Ao preencher nossos formulários ou nos contatar, você se compromete a
            fornecer informações verdadeiras, completas e atualizadas. Você é
            responsável pelos dados que nos envia.
          </p>
        </Bloco>

        <Bloco titulo="4. Natureza da proposta e ausência de garantia">
          <p>
            O envio de dados ou a solicitação de avaliação <strong>não gera
            qualquer obrigação de compra</strong> por parte da EliteCar, nem
            garante a aprovação de uma proposta. Toda negociação depende de
            análise e de aceite mútuo, formalizado em contrato próprio. A
            avaliação é gratuita e sem compromisso para ambas as partes.
          </p>
        </Bloco>

        <Bloco titulo="5. Obrigações do usuário">
          <ul className="list-disc space-y-1 pl-5">
            <li>Utilizar o site de forma lícita e de boa-fé;</li>
            <li>Não inserir informações falsas ou de terceiros sem autorização;</li>
            <li>
              Não praticar atos que comprometam a segurança ou o funcionamento do
              site.
            </li>
          </ul>
        </Bloco>

        <Bloco titulo="6. Propriedade intelectual">
          <p>
            A marca EliteCar, o logotipo, os textos, as imagens e os demais
            elementos deste site são protegidos por lei e não podem ser
            utilizados sem autorização prévia e por escrito.
          </p>
        </Bloco>

        <Bloco titulo="7. Limitação de responsabilidade">
          <p>
            Empenhamo-nos para manter as informações do site corretas e
            atualizadas, mas não garantimos que estejam livres de erros ou
            interrupções. A EliteCar não se responsabiliza por decisões tomadas
            exclusivamente com base no conteúdo do site, sem a devida análise do
            caso concreto.
          </p>
        </Bloco>

        <Bloco titulo="8. Links e serviços de terceiros">
          <p>
            O site pode conter links ou integrações com serviços de terceiros
            (como o WhatsApp). Não nos responsabilizamos pelas práticas ou
            políticas desses serviços, que possuem termos próprios.
          </p>
        </Bloco>

        <Bloco titulo="9. Privacidade">
          <p>
            O tratamento dos seus dados pessoais é regido pela nossa{" "}
            <a href="/politica-de-privacidade" className="font-medium underline" style={{ color: "#A07D14" }}>
              Política de Privacidade
            </a>
            , parte integrante destes Termos.
          </p>
        </Bloco>

        <Bloco titulo="10. Alterações dos termos">
          <p>
            Podemos atualizar estes Termos a qualquer momento. A versão vigente é
            sempre a publicada nesta página, com a data de revisão indicada no
            topo.
          </p>
        </Bloco>

        <Bloco titulo="11. Lei aplicável e foro">
          <p>
            Estes Termos são regidos pelas leis da República Federativa do
            Brasil. Fica eleito o foro da Comarca de Ribeirão Preto — SP para
            dirimir eventuais controvérsias, com renúncia a qualquer outro, por
            mais privilegiado que seja.
          </p>
        </Bloco>

        <Bloco titulo="12. Contato">
          <p>
            Dúvidas sobre estes Termos? Fale com a gente pelo e-mail{" "}
            <strong>elitecarrealiza@gmail.com</strong> ou pelo WhatsApp (16)
            99649-6957.
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
