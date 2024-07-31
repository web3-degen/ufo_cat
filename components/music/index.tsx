import { FC, useEffect, useRef } from 'react';

interface MusicProps {
  videoId: string;
}

const Music: FC<MusicProps> = ({ videoId }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1`;
    }
  }, [videoId]);

  return (
    <iframe
      ref={iframeRef}
      width="0"
      height="0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default Music;
