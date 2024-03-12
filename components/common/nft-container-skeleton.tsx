"use client"

import { Skeleton } from "../ui/skeleton"

export default function NFTContainerSkeleton() {
  return (
    <div className="relative mx-auto flex w-fit cursor-pointer flex-col items-center justify-start rounded-md bg-white/50 p-1">
      <Skeleton className="size-36 sm:size-48 lg:size-56 " />
      <div className="flex w-full items-center justify-center py-2">
        <Skeleton className="h-6 w-1/2" />
      </div>
    </div>
  )
}
