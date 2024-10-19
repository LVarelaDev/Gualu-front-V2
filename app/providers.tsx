'use client'

import { NextUIProvider } from '@nextui-org/system'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { useRouter } from 'next-nprogress-bar'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type * as React from 'react'
import { Toaster } from 'sonner'

export interface ProvidersProps {
	children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
	const router = useRouter()
	return (
		<>
			<ProgressBar
				color="#4f46e5"
				options={{ showSpinner: false }}
				shallowRouting
			/>
			<NextUIProvider navigate={router.push}>
				<NextThemesProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</NextThemesProvider>
			</NextUIProvider>

			{/* Notificaciones */}
			<Toaster
				richColors
				position="top-right"
				pauseWhenPageIsHidden={false}
				theme='system'
			/>
		</>
	)
}
