import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { SinglePodcast } from '../../interfaces/podcast.interface';

interface DescriptionProps {
  description: string;
}

const Description = ({ description }: DescriptionProps) => (
  <div>
    <b>Description:</b>
    <div>{description}</div>
  </div>
);

interface PodcastDetailProps {
  podcast: SinglePodcast;
  description: string;
}

const PodcastDetail = ({ podcast, description }: PodcastDetailProps) => {
  return (
    <Link to={`/podcast/${podcast.id}`}>
      <Card
        image={podcast.artwork}
        header={podcast.name}
        meta={`by ${podcast.artistName}`}
        extra={<Description description={description} />}
      />
    </Link>
  );
};

export default PodcastDetail;
