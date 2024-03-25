"use client"

import { useEffect, useState } from "react"
import { fetchLBData } from "@/services/leaderboard/fetchLBData"
import { useCosmWasmClient, useWallet } from "@sei-js/react"

import LineItem from "@/components/leaderboard/line-item"
import LineItemSkeleton from "@/components/leaderboard/line-item-skeleton"

export default function Leaderboard() {
  const [lbData, setLBData] = useState([])
  const [isLoadingData, setIsLoadingData] = useState(true)
  const { connectedWallet, accounts } = useWallet()

  useEffect(() => {
    // Function to fetch and update statistics
    const fetchAndUpdate = () => {
      fetchLBData().then((res: any) => {
        if (res?.length !== 0) {
          const newLBData = res?.map((item: any, index: number) => {
            return {
              number: index + 1,
              address: item.address,
              self: false,
              numPoints: parseInt(item.claimed_amount) / 1000000,
            }
          })
          setLBData(newLBData)
          // setTotalStaked(parseInt(res?.total_staked))
          // setTotalClaimedPoints(parseInt(res?.total_claimed_points) / 1000000)
        }
        setIsLoadingData(false)
      })
    }
    setIsLoadingData(true)

    fetchAndUpdate()

    // const interval = setInterval(fetchAndUpdate, 10000)

    // return () => clearInterval(interval)
  }, [accounts, connectedWallet])
  return (
    <section className="px-4 pb-3 pt-6 sm:px-6 md:px-10 lg:px-16">
      <div className="rounded-sm bg-[#1B2219] p-6">
        <p className="font-bebas text-2xl  text-custom sm:text-3xl md:text-4xl xl:text-5xl">
          LEADERBOARD
        </p>
        {isLoadingData ? (
          <>
            <LineItemSkeleton />
            <LineItemSkeleton />
            <LineItemSkeleton />
            <LineItemSkeleton />
            <LineItemSkeleton />
            <LineItemSkeleton />
            <LineItemSkeleton />
            <LineItemSkeleton />
            <LineItemSkeleton />
            <LineItemSkeleton />
          </>
        ) : (
          lbData?.map((lineitem: any) => {
            return (
              <LineItem
                number={lineitem.number}
                address={lineitem.address}
                self={lineitem.self}
                numPoints={lineitem.numPoints}
              ></LineItem>
            )
          })
        )}
      </div>
    </section>
  )
}
