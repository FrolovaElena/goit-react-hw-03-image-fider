import axios from 'axios';

const URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';
const KEY = '12491613-658b31097eea137c2f850aec7';
const fetchImages = (query, page) => {
  return axios.get(`${URL}${query}&page=${page}&per_page=12&key=${KEY}`);
};
export default fetchImages;
