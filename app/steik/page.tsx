"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import NFTContainer from "@/components/common/nft-container"
import StatisticContainer from "@/components/common/statistic-contianer"

export default function Steik() {
  return (
    <section className="pb-3 pt-6 px-16">
      <h1 className="font-bebas text-custom  text-5xl sm:text-7xl md:text-8xl lg:text-9xl mx-auto text-left">
        STEIK YOUR FOXES
      </h1>
      <p className="text-custom text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold">
        Earn points daily.
      </p>
      <div className="flex mt-3 sm:mt-4 md:mt-8 lg:mt-10 flex-wrap md:max-w-3xl xl:max-w-5xl mx-auto gap-8 justify-center sm:justify-between items-center">
        <StatisticContainer number={3323} content={"Foxes staked"} />
        <StatisticContainer number={15641} content={"Daily points"} />
        <StatisticContainer number={45548} content={"Total points"} />
        <Button className="whitespace-nowrap text-lg md:text-xl">
          claim points
        </Button>
      </div>
      <Separator className="border border-[#003049] border-solid mt-4" />
      <p className="text-custom text-lg md:text-xl xl:text-2xl font-bold mt-3">
        Steiked NFTs
      </p>
      <div className="mt-5 flex justify-between flex-wrap gap-4">
        <NFTContainer kind={0} title={"#986"} />
        <NFTContainer kind={1} title={"#986"} />
        <NFTContainer kind={2} title={"#986"} />
        <NFTContainer kind={3} title={"#986"} />
        <NFTContainer kind={4} title={"#986"} />
      </div>
      <div className="flex gap-6 mt-6 justify-end">
        <Button className="whitespace-nowrap h-8 text-lg md:text-xl">
          steik
        </Button>
        <Button
          className="whitespace-nowrap h-8 text-lg md:text-xl"
          variant={"gray"}
        >
          unsteik
        </Button>
      </div>
    </section>
  )
}
