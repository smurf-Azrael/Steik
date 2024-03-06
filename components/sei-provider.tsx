"use client"

import * as React from "react"
import { SeiWalletProvider, SeiWalletProviderProps } from "@sei-js/react"

export function SeiProvider({ children, ...props }: SeiWalletProviderProps) {
  return <SeiWalletProvider {...props}>{children}</SeiWalletProvider>
}
