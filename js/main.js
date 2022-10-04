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

const minStringlenght = 20;
const maxStringlenght = 140;
let minString;
let maxString;

let randomString = function getRandomString(minString, maxString) {
  min = Math.ceil(minStringlenght);
  max = Math.floor(maxStringlenght);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkStringlenght(randomString, maxStringlenght) {
  if (randomString >= minStringlenght && randomString <= maxStringlenght) {
    return true;
  } else {
    return false;
  }
}

// Вопрос 1 - зачем в ДЗ при объявлении функции необходимо записать "максимальную_длинну"? Вопрос 2 - как проверить работу программы мне в VS? Вопорс 3 - почему то не запускается в терминале команда npm run lint?

getRandomString(1, 183);
