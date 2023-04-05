import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import { Podcast } from '../../interfaces/custompodcast.interface';
import './podcastcard.css';

interface PodcastCardProps {
  podcast: Podcast;
}

const PodcastCard = ({ podcast }: PodcastCardProps): JSX.Element => {
  return (
    <Link to={`/podcast/${podcast.id}`} state={{ podcast: podcast }}>
      <Card id={podcast.id} className="podcastcard">
        <Image src={podcast.img} />
        <Card.Content>
          <Card.Header>{podcast.name}</Card.Header>
          <Card.Description>
            <span>Author: {podcast.author}</span>
          </Card.Description>
        </Card.Content>
      </Card>
    </Link>
  );
};

export default PodcastCard;
