import { createSiteMenuTemplate } from './view/site-menu-view.js';
import { renderTemplate, RenderPosition } from './render.js';
import { createCardFilmTemplate } from './view/card-film-view.js';
import { createFilmContainer } from './view/card-film-container.js';
import { createUserRankTemplate } from './view/user-rank-view.js';
import { createButtonShowMoreTemplate } from './view/button-show-more-view.js';
import { createPopupAboutFilm } from './view/popup-about-film.js';
import { cardFilm } from './data.js';
import { getRandomElement, getRandomInteger, getRandomText } from './util.js';
import { generateFilter } from './view/filter.js';
import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(dayjsRandom);
dayjs.extend(localizedFormat);


export const generateCardFilm = () => ({
  poster: getRandomElement(cardFilm.posters),
  filmTitle: getRandomElement(cardFilm.filmTitles),
  rating: getRandomElement(cardFilm.ratings),
  dateOfRelease: dayjs.between('01 01 1970', '12/12/2021'),
  description: getRandomText(cardFilm.descriptions),

  comments: Array.from({ length: getRandomInteger(0, 5) }, () => ({
    emoji: getRandomElement(cardFilm.comments.emojies),
    date: dayjs.between('01 01 1970', '12/12/2021').format('YYYY/MM/DD HH:mm'),
    author: getRandomElement(cardFilm.comments.authors),
    message: getRandomElement(cardFilm.comments.messages),
  })),
  genres: getRandomText(cardFilm.genres),
  isWatchlist: Boolean(getRandomInteger(0, 1)),
  isHistory: Boolean(getRandomInteger(0, 1)),
  isFavorites: Boolean(getRandomInteger(0, 1)),
});
const FILM_COUNT_PER_STEP = 5;
const FILM_COUNT = 20;
const similarGenerations = Array.from({ length: FILM_COUNT }, generateCardFilm);
const filters = generateFilter(similarGenerations);

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer');


renderTemplate(siteMainElement, createSiteMenuTemplate(filters), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createFilmContainer(), RenderPosition.BEFOREEND);
const siteFilmContainerElement = siteMainElement.querySelector('.films-list__container');
for (let i = 0; i < Math.min(similarGenerations.length, FILM_COUNT_PER_STEP); i++) {
  renderTemplate(siteFilmContainerElement, createCardFilmTemplate(similarGenerations[i]), RenderPosition.BEFOREEND);

}



if (similarGenerations.length > FILM_COUNT_PER_STEP) {
  let renderedFilmCount = FILM_COUNT_PER_STEP;
  renderTemplate(siteMainElement, createButtonShowMoreTemplate(), RenderPosition.BEFOREEND);
  const showMoreButton = siteMainElement.querySelector('.films-list__show-more');
  showMoreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    similarGenerations
      .slice(renderedFilmCount, renderedFilmCount + FILM_COUNT_PER_STEP)
      .forEach((similarGeneration) => renderTemplate(siteFilmContainerElement, createCardFilmTemplate(similarGeneration), RenderPosition.BEFOREEND));
    renderedFilmCount += FILM_COUNT_PER_STEP;
    if (renderedFilmCount >= similarGenerations.length) {
      showMoreButton.remove();
    }
  });
}

renderTemplate(siteHeaderElement, createUserRankTemplate(), RenderPosition.BEFOREEND);

renderTemplate(siteFooterElement, createPopupAboutFilm(similarGenerations[0]), RenderPosition.AFTEREND);
const closePopupButton = document.querySelector('.film-details__close-btn');
const popupFilm = document.querySelector('.film-details');
closePopupButton.addEventListener('click', () => {
  popupFilm.remove();
});
export { similarGenerations };
