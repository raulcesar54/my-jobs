import { UseFileProvider } from "@/hooks/useFile";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Job",
  description: "Gerenciador de jobs",
};

export default function RootLayout({
  children,
}: {
  children: React.JSX.Element;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UseFileProvider>{children}</UseFileProvider>
      </body>
    </html>
  );
}
