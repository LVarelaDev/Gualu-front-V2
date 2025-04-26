import "@/assets/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";

import ManageLayout from "@/components/layout/ManageLayout";
import { poppins } from "@/config/fonts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es" className={poppins.className}>
      <head />
      <body className="min-h-screen antialiased bg-slate-50 text-foreground">
        <Providers>
          <ManageLayout>{children}</ManageLayout>
        </Providers>
      </body>
    </html>
  );
}
