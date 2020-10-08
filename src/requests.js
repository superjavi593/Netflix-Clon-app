const API_KEY = process.env.TMBD_API_KEY;

const requests = {
  Trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  TopRatedMoves: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  NetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  ActionsMovies: `/discover/tv?api_key=${API_KEY}&&with_genres=28`,
  ComedyMovies: `/discover/tv?api_key=${API_KEY}&&with_genres=35`,
  HorrorMovies: `/discover/tv?api_key=${API_KEY}&&with_genres=27`,
  RomancerMovies: `/discover/tv?api_key=${API_KEY}&&with_genres=10749`,
  Documentries: `/discover/tv?api_key=${API_KEY}&&with_genres=99`,
};

export default requests;
