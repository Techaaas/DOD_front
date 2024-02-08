import type { Metadata } from 'next'
import { Alata } from 'next/font/google'
import './globals.css'
import {TheHeader} from "@/components/Headers/HeaderMain/TheHeader";
import {StoreProvider} from "@/store/Provider/StoreProvider";

const alata = Alata({weight: '400', subsets: ['latin']})

export const metadata: Metadata = {
  title: 'DOD',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
      <StoreProvider>
        <html lang="en">
        <TheHeader/>
        <body className={alata.className}>{children}</body>
        </html>
      </StoreProvider>
  )
}
