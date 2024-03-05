"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import NFTContainer from "@/components/common/nft-container"
import StatisticContainer from "@/components/common/statistic-contianer"

export default function Dashboard() {
  return (
    <section className="px-16 pb-3 pt-6">
      <h1 className="mx-auto text-left  font-bebas text-5xl text-custom sm:text-7xl md:text-8xl lg:text-9xl">
        STEIK YOUR FOXES
      </h1>
      <p className="text-lg font-bold text-custom sm:text-xl md:text-2xl xl:text-3xl">
        Earn points daily.
      </p>
      <div className="mx-auto mt-3 flex flex-wrap items-center justify-center gap-8 sm:mt-4 sm:justify-between md:mt-8 md:max-w-3xl lg:mt-10 xl:max-w-5xl">
        <StatisticContainer number={3323} content={"Foxes staked"} />
        <StatisticContainer number={15641} content={"Daily points"} />
        <StatisticContainer number={45548} content={"Total points"} />
        <Button className="whitespace-nowrap text-lg md:text-xl">
          claim points
        </Button>
      </div>
      <Separator className="mt-4 border border-solid border-[#003049]" />
      <p className="mt-3 text-lg font-bold text-custom md:text-xl xl:text-2xl">
        Steiked NFTs
      </p>
      <div className="mt-5 flex flex-wrap justify-between gap-4">
        <NFTContainer kind={0} title={"#986"} />
        <NFTContainer kind={1} title={"#986"} />
        <NFTContainer kind={2} title={"#986"} />
        <NFTContainer kind={3} title={"#986"} />
        <NFTContainer kind={4} title={"#986"} />
      </div>
      <div className="mt-6 flex justify-end gap-6">
        <Button className="h-8 whitespace-nowrap text-lg md:text-xl">
          steik
        </Button>
        <Button
          className="h-8 whitespace-nowrap text-lg md:text-xl"
          variant={"gray"}
        >
          unsteik
        </Button>
      </div>
    </section>
  )
}
