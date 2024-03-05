import Image from "next/image"

import NFT from "../utils/nfts"

interface NFTContainerProps {
  kind: number
  title: string
}

export default function NFTContainer({ kind, title }: NFTContainerProps) {
  return (
    <div className="flex flex-col justfy-center items-center bg-white w-fit rounded-md">
      <Image
        src={NFT(kind)}
        alt="Fox Logo"
        className="size-36 md:size-48 lg:size-56"
      />
      <div className="flex items-end mt-2 mb-2 md:mt-2 md:mb-3 lg:mt-3 lg:mb-4">
        <p className="text-custom leading-none text-lg md:text-xl xl:text-2xl ">
          Fox
        </p>
        <span className="text-custom text-xs leading-none md:text-sm xl:text-md text-end">
          {title}
        </span>
      </div>
    </div>
  )
}
