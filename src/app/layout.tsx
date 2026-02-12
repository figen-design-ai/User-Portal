import { nunitoFont } from '@/fonts/font'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunitoFont.variable} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
