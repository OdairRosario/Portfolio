'use client'

import './global.css'
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
  );
}
