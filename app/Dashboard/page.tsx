import Image from "next/image"
import Link from "next/link"
import discordIcon from "@/public/discord-icon.svg"
import xIcon from "@/public/x-icon.svg"

import StatisticContainer from "@/components/common/statistic-contianer"

export default function IndexPage() {
  return (
    <section className="container pb-3 pt-6 md:py-10">
      <div className="mt-32">
        <h1 className="font-bebas text-custom text-shadow text-5xl sm:text-7xl md:text-8xl lg:text-9xl mx-auto text-center">
          STEIK YOUR FOXES
        </h1>
        <div className="flex mt-3 sm:mt-4 md:mt-8 lg:mt-10 flex-wrap md:max-w-3xl xl:max-w-5xl mx-auto gap-8 justify-center sm:justify-between">
          <StatisticContainer number={3323} content={"Foxes staked"} />
          <StatisticContainer number={15641} content={"Daily points"} />
          <StatisticContainer number={45548} content={"Total points"} />
        </div>
      </div>
      <div className="flex items-center justify-center mt-44 gap-16 ">
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
