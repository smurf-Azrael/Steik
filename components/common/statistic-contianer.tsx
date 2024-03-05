interface StatisticContainerProps {
  number: number
  content: string
}
export default function StatisticContainer({
  number,
  content,
}: StatisticContainerProps) {
  return (
    <div className="justfy-center flex flex-col items-center">
      <p className="text-3xl font-bold text-custom sm:text-4xl md:text-5xl xl:text-6xl">
        {number}
      </p>
      <p className="text-lg text-custom md:text-xl xl:text-2xl">{content}</p>
    </div>
  )
}
