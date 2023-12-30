export function convertTimeStringToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number)

  const hoursToMinutes = hours * 60

  return minutes + hoursToMinutes
}
