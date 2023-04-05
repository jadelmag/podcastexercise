import { useState } from 'react';
import { Podcast } from '../interfaces/custompodcast.interface';
import { Episode } from '../interfaces/xml.interface';
import { SinglePodcast } from '../interfaces/podcast.interface';

const useData = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>();
  const [episodes, setEpisodes] = useState<Episode[]>();
  const [podcastDetail, setPodcastDetail] = useState<SinglePodcast>();

  const savePodcasts = (podcasts: Podcast[]) => setPodcasts(podcasts);
  const savePodcastDetail = (podcastDetail: SinglePodcast) =>
    setPodcastDetail(podcastDetail);
  const saveEpisodes = (episodes: Episode[]) => setEpisodes(episodes);

  return {
    podcasts,
    episodes,
    podcastDetail,
    savePodcasts,
    saveEpisodes,
    savePodcastDetail,
  };
};

export default useData;
