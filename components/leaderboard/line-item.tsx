import Image from "next/image"
import SeiIcon from "@/public/sei.svg"

import { formatAddress } from "@/lib/format"

interface LineItemProps {
  number: number
  address: string
  numPoints: number
  self: boolean
}

export default function LineItem({
  number,
  address,
  numPoints,
  self = false,
}: LineItemProps) {
  return (
    <div className="mx-auto mt-1 grid w-full grid-cols-4 flex-col items-center justify-start gap-2 rounded-md border border-solid border-[#003049] border-opacity-50 px-3 py-1">
      <span className="text-lg font-bold !leading-none text-custom md:text-xl xl:text-2xl ">
        #{number}
      </span>
      <span className="flex items-center justify-end gap-2 text-lg !leading-none text-custom md:text-xl xl:text-2xl">
        <Image src={SeiIcon} alt="sei" />#{formatAddress(address)}
      </span>
      <span className=" text-md flex justify-end !leading-none text-custom md:text-lg  xl:text-xl">
        {self && <p className="w-fit rounded bg-[#D9D9D9] p-2">your rank</p>}
      </span>
      <span className=" text-md flex justify-end font-bold !leading-none text-custom md:text-lg  xl:text-xl">
        <p className="w-36 rounded bg-[#D9D9D9] p-2 text-center md:w-40 lg:w-44">
          {numPoints} points
        </p>
      </span>
    </div>
  )
}
