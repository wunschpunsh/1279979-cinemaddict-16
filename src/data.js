import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';

dayjs.extend(dayjsRandom);
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

const cardFilm = {
  filmTitles: [
    'Once Upon a Time in Hollywood',
    'Pulp Fiction',
    'Django Unchained',
    'Inglourious Basterds',
    'The Hateful Eight',
    'Reservoir Dogs',
    'Kill Bill',
    'Four Rooms',
    'True Romance',
  ],
  posters: [
    'popeye-meets-sinbad.png',
    'the-great-flamarion.jpg',
    'sagebrush-trail.jpg',
    'made-for-each-other.png',
    'santa-claus-conquers-the-martians.jpg',
    'the-dance-of-life.jpg',
    'the-man-with-the-golden-arm.jpg',
  ],
  descriptions: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'Sed sed nisi sed augue convallis suscipit in sed felis.',
    'Aliquam erat volutpat.',
    'Nunc fermentum tortor ac porta dapibus.',
    'In rutrum ac purus sit amet tempus.',
  ],
  comments: {
    emojies: [
      'angry.png',
      'puke.png',
      'sleeping.png',
      'smile.png',
    ],
    authors: [
      'Leonardo DiCaprio',
      'Brad Pitt',
      'Margot Robbie',
      'Harvey Keitel',
      'Tim Roth',
      'Michael Madsen',
      'Antonio Banderas',
      'Samuel L. Jackson',
      'John Travolta',
      'Uma Thurman',
      'Bruce Willis',
      'Quentin Tarantino',
    ],
    messages: [
      'Fantastic!',
      'Slaying!',
      'Pretty good stuff ahhaaa!',
      'Superb',
      'Number one!',
      'Watch out, world!',
      'One word: stunning',
      'This is beyond amazing',
      'Look like a pro, bro ',
      'Million dollar movie',
    ],
  },
  genres: [
    'horror',
    'comedy',
    'drama',
    'detective',
    'fantastic',
    'thriller',
    'musical',
    'biography',
  ],
  ratings: [9.3, 7.5, 8.1, 7.1, 6.5, 7.7, 9.1, 7.6, 8.5, 9.9],
  isWatchlist: false,
  isHistory: false,
  isFavorites: false,
};

export { cardFilm };

