import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sales Intelligence Portal",
  description: "AI-powered sales analytics portal powered by Tableau Public.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}