"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import SeiIcon from "@/public/sei.svg"
import {
  WalletConnectButton,
  useCosmWasmClient,
  useSigningCosmWasmClient,
  useWallet,
} from "@sei-js/react"
import { AlignRight } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/header/main-nav"

import MobileMenu from "./mobile-menu"

export function SiteHeader() {
  const marketplace_address =
    "sei1fz28dcd3h8sppels6vg4suwshclyxvd63sxrp5dawshlwe486mrsejx78v"
  const { connectedWallet, accounts } = useWallet()
  const { cosmWasmClient: queryClient } = useCosmWasmClient()
  const { signingCosmWasmClient: signingClient } = useSigningCosmWasmClient()
  const [staked, setStaked] = useState(false)
  const [refresh, setRefresh] = useState(0)

  // const getStakeInfo = async () => {
  //   try {
  //     if (!accounts[0]) return
  //     const response = await queryClient?.queryContractSmart(
  //       marketplace_address,
  //       {
  //         get_staking: {
  //           address: accounts[0]?.address,
  //         },
  //       }
  //     )
  //     if (response === undefined) {
  //       setRefresh(refresh + 1)
  //     }
  //     if (response) setStaked(true)
  //   } catch (err) {
  //     console.log("get stake info error: ", err)
  //   }
  // }

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent px-4 backdrop-blur-lg">
      <div className="flex h-32 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="ml-16 flex items-center space-x-1">
            <div className=" flex w-44 justify-center gap-2 rounded-md bg-[#003049] px-2 py-1 shadow shadow-black/25 hover:bg-[#003049] ">
              {connectedWallet ? <Image src={SeiIcon} alt="sei" /> : <></>}
              <WalletConnectButton buttonClassName="text-center text-[20px] text-[#FDF0D5]  capitalize  whitespace-nowrap" />
            </div>
            <MobileMenu>
              <Button variant="ghost" size="icon" className="ml-2 lg:hidden">
                <AlignRight className="size-5" />
              </Button>
            </MobileMenu>
          </nav>
        </div>
      </div>
    </header>
  )
}
