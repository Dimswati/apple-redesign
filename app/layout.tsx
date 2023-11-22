import type { Metadata } from 'next'
import Header from '@/components/Header'
import { Poppins } from 'next/font/google'
import './globals.css'
import CartProvider from '@/redux/provider'

import { Toaster } from 'react-hot-toast'

import Basket from '@/components/Basket'

const font = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ['italic', 'normal'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <CartProvider>
          <Toaster position='bottom-center'/>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}