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

let min_Stringlenght = 20;
let max_Stringlenght = 140;
let random_String;

function getRandomString(min_Stringlenght, max_Stringlenght) {
  min = Math.ceil(min_Stringlenght);
  max = Math.floor(max_Stringlenght);
  return random_String = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function checkStringlenght(random_String, max_Stringlenght) {
  if (random_String >= min_Stringlenght && random_String <= max_Stringlenght) {
    return true;
  } else {
    return false;
  }
}
// Вопрос 1 - зачем в ДЗ при объявлении функции необходимо записать "максимальную_длинну"? Вопрос 2 - как проверить работу программы мне в VS?
