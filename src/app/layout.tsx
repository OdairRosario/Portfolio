'use client'

import './global.css'
import { ReactNode } from 'react'
import Header from '@/components/header/header'

import Nav from '@/components/nav/nav'
import { sora } from '@/utils/fonts/sora-font'
import TopImage from '@/components/top-image/top-image'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-br" className={sora.className} >
            <body className={`text-white bg-app page bg-cover bg-no-repeat ${sora.variable} font-sora`}>
                <Header />
                <TopImage />
                <Nav />
                {children}
            </body>
        </html>
  );
}
