"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import NFTContainer from "@/components/common/nft-container"
import StatisticContainer from "@/components/common/statistic-contianer"

export default function Dashboard() {
  return (
    <section className="px-16 pb-3 pt-6">
      <div className="rounded bg-[#FFFDF1] p-6">
        <p className="font-bebas text-2xl  text-custom sm:text-3xl md:text-4xl xl:text-5xl">
          COLLECTION STATS
        </p>
        <div className="mx-auto mt-3 flex flex-wrap items-center justify-center gap-8 sm:mb-4 sm:mt-4 sm:justify-between md:mb-8 md:mt-8 md:max-w-3xl lg:mb-10 lg:mt-10 xl:max-w-5xl">
          <StatisticContainer number={3323} content={"Foxes staked"} />
          <StatisticContainer number={15641} content={"Daily points"} />
          <StatisticContainer number={45548} content={"Total points"} />
        </div>
      </div>
      <div className="mt-10 rounded bg-[#FFFDF1] p-6">
        <p className="font-bebas text-2xl  text-custom sm:text-3xl md:text-4xl xl:text-5xl">
          MY STATS
        </p>
        <div className="mx-auto mt-3 flex flex-wrap items-center justify-center gap-8 sm:mb-4 sm:mt-4 sm:justify-between md:mb-8 md:mt-8 md:max-w-3xl lg:mb-10 lg:mt-10 xl:max-w-5xl">
          <StatisticContainer number={9415} content={"Total points"} />
          <StatisticContainer number={6547} content={"Claimed points"} />
          <StatisticContainer number={2014} content={"Unclaimed points"} />
        </div>
        <div className="mt-4 flex w-5/6 justify-end">
          <Button className="whitespace-nowrap text-lg md:text-xl">
            claim points
          </Button>
        </div>
      </div>
    </section>
  )
}
