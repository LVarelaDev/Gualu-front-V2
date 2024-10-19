import '@/assets/styles/globals.css'
import type { Metadata, Viewport } from 'next'
import { Providers } from './providers'

import { poppins } from '@/config/fonts'
import { siteConfig } from '@/config/site'
import Navbar from '@/modules/core/components/layout/navbar/Navbar'
import Sidebar from '@/modules/core/components/layout/sidebar/Sidebar'

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
		<html suppressHydrationWarning lang="es" className={poppins.className}>
			<head />
			<body className="min-h-screen antialiased bg-background text-foreground">
				<Providers>
					<main className="flex flex-grow overflow-hidden">
						<Sidebar />
						<section className="flex-1">
							<Navbar />
							<section className="px-4 py-2">{children}</section>
						</section>
					</main>
				</Providers>
			</body>
		</html>
	)
}
