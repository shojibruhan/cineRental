function getImageUrl(name) {
  return new URL(`../assets/movie_cover/${name}`, import.meta.url).href;
}

export { getImageUrl };
