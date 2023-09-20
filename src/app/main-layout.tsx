'use client'

import './global.css'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'

const sora = Sora({
    subsets: ['latin'],
    variable: '--font-sora',
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

export const metadata: Metadata = {
    title: 'Portfolio',
    description: '',
}

import Nav from '@/components/nav/nav'
import Header from '@/components/header/header'
import TopLeftImage from '@/components/top-left-image/top-left-image'
import { ReactNode } from 'react'

export default function Layout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <html lang="en" className={sora.className} >
            <body className={`text-white bg-app page bg-cover bg-no-repeat ${sora.variable} font-sora `}>
                <Header />
                <TopLeftImage />
                <Nav />
                
                {children}
            </body>
        </html>
    )
}
