export interface Item {
	attributes: never
	children: any[]
	getElementsByTagName: (event: Event) => void
	name: string
	value: string
}

export interface Episode {
	guid: string
	title: string
	description: string
	link: string
	pubDate: string
	'itunes:duration': string
	'dc:creator': string
	audio: string
}
