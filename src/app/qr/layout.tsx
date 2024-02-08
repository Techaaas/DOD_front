import type { Metadata } from 'next'
import {Alata} from 'next/font/google'
import '../globals.css'
import {StoreProvider} from "@/store/Provider/StoreProvider";
import React from "react";
import { TheHeader } from "@/components/Headers/HeaderMain/TheHeader"

const alata = Alata({weight: '400', subsets: ['latin']})

export const metadata: Metadata = {
  title: 'DOD',
}
export default function QrLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
      <StoreProvider>
        <html lang="en">
        <TheHeader></TheHeader>
        <body className={alata.className}>{children}</body>
        </html>
      </StoreProvider>
  )
}
