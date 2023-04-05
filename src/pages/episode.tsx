import { useLocation } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import PodcastDetail from '../components/podcastdetail/podcastdetail';
import AudioPlayer from '../components/audioplayer/audioplayer';

const EpisodePage = (): JSX.Element => {
  const location = useLocation();
  const { description, episode, podcast } = location?.state;

  return (
    <div>
      <Grid>
        <Grid.Column width={6}>
          <PodcastDetail podcast={podcast} description={description} />
        </Grid.Column>
        <Grid.Column width={10}>
          <AudioPlayer episode={episode} />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default EpisodePage;
