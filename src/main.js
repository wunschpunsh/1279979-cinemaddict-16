import { createSiteMenuTemplate } from './view/site-menu-view.js';
import { renderTemplate, RenderPosition } from './render.js';
import { createCardFilmTemplate } from './view/card-film-view.js';
import { createUserRankTemplate } from './view/user-rank-view.js';
import { createButtonShowMoreTemplate } from './view/button-show-more-view.js';
import { createPopupAboutFilm } from './view/popup-about-film.js';
const FILM_COUNT = 5;
const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer');

renderTemplate(siteMainElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND);
for (let i = 0; i < FILM_COUNT; i++) {
  renderTemplate(siteMainElement, createCardFilmTemplate(), RenderPosition.BEFOREEND);
}
renderTemplate(siteHeaderElement, createUserRankTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createButtonShowMoreTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteFooterElement, createPopupAboutFilm(), RenderPosition.AFTEREND);
