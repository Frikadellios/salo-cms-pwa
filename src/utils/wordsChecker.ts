export function calculateReadingTime(text: string) {
	const wordsPerMinute = 200 // Average case.
	const words = text.split(/\s+/).length
	const minutes = words / wordsPerMinute
	const readTime = Math.ceil(minutes)
	return `${readTime}`
}
