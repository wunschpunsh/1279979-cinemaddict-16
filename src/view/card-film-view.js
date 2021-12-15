
export const createCardFilmTemplate = (similarGenerations) => {
  const { dateOfRelease, filmTitle, poster, description, rating, comments, genres } = similarGenerations;
  const MAX_LENGTH = 140;

  return /* html*/`
  <article class="film-card">
  <a class="film-card__link">
    <h3 class="film-card__title">${filmTitle}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${dateOfRelease.format('YYYY')}</span>
      <span class="film-card__duration">1h 55m</span>
      <span class="film-card__genre">${genres[0]}</span>
    </p>
    <img src="./images/posters/${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${description.join(' ').slice(0, MAX_LENGTH - 1)} ${description.join(' ').length >= MAX_LENGTH - 1 ? '...' : ''} </p >
  <span class="film-card__comments">${comments.length} comments</span>
  </a >
  <div class="film-card__controls">
    <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article > `;
};
