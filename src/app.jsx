import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const [selectedVideo, setSelectedVideo] = useState(null);

  const onSearch = useCallback(
    (q) => {
      setSelectedVideo(null);

      youtube
        .search(q) //
        .catch((err) => console.log(err))
        .then((videos) => {
          console.log(videos);
          return setVideos(videos);
        });
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .search('동기부여') //
      .catch((err) => console.log(err))
      .then((videos) => {
        console.log(videos);
        return setVideos(videos);
      });
  }, [youtube]);

  const onSelectedVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={onSearch} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onSelectedVideo={onSelectedVideo} display={selectedVideo ? 'list' : 'grid'} />
        </div>
      </section>
    </div>
  );
}

export default App;
