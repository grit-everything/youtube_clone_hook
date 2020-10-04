import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const onSearch = (q) => {
    youtube
      .search(q) //
      .then((videos) => setVideos(videos));
  };

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={onSearch} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
