const AVERAGE_WORDS_PER_MINUTE = 200;

export function calculateAverageReadTime(numberOfWords: number) {
  const readTime = numberOfWords / AVERAGE_WORDS_PER_MINUTE;

  return Math.ceil(readTime);
}
