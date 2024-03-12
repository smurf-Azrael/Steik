export const fetchLBData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/fetch-lbdata`
    )
    const lbData = await response.json()
    return lbData
  } catch (error) {
    console.error("Error fetching LBData:", error)
    // Handle the error according to your needs
  }
}
