import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'
import { Providers } from '../providers'
import { MainLayout } from '@/shared/layouts'
import '@/styles/globals.css'
import { notoSansFont } from '../../fonts/font'

export function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }))
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	const messages = await getMessages({ locale })

	return {
		title: messages.metadata?.title || 'FiGen - Ideas making real',
		description:
			messages.metadata?.description ||
			'From idea to prototype—faster than ever. Design with AI and watch your product come alive.',
	}
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params

	if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
		notFound()
	}

	const messages = await getMessages({ locale })

	return (
		<html lang={locale}>
			<body className={notoSansFont.variable}>
				<NextIntlClientProvider messages={messages}>
					<Providers>
						<MainLayout>{children}</MainLayout>
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
