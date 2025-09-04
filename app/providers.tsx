"use client";

import { SessionProvider } from "next-auth/react";
import { AppProgressBar as ProgressBar, useRouter } from "next-nprogress-bar";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type * as React from "react";
import { Toaster } from "sonner";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();
  return (
    <SessionProvider>
      <ProgressBar
        color="#4f46e5"
        options={{ showSpinner: false }}
        shallowRouting
      />
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </NextThemesProvider>

      {/* Notificaciones */}
      <Toaster
        richColors
        position="top-right"
        pauseWhenPageIsHidden={false}
        theme="system"
      />
    </SessionProvider>
  );
}
