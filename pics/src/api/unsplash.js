import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID cE4KOwJ01A56lBWQrXukm2bE6enWk_j-5bDFVvnTjB8',
  },
});
