import Image from "next/image"
import Link from "next/link"
import discordIcon from "@/public/discord-icon.svg"
import xIcon from "@/public/x-icon.svg"

import StatisticContainer from "@/components/common/statistic-contianer"

export default function IndexPage() {
  return (
    <section className="container pb-3 pt-6 md:py-10">
      <div className="mt-32">
        <h1 className="text-shadow mx-auto text-center font-bebas text-5xl text-custom sm:text-7xl md:text-8xl lg:text-9xl">
          STEIK YOUR FOXES
        </h1>
        <div className="mx-auto mt-3 flex flex-wrap justify-center gap-8 sm:mt-4 sm:justify-between md:mt-8 md:max-w-3xl lg:mt-10 xl:max-w-5xl">
          <StatisticContainer number={3323} content={"Foxes staked"} />
          <StatisticContainer number={15641} content={"Daily points"} />
          <StatisticContainer number={45548} content={"Total points"} />
        </div>
      </div>
      <div className="mt-44 flex items-center justify-center gap-16 ">
        <Link href="/" className="flex items-center space-x-2 ">
          <Image
            src={xIcon}
            alt="Fox Logo"
            className="size-8 md:size-10 lg:size-14"
          />
        </Link>
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={discordIcon}
            alt="Fox Logo"
            className="size-8 md:size-10 lg:size-14"
          />
        </Link>
      </div>
    </section>
  )
}
