export const isOutOfDate = (timestamp: number): boolean => {
	const oneday = 60 * 60 * 24 * 1000
	const now = Date.now()
	return now - timestamp > oneday
}
