import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Grid, Placeholder } from 'semantic-ui-react'
import PodcastDetail from '../components/podcastdetail/podcastdetail'
import PodcastList from '../components/podcastlist/podcastlist'
import { getEpisodes, getPodcast } from '../services/podcast.service'
import { SinglePodcast } from '../interfaces/podcast.interface'
import { Podcast } from '../interfaces/custompodcast.interface'
import { Episode } from '../interfaces/xml.interface'
import {
	loadEpisodesStorage,
	loadPodcastDetailStorage,
	saveEpisodesStorage,
	savePodcastDetailStorage,
} from '../utils/storage.functions'
import { isOutOfDate } from '../utils/date.functions'

interface PodcastPageProps {
	loading: boolean
	updateLoading: (status: boolean) => void
}

const PodcastPage = ({ loading, updateLoading }: PodcastPageProps): JSX.Element => {
	const location = useLocation()
	const [newPodcast, setNewPodcast] = useState<SinglePodcast | null>(null)
	const [newEpisodes, setEpisodes] = useState<Episode[] | null>(null)
	const podcast: Podcast = location?.state?.podcast

	useEffect(() => {
		async function getPodcastsApi() {
			updateLoading(true)
			const podcastApi: SinglePodcast = await getPodcast(podcast.id)
			const episodesApi: Episode[] = await getEpisodes(podcastApi.feedUrl)
			savePodcastDetailStorage(podcastApi)
			saveEpisodesStorage(`${podcastApi.id}`, episodesApi)
			setNewPodcast(podcastApi)
			setEpisodes(episodesApi)
			updateLoading(false)
		}
		const { podcastDetail, time } = loadPodcastDetailStorage(podcast.id)
		const { episodes } = loadEpisodesStorage(podcast.id)
		if (!podcastDetail || isOutOfDate(time) || episodes?.length === 0) {
			getPodcastsApi()
		} else {
			setNewPodcast(podcastDetail)
			setEpisodes(episodes)
		}
		;() => getPodcastsApi()
	}, [])

	return (
		<div>
			<Grid>
				<Grid.Column width={6}>
					{loading ? (
						<Placeholder>
							<Placeholder.Image square />
						</Placeholder>
					) : newPodcast ? (
						<PodcastDetail podcast={newPodcast} description={podcast.summary} />
					) : null}
				</Grid.Column>
				<Grid.Column width={10}>
					{loading ? (
						<Placeholder>
							<Placeholder.Image square />
						</Placeholder>
					) : (
						newPodcast &&
						newEpisodes && (
							<PodcastList
								loading={loading}
								podcast={newPodcast}
								episodes={newEpisodes}
								description={podcast.summary}
							/>
						)
					)}
				</Grid.Column>
			</Grid>
		</div>
	)
}

export default PodcastPage
