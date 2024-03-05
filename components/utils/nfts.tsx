import Fox1 from "@/public/nft/1.png"
import Fox2 from "@/public/nft/2.png"
import Fox3 from "@/public/nft/3.png"
import Fox4 from "@/public/nft/4.png"
import Fox5 from "@/public/nft/5.png"

export default function NFT(kind: number) {
  const nftlist = [Fox1, Fox2, Fox3, Fox4, Fox5]
  return nftlist[kind]
}
