import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './app.css';
import SearchBar from './components/video_list/searchBar';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  //mount가 된 후 or update 가 되었을 때 콜백을 등록해 사용할 수 함수 useEffect() componentDidMount와 같은거
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDdInymZMLdh4trTf5tRILg_br471ePaFQ', requestOptions)
      .then((response) => response.json()) //response(fetch가 정상적으로 작동했을 때 받는 결과 임의로 response 명명. 그 결과를 json() 파일로 변경)
      .then((result) => {
        console.log(result);
        return setVideos(result.items);
      }) // .json()파일로 변경된 response를 result로 받아와서 console창에 띄우기
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <SearchBar />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
