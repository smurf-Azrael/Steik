"use client"

import { useRouter, useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import NFTContainer from "@/components/common/nft-container"
import StatisticContainer from "@/components/common/statistic-contianer"

export default function Steik() {
  const searchParams = useSearchParams()
  const mode = searchParams.get("mode") || "steik"

  return (
    <section className="px-16 pb-3 pt-6">
      <p className="font-bebas text-2xl font-bold text-custom sm:text-3xl md:text-4xl xl:text-5xl">
        SELECT NFTS TO STEIK
      </p>
      <div className="mt-5 grid w-full grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5 ">
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
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
        <div className="md:col-span-2 xl:col-span-4"></div>
        <div className="mx-auto mt-6 flex w-36 gap-6 sm:w-48 lg:w-56">
          {mode === "steik" ? (
            <Button className="ml-auto h-8 whitespace-nowrap text-lg md:text-xl">
              steik
            </Button>
          ) : (
            <Button
              variant={"gray"}
              className="ml-auto h-8 whitespace-nowrap text-lg md:text-xl"
            >
              unsteik
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
