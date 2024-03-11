"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  WalletConnectButton,
  useCosmWasmClient,
  useSigningCosmWasmClient,
  useWallet,
} from "@sei-js/react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import NFTContainer from "@/components/common/nft-container"
import StatisticContainer from "@/components/common/statistic-contianer"

export default function Dashboard() {
  const [totalStaked, setTotalStaked] = useState(0)
  const [totalClaimedPoints, setTotalClaimedPoints] = useState(0)
  const fetchCount = async () => {
    console.log("contract address", process.env.NEXT_PUBLIC_NFT_ADDRESS)
    console.log("account address", accounts[0]?.address)
    const response = await queryClient?.queryContractSmart(
      process.env.NEXT_PUBLIC_NFT_ADDRESS || "",
      {
        tokens: {
          owner: accounts[0]?.address,
        },
      }
    )
    console.log(accounts, "accounts")
    console.log(response, "response")
    return response?.tokens
  }
  const fetchStatistic = async () => {
    const response = await queryClient?.queryContractSmart(
      process.env.NEXT_PUBLIC_STEIK_ADDRESS || "",
      {
        get_state: {},
      }
    )
    console.log(response, "statistoc response")
    return response?.state
  }
  const { connectedWallet, accounts } = useWallet()
  const { cosmWasmClient: queryClient } = useCosmWasmClient()
  const [selectedItems, setSelectedItems] = useState<
    Array<{ id: number; kind: string; title: string; selected: boolean }>
  >([
    // { id: 0, kind: "2", title: "#986", selected: false },
    // { id: 1, kind: "1", title: "#986", selected: false },
    // { id: 2, kind: "2", title: "#986", selected: false },
    // { id: 3, kind: "3", title: "#986", selected: false },
    // { id: 4, kind: "4", title: "#986", selected: false },
    // { id: 5, kind: "0", title: "#986", selected: false },
    // { id: 6, kind: "1", title: "#986", selected: false },
    // { id: 7, kind: "2", title: "#986", selected: false },
    // { id: 8, kind: "3", title: "#986", selected: false },
    // { id: 9, kind: "4", title: "#986", selected: false },
    // Add all other NFTs with their kind and title here, ensuring each has a unique way of identification
  ])
  useEffect(() => {
    console.log(accounts)
    if (connectedWallet)
      fetchCount().then((res: Array<string>) => {
        if (res?.length != 0) {
          const fetchedItems = res?.map((item: string, index: number) => ({
            id: index,
            kind: item.slice(3),
            title: item.slice(3),
            selected: false,
          }))
          console.log(fetchedItems, "fetchedItems----")
          setSelectedItems(fetchedItems)
        }
      })
    fetchStatistic().then((res: any) => {
      if (res?.length != 0) {
        setTotalStaked(parseInt(res?.total_staked))
        setTotalClaimedPoints(parseInt(res?.total_claimed_points) / 1000000)
      }
    })
  }, [accounts, connectedWallet, queryClient])
  return (
    <section className="px-16 pb-3 pt-6">
      <h1 className="mx-auto text-left  font-bebas text-5xl text-custom sm:text-7xl md:text-8xl lg:text-9xl">
        STEIK YOUR FOXES
      </h1>
      <p className="text-lg font-bold text-custom sm:text-xl md:text-2xl xl:text-3xl">
        Earn points daily.
      </p>
      <div className="mx-auto mt-3 flex flex-wrap items-center justify-center gap-8 sm:mt-4 sm:justify-between md:mt-8 md:max-w-3xl lg:mt-10 xl:max-w-5xl">
        <StatisticContainer number={totalStaked} content={"Foxes staked"} />
        {/* <StatisticContainer number={15641} content={"Daily points"} /> */}
        <StatisticContainer
          number={totalClaimedPoints}
          content={"Total points"}
        />
        {/* <Button className="whitespace-nowrap text-lg md:text-xl">
          claim points
        </Button> */}
      </div>
      <Separator className="mt-4 border border-solid border-[#003049]" />
      <p className="mt-3 text-lg font-bold text-custom md:text-xl xl:text-2xl">
        Steiked NFTs
      </p>
      <div className="mt-5 flex flex-wrap justify-between gap-4">
        {selectedItems?.map((item, index) => (
          <NFTContainer
            id={index} // It's better to have a more unique key if possible
            kind={item.kind}
            title={item.title}
            selected={item.selected}
            onClick={() => {}}
            // onClick={() => toggleSelectedItem(index)}
          />
        ))}
      </div>
      <div className="mt-6 flex justify-end gap-6">
        <Button className="h-8 whitespace-nowrap text-lg md:text-xl" asChild>
          <Link href="/steik?mode=steik">steik</Link>
        </Button>
        <Button
          className="h-8 whitespace-nowrap text-lg md:text-xl"
          variant={"gray"}
          asChild
        >
          <Link href="/steik?mode=unsteik">unsteik</Link>
        </Button>
      </div>
    </section>
  )
}
