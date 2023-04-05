import { Podcast } from '../interfaces/custompodcast.interface';
import { Entry, Feed } from '../interfaces/allpodcasts-response.interface';
import { SinglePodcast } from '../interfaces/podcast.interface';

export const podcastConstructor = (feed: Feed) => {
  const podcasts: Podcast[] = [];
  feed.entry.forEach((p: Entry) => {
    let podcast = {
      id: p.id.attributes['im:id'],
      img: p['im:image'][2].label,
      name: p['im:name'].label,
      author: p['im:artist'].label,
      summary: p.summary ? p.summary.label : 'No description',
    };
    podcasts.push(podcast);
  });
  return podcasts;
};

export const podcastItem = ({ ...item }) => {
  const podcast: SinglePodcast = {
    id: item.trackId,
    artwork: item.artworkUrl600,
    name: item.trackName,
    feedUrl: item.feedUrl,
    artistName: item.artistName,
    numEpisodes: item.trackCount,
  };
  return podcast;
};
