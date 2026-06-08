import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elitecar.com.br"),
  title: "EliteCar | Venda seu carro financiado e quite sua dívida hoje",
  description:
    "Está com parcelas atrasadas e medo da busca e apreensão? A EliteCar compra seu veículo financiado, quita sua dívida e coloca dinheiro no seu bolso. Avaliação 100% gratuita.",
  keywords: [
    "vender carro financiado",
    "carro com parcelas atrasadas",
    "quitar dívida de financiamento",
    "busca e apreensão",
    "venda de ágio veículo",
    "EliteCar",
  ],
  authors: [{ name: "EliteCar" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "EliteCar",
    title: "Venda seu carro financiado e quite sua dívida hoje",
    description:
      "A EliteCar compra seu veículo financiado, quita sua dívida e evita a busca e apreensão. Avaliação gratuita pelo WhatsApp.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-white font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
