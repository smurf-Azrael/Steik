"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import NFTContainer from "@/components/common/nft-container"
import StatisticContainer from "@/components/common/statistic-contianer"

export default function Dashboard() {
  return (
    <section className="px-16 pb-3 pt-6">
      <div className="mx-auto mt-3 flex flex-wrap items-center justify-center gap-8 sm:mt-4 sm:justify-between md:mt-8 md:max-w-3xl lg:mt-10 xl:max-w-5xl">
        <StatisticContainer number={3323} content={"Foxes staked"} />
        <StatisticContainer number={15641} content={"Daily points"} />
        <StatisticContainer number={45548} content={"Total points"} />
      </div>
    </section>
  )
}
