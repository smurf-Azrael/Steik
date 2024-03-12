export const fetchStatistic = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/fetch-statistic`
    )
    const statisticData = await response.json()
    return statisticData
  } catch (error) {
    console.error("Error fetching statistics:", error)
    // Handle the error according to your needs
  }
}
