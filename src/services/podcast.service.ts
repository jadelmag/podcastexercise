import XMLParser from 'react-xml-parser';
import {
  AllPodcasts,
  ApiResponse,
} from '../interfaces/allpodcasts-response.interface';
import { podcastConstructor, podcastItem } from '../utils/podcast.parser';
import { SinglePodcast } from '../interfaces/podcast.interface';
import { CORS_PROXY } from '../constants/api.constants';
import { getItemsFromXML } from '../utils/episodes.parser';
import { Episode } from '../interfaces/xml.interface';
import { PodcastDetailResponse } from '../interfaces/podcast-detail.interface';

export const getAllPodcasts = async () => {
  const response: Response = await fetch(
    `${CORS_PROXY}https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
  );
  if (response.ok) {
    const jsonResponse: ApiResponse = await response.json();
    const data: AllPodcasts = JSON.parse(jsonResponse.contents);
    const podcasts = podcastConstructor(data.feed);
    return podcasts;
  }
  throw new Error('Network response was not ok.');
};

export const getPodcast = async (podcastId: string) => {
  const response: Response = await fetch(
    `${CORS_PROXY}https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
  );
  if (response.ok) {
    const jsonResponse: ApiResponse = await response.json();
    const data: PodcastDetailResponse = JSON.parse(jsonResponse.contents);
    const result = data.results[0];
    const podcast: SinglePodcast = podcastItem(result);
    return podcast;
  }
  throw new Error('Network response was not ok.');
};

export const getEpisodes = async (feedUrl: string) => {
  const response: Response = await fetch(`${CORS_PROXY}${feedUrl}`);
  if (response.ok) {
    const jsonResponse: ApiResponse = await response.json();
    const data: string = jsonResponse.contents;
    const xml = new XMLParser().parseFromString(data);
    const items: Episode[] = getItemsFromXML(xml.children[0].children);
    return items;
  }
  return [];
};
