export function formatAddress(
  address: string,
  startLength: number = 3,
  endLength: number = 4
): string {
  // Ensure the address is long enough to warrant formatting.
  if (address.length <= startLength + endLength) {
    return address
  }

  // Extract the start and end parts of the address.
  const startPart = address.slice(0, startLength)
  const endPart = address.slice(-endLength)

  // Return the formatted address.
  return `${startPart}...${endPart}`
}
