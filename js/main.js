// Второе задание "Вспомогательные функции".
// Функция, которая возвращающает случайное целое число из переданного диапазона включительно. Использовал материал с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

/*

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

*/

// Функция для проверки максимальной длины строки.

/* Написал до ретроспективы)

const minStringlenght = 20;
const maxStringlenght = 140;

let randomString = function getRandomString(minString, maxString) {
  min = Math.ceil(minStringlenght);
  max = Math.floor(maxStringlenght);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkStringlenght(randomString, minStringlenght, maxStringlenght) {
  if (randomString >= minStringlenght && randomString <= maxStringlenght) {
    return true;
  } else {
    return false;
  }
}
*/
// Вопрос 1 - зачем в ДЗ при объявлении функции необходимо записать "максимальную_длинну"? Вопрос 2 - как проверить работу программы мне в VS? Вопорс 3 - почему то не запускается в терминале команда npm run lint?

function getRandomPositiveInteger(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringlenght(string, lenght) {
  return string.lenght <= lenght;
}

getRandomPositiveInteger(0, 0);
checkStringlenght('', 140);
