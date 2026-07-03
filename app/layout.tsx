import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mira Chen | Design Portfolio",
  description:
    "A quiet, editorial portfolio for identity, art direction, and digital design work.",
};

const themeScript = `
  (() => {
    try {
      const stored = localStorage.getItem("theme");
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (stored === "dark" || (!stored && systemDark)) {
        document.documentElement.classList.add("dark");
      }
    } catch (_) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
