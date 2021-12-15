const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
const getRandomElement = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);
  return array[randomIndex];

};


const getRandomText = (array) => {
  const randomIndex = getRandomInteger(1, 5);
  return array.sort(() => getRandomInteger(-1, 1)).slice(0, randomIndex);
};

export { getRandomElement, getRandomInteger, getRandomText };
