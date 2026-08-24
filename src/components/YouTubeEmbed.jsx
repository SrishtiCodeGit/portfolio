import { useState } from 'react';
import { FiPlay } from 'react-icons/fi';
import './YouTubeEmbed.css';

export default function YouTubeEmbed({ videoId, thumbnail, title }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="yt-embed">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerate; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="yt-embed__iframe"
        />
      </div>
    );
  }

  return (
    <button className="yt-embed yt-embed--thumb" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
      <img src={thumbnail} alt={title} className="yt-embed__img" />
      <span className="yt-embed__play">
        <FiPlay />
      </span>
    </button>
  );
}
