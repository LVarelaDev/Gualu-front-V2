'use client'

import { NextUIProvider } from '@nextui-org/system'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'
import { useRouter } from 'next/navigation'
import type * as React from 'react'

export interface ProvidersProps {
	children: React.ReactNode
	themeProps?: ThemeProviderProps
}

export function Providers({ children, themeProps }: ProvidersProps) {
	const router = useRouter()

	return (
		<>
			<ProgressBar
				color="#4f46e5"
				options={{ showSpinner: false }}
				shallowRouting
			/>
			<NextUIProvider navigate={router.push}>
				{children}
				{/* <NextThemesProvider {...themeProps}>
					</NextThemesProvider> */}
			</NextUIProvider>
		</>
	)
}
