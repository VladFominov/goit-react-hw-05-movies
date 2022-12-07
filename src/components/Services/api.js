import axios from 'axios';

const INITIAL_KEY = 'a20d815789042831b872cdc76057e418';

export const getTrending = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${INITIAL_KEY}`
  );
  
  return data;
  
};

export const getMovieById = async ( movieId ) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${INITIAL_KEY}`
  );
  
  return data;
};

export const getMovieByName = async movieName => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${INITIAL_KEY}&query=${movieName}`
  );
  
  return data;
};

export const getCast = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${INITIAL_KEY}`
  );
 
  return data;
};

export const getReviews = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${INITIAL_KEY}&page=1`
  );
 
  return data;
};
