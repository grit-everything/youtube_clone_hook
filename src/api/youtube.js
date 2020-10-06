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
      },
    });
    return response.data.items;
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

/*

class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&q=동기부여&key=${this.key}`, this.getRequestOptions);
    const result = await response.json();
    return result.items;
  }

  async search(query) {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${query}&key=${this.key}`, this.getRequestOptions);
    const result = await response.json();
    return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
*/
