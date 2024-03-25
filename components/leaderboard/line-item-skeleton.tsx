import { Skeleton } from "../ui/skeleton"

export default function LineItemSkeleton() {
  return (
    <div className="mx-auto mt-1 grid w-full grid-cols-4 flex-col items-center justify-start gap-2 rounded-md border border-solid border-[#FFD700] border-opacity-50 px-3 py-1">
      <span className="text-lg font-bold !leading-none text-custom md:text-xl xl:text-2xl ">
        <Skeleton className="h-10 w-20" />
      </span>
      <span className="text-lg font-bold !leading-none text-custom md:text-xl xl:text-2xl ">
        <Skeleton className="h-10 w-24" />
      </span>
      <span className=" text-md flex justify-end">
        <Skeleton className="h-10 w-44" />
      </span>
      <span className=" text-md flex justify-end font-bold !leading-none text-custom md:text-lg  xl:text-xl">
        <Skeleton className="h-10 w-40" />
      </span>
    </div>
  )
}
