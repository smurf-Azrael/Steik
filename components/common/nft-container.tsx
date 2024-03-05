import Image from "next/image"

import NFT from "../utils/nfts"

interface NFTContainerProps {
  kind: number
  title: string
}

export default function NFTContainer({ kind, title }: NFTContainerProps) {
  return (
    <div className="mx-auto flex w-fit flex-col items-center justify-start rounded-md bg-white">
      <Image
        src={NFT(kind)}
        alt="Fox Logo"
        className="size-36 sm:size-48 lg:size-56"
      />
      <div className="my-2 flex items-end md:mb-3 md:mt-2 lg:mb-4 lg:mt-3">
        <span className="text-lg !leading-none text-custom md:text-xl xl:text-2xl ">
          Fox
        </span>
        <span className="xl:text-md text-end text-xs !leading-none text-custom md:text-sm">
          {title}
        </span>
      </div>
    </div>
  )
}
