import axios from 'axios';
const KEY = 'AIzaSyDdInymZMLdh4trTf5tRILg_br471ePaFQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 25,
    key: KEY,
  },
});
