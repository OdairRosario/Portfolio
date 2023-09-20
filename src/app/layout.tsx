'use client'

import './global.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'TESTE',
}

import { ReactNode } from 'react'
import Layout from './main-layout'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  
  return (
    <Layout>
      {children}
    </Layout>
  )
}