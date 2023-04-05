import parse from 'html-react-parser';
import { Segment } from 'semantic-ui-react';
import { Episode } from '../../interfaces/xml.interface';

interface AudioPlayerMenuProps {
  episode: Episode;
}

const AudioPlayer = ({ episode }: AudioPlayerMenuProps): JSX.Element => {
  return (
    <Segment>
      <h2>{episode.title}</h2>
      <div>{parse(episode.description)}</div>
      <div className="ui divider" />
      <div className="ui column centered grid padded">
        <audio controls>
          <source src={episode.audio} type="audio/ogg" />
          <source src={episode.audio} type="audio/mpeg" />
          <source src={episode.audio} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </Segment>
  );
};

export default AudioPlayer;
