export function pluralise(word: string, number: number): string {
	if (number !== 1) return `${word}s`;
	return word;
}
