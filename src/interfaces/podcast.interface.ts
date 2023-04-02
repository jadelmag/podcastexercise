export interface PodcastResponse {
	contents: string
	status: Status
}

export interface Status {
	url: string
	content_type: string
	http_code: number
	response_time: number
	content_length: number
}

export interface SinglePodcast {
	id: number
	artwork: string
	name: string
	feedUrl: string
	artistName: string
	numEpisodes: number
}
