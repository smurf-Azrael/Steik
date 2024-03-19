"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { fetchStatistic } from "@/services/common/fetchStatistic"
import { useCosmWasmClient, useWallet } from "@sei-js/react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import NFTContainer from "@/components/common/nft-container"
import NFTContainerSkeleton from "@/components/common/nft-container-skeleton"
import StatisticContainer from "@/components/common/statistic-contianer"

export default function Dashboard() {
  const [totalStaked, setTotalStaked] = useState(0)
  const [totalClaimedPoints, setTotalClaimedPoints] = useState(0)
  const [isNFTLoading, setIsNFTLoading] = useState(true)
  const [statisticLoading, setStatisticLoading] = useState(true)
  const fetchUnsteikCount = async () => {
    const response = await queryClient?.queryContractSmart(
      process.env.NEXT_PUBLIC_STEIK_ADDRESS || "",
      {
        get_steiker_info: { address: accounts[0]?.address, limit: 30 },
      }
    )
    console.log(accounts, "accounts")
    console.log(response, "response")
    return response?.steik_info?.map((item: any) => item?.token_id)
  }

  const { connectedWallet, accounts } = useWallet()
  const { cosmWasmClient: queryClient } = useCosmWasmClient()
  const [selectedItems, setSelectedItems] = useState<
    Array<{ id: number; kind: string; title: string; selected: boolean }>
  >([])
  useEffect(() => {
    console.log(accounts)
    if (connectedWallet && queryClient) {
      setIsNFTLoading(true)
      fetchUnsteikCount().then((res: Array<string>) => {
        if (res?.length != 0) {
          const fetchedItems = res?.map((item: string, index: number) => ({
            id: index,
            kind: item,
            title: item,
            selected: false,
          }))
          console.log(fetchedItems, "fetchedItems----")
          setSelectedItems(fetchedItems)
        }
        setIsNFTLoading(false)
      })
    }
    if (!connectedWallet) {
      setIsNFTLoading(false)
      setSelectedItems([])
    }
    setStatisticLoading(true)
    fetchStatistic().then((res: any) => {
      if (res?.length != 0) {
        setTotalStaked(parseInt(res?.total_staked))
        setTotalClaimedPoints(parseInt(res?.total_claimed_points) / 1000000)
        setStatisticLoading(false)
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
        <StatisticContainer
          number={totalStaked}
          content={"Foxes staked"}
          loading={statisticLoading}
        />
        {/* <StatisticContainer number={15641} content={"Daily points"} /> */}
        <StatisticContainer
          number={totalClaimedPoints}
          content={"Total points"}
          loading={statisticLoading}
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
        {isNFTLoading ? (
          <>
            <NFTContainerSkeleton />
            <NFTContainerSkeleton />
            <NFTContainerSkeleton />
            <NFTContainerSkeleton />
            <NFTContainerSkeleton />
          </>
        ) : (
          selectedItems?.map((item, index) => (
            <NFTContainer
              id={index} // It's better to have a more unique key if possible
              kind={item.kind}
              title={item.title}
              selected={item.selected}
              onClick={() => {}}
              // onClick={() => toggleSelectedItem(index)}
            />
          ))
        )}
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
