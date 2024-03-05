"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import NFTContainer from "@/components/common/nft-container"
import StatisticContainer from "@/components/common/statistic-contianer"

export default function Steik() {
  return (
    <section className="px-16 pb-3 pt-6">
      <p className="font-bebas text-2xl font-bold text-custom sm:text-3xl md:text-4xl xl:text-5xl">
        SELECT NFTS TO STEIK
      </p>
      <div className="mt-5 grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 ">
        <NFTContainer kind={0} title={"#986"} />
        <NFTContainer kind={1} title={"#986"} />
        <NFTContainer kind={2} title={"#986"} />
        <NFTContainer kind={3} title={"#986"} />
        <NFTContainer kind={4} title={"#986"} />
        <NFTContainer kind={0} title={"#986"} />
        <NFTContainer kind={1} title={"#986"} />
        <NFTContainer kind={2} title={"#986"} />
        <NFTContainer kind={3} title={"#986"} />
        <NFTContainer kind={4} title={"#986"} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        <div className="md:col-span-2 xl:col-span-4"></div>
        <div className="mx-auto mt-6 flex w-48 gap-6 lg:w-56">
          <Button className="ml-auto h-8 whitespace-nowrap text-lg md:text-xl">
            steik
          </Button>
        </div>
      </div>
    </section>
  )
}
