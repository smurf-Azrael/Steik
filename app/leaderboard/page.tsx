"use client"

import internal from "stream"
import { useEffect, useState } from "react"
import {
  WalletConnectButton,
  useCosmWasmClient,
  useSigningCosmWasmClient,
  useWallet,
} from "@sei-js/react"

import LineItem from "@/components/leaderboard/line-item"

const lineitem_example = [
  {
    number: 565,
    address: "seil238479234792384789234yru8",
    self: true,
    numPoints: 9542,
  },
  {
    number: 1,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 56234,
  },
  {
    number: 2,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 51231,
  },
  {
    number: 3,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 42512,
  },
  {
    number: 4,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 36731,
  },
  {
    number: 5,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 32341,
  },
  {
    number: 6,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 24562,
  },
  {
    number: 7,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 16324,
  },
  {
    number: 8,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 15123,
  },
  {
    number: 9,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 14526,
  },
  {
    number: 10,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 13952,
  },
  {
    number: 11,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 12222,
  },
]
export default function Leaderboard() {
  const [lbData, setLBData] = useState([])
  const { connectedWallet, accounts } = useWallet()
  const { cosmWasmClient: queryClient } = useCosmWasmClient()
  const fetchLBData = async () => {
    const response = await queryClient?.queryContractSmart(
      process.env.NEXT_PUBLIC_STEIK_ADDRESS || "",
      {
        get_claimed_list: {},
      }
    )
    console.log(response)
    return response?.claimed_info
  }
  useEffect(() => {
    // Function to fetch and update statistics
    const fetchAndUpdate = () => {
      if (connectedWallet) {
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
        })
      }
    }
    fetchAndUpdate()

    // const interval = setInterval(fetchAndUpdate, 10000)

    // return () => clearInterval(interval)
  }, [accounts, connectedWallet, queryClient])
  return (
    <section className=" px-16 pb-3 pt-6">
      <div className="rounded-sm bg-[#FFFDF1] p-6">
        <p className="font-bebas text-2xl  text-custom sm:text-3xl md:text-4xl xl:text-5xl">
          LEADERBOARD
        </p>
        {lbData?.map((lineitem: any) => {
          return (
            <LineItem
              number={lineitem.number}
              address={lineitem.address}
              self={lineitem.self}
              numPoints={lineitem.numPoints}
            ></LineItem>
          )
        })}
      </div>
    </section>
  )
}
