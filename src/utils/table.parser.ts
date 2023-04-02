export const dateParser = (dateString: string) => {
	const milliseconds = Date.parse(dateString)
	const date = new Date(milliseconds)
	const day = date.getDate()
	const month = date.getMonth() + 1
	const fullDay = day < 10 ? `0${day}` : day
	const fullMonth = month < 10 ? `0${month}` : month

	return `${fullDay}/${fullMonth}/${date.getFullYear()}`
}
