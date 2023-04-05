import { Segment, Placeholder } from 'semantic-ui-react';
import TableEpisodes from '../table-episodes/table-episodes';
import { SinglePodcast } from '../../interfaces/podcast.interface';
import { Episode } from '../../interfaces/xml.interface';

interface PodcastListProps {
  loading: boolean;
  podcast: SinglePodcast;
  episodes: Episode[];
  description: string;
}

const PodcastList = ({
  loading,
  podcast,
  episodes,
  description,
}: PodcastListProps): JSX.Element => (
  <div>
    <Segment>
      <b>Episodes: {podcast.numEpisodes}</b>
    </Segment>
    {loading ? (
      <Placeholder fluid>
        <Placeholder.Line length="full" id="placeholder" />
        <Placeholder.Line length="full" id="placeholder" />
        <Placeholder.Line length="full" id="placeholder" />
        <Placeholder.Line length="full" id="placeholder" />
      </Placeholder>
    ) : (
      <TableEpisodes
        episodes={episodes}
        podcast={podcast}
        description={description}
      />
    )}
  </div>
);

export default PodcastList;
