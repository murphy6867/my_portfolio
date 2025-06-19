import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sonsawan Ngamsom | Portfolio",
  description:
    "Portfolio of Sonsawan Ngamsom, a software engineer specializing in web development.",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
