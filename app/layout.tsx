import Footer from '@/components/navigation/Footer'
import NavBar from '@/components/navigation/NavBar'
import { ThemeProvider } from '@/components/theme/theme-provider'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'IReady',
	description: 'Website for interview preparation',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<NavBar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
