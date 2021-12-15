
const filterMovie = {
  all: (similarGenerations) => similarGenerations.filter((similarGeneration) => similarGeneration.filmTitle).length,
  watchlist: (similarGenerations) => similarGenerations
    .filter((similarGeneration) => !similarGeneration.isHistory)
    .filter((similarGeneration) => similarGeneration.isWatchlist).length,
  history: (similarGenerations) => similarGenerations.filter((similarGeneration) => similarGeneration.isHistory).length,
  favorites: (similarGenerations) => similarGenerations.filter((similarGeneration) => similarGeneration.isFavorites).length,
};

export const generateFilter = (similarGenerations) => Object.entries(filterMovie).map(
  ([filterName, countSimilarGenerations]) => ({
    name: filterName,
    count: countSimilarGenerations(similarGenerations),
  }),
);
