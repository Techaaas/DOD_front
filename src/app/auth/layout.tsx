import type { Metadata } from 'next'
import {Alata} from 'next/font/google'
import '../globals.css'
import {StoreProvider} from "@/store/Provider/StoreProvider";
import React from "react";
import { TheHeaderAuth } from "@/components/Headers/HeaderAuth/TheHeaderAuth";

const alata = Alata({weight: '400', subsets: ['latin']})

export const metadata: Metadata = {
  title: 'DOD',
}
export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
      <StoreProvider>
        <html lang="en">
          <TheHeaderAuth></TheHeaderAuth>
        <body className={alata.className}>{children}</body>
        </html>
      </StoreProvider>
  )
}
