import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video, video: { snippet } }) => {
  const videoSrc = `https://www.youtube.com/embed/${video.id}`;

  return (
    <section className={styles.detail}>
      <h1>{snippet.title}</h1>
      <iframe
        className={styles.video}
        title="video_player"
        type="text/html" //
        width="100%"
        height="500px"
        src={videoSrc}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};
export default VideoDetail;
