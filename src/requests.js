const API_KEY = "9b6573e5858471d5b6aa2f2c489f2ad3";

const requests = {
  Trending: `/trending/all/week?api_key=${API_KEY}`,
  TopRatedMoves: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  NetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  ActionsMovies: `/discover/tv?api_key=${API_KEY}&&with_genres=28`,
  ComedyMovies: `/discover/tv?api_key=${API_KEY}&&with_genres=35`,
  HorrorMovies: `/discover/tv?api_key=${API_KEY}&&with_genres=27`,
  RomanceMovies: `/discover/tv?api_key=${API_KEY}&&with_genres=10749`,
  Documentaries: `/discover/tv?api_key=${API_KEY}&&with_genres=99`,
};

export default requests;
