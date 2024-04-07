export function getRuneUrl(imageName: string): string {
  const url = new URL(
    `/src/core/assets/runes/${imageName}.png`,
    import.meta.url,
  ).href;
  return url;
}
