import '@/styles/globals.css'
import clsx from 'clsx'
import type { Metadata, Viewport } from 'next'
import { Toaster } from 'sonner'

import { Providers } from './providers'

import NavbarComponent from '@/components/layout/navbar/navbar'
import Sidenav from '@/components/layout/sidenav'
import { fontSans } from '@/config/fonts'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: '/favicon.ico',
	},
}

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html suppressHydrationWarning lang="es">
			<head />
			<body
				className={clsx(
					'min-h-screen font-sans antialiased',
					fontSans.variable,
				)}
			>
				<Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
					<div className="relative flex flex-col h-screen bg-[#511C8E]">
						<main className="flex flex-grow overflow-hidden">
							<Sidenav />
							<div className="flex flex-col flex-1 bg-slate-100 rounded-bl-[45px] rounded-tl-[45px] py-5 shadow-2xl shadow-black">
								<NavbarComponent />
								<div className="flex-1 overflow-y-auto px-5 py-4 custom-scroll-primary">
									{children}
								</div>
							</div>
						</main>
					</div>
					<Toaster richColors position="top-right" closeButton />
				</Providers>
			</body>
		</html>
	)
}
