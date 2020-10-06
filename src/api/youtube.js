// const KEY = 'AIzaSyDdInymZMLdh4trTf5tRILg_br471ePaFQ';

// export default axios.create({
//   baseURL: 'https://www.googleapis.com/youtube/v3/',
//   params: {
//     part: 'snippet',
//     maxResults: 25,
//     key: KEY,
//   },
// });

class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
        q: query,
        type: 'video',
      },
    });
    return response.data.items.map((item) => ({ ...item, id: item.id.videoId }));
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });
    return response.data.items;
  }
}

export default Youtube;
