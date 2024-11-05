import type { Metadata } from "next";
import "../../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css"

export const metadata: Metadata = {
  title: "DevFlix",
  description: "Tenha acesso aos melhores conteúdos de uma forma simples e fácil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon"/>
        <meta property="og:title" content="DevFlix" key="title"/>
        <meta name="description"
        content="Tenha acesso aos melhores conteúdos de uma forma simples e fácil."/>
    </head>
    <body>
    {children}
    </body>
    </html>
  );
}
