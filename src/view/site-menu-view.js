const FilterValue = {
  all: 'All movies',
  watchlist: 'Watchlist',
  history: 'History',
  favorites: 'Favorites',
};

export const createSiteMenuTemplate = (filters) => {
  const activeChecked = 'all';

  return /* html */`<nav class="main-navigation">
  <div class="main-navigation__items">
  ${filters
      .map((filter) => (`<a href="#${filter.name}" class="main-navigation__item ${filter.name === activeChecked ? 'main-navigation__item--active' : ''}">${FilterValue[filter.name]} <span class="main-navigation__item-count">${filter.count}</span></a>`))
      .join('')}
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
</nav>

<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button">Sort by rating</a></li>
</ul>`;
};

