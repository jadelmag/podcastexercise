import { Podcast } from './custompodcast.interface';
import { SinglePodcast } from './podcast.interface';
import { Episode } from './xml.interface';

export interface PodcastStorage {
  podcastsApi: Podcast[];
  time: number;
}

export interface PodcastDetailStorage {
  podcastDetail: SinglePodcast | null;
  time: number;
}

export interface EpisodeStorage {
  podcastId: string;
  episodes: Episode[];
}
