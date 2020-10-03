import React from 'react';
import VideoItem from '../video_item/videoItem';

const VideoList = ({ videos }) => (
  <ul>
    {videos.map((video) => (
      <VideoItem key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoList;
