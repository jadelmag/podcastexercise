import { episodeKey, podcastDetailKey, podcastsKey } from '../constants/storage.constants'
import { Podcast } from '../interfaces/custompodcast.interface'
import { SinglePodcast } from '../interfaces/podcast.interface'
import {
	EpisodeStorage,
	PodcastDetailStorage,
	PodcastStorage,
} from '../interfaces/storage.interface'
import { Episode } from '../interfaces/xml.interface'

/** Podcasts **/

export const savePodcastsStorage = (podcasts: Podcast[]): void => {
	const timeStamp: number = new Date().getTime()
	const saveStorage: PodcastStorage = { podcastsApi: podcasts, time: timeStamp }
	localStorage.setItem(podcastsKey, JSON.stringify(saveStorage))
}

export const loadPocastsStorage = (): PodcastStorage => {
	const storage: string | null = localStorage.getItem(podcastsKey)
	if (!storage) return { podcastsApi: [], time: 0 }
	const loadStorage: PodcastStorage = JSON.parse(storage)
	return loadStorage
}

/** Podcast Detail **/

export const savePodcastDetailStorage = (podcast: SinglePodcast): void => {
	const timeStamp: number = new Date().getTime()
	const saveStorage: PodcastDetailStorage = { podcastDetail: podcast, time: timeStamp }
	localStorage.setItem(`${podcastDetailKey}-${podcast.id}`, JSON.stringify(saveStorage))
}

export const loadPodcastDetailStorage = (id: string): PodcastDetailStorage => {
	const storage: string | null = localStorage.getItem(`${podcastDetailKey}-${id}`)
	if (!storage) return { podcastDetail: null, time: 0 }
	const loadStorage: PodcastDetailStorage = JSON.parse(storage)
	return loadStorage
}

/** Episodes **/
export const saveEpisodesStorage = (id: string, episodes: Episode[]): void => {
	const saveStorage: EpisodeStorage = { podcastId: id, episodes: episodes }
	localStorage.setItem(`${episodeKey}-${id}`, JSON.stringify(saveStorage))
}

export const loadEpisodesStorage = (id: string): EpisodeStorage => {
	const storage: string | null = localStorage.getItem(`${episodeKey}-${id}`)
	if (!storage) return { podcastId: '-1', episodes: [] }
	const loadStorage: EpisodeStorage = JSON.parse(storage)
	return loadStorage
}
