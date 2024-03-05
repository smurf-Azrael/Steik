interface StatisticContainerProps {
  number: number
  content: string
}
export default function StatisticContainer({
  number,
  content,
}: StatisticContainerProps) {
  return (
    <div className="flex flex-col justfy-center items-center">
      <p className="text-custom text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
        {number}
      </p>
      <p className="text-custom text-lg md:text-xl xl:text-2xl">{content}</p>
    </div>
  )
}
