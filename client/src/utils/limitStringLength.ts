export const limitStringLength = (text: string, limit: number): string => {
  const slicedString = text.slice(0, limit)

  return `${slicedString} ...`
}
