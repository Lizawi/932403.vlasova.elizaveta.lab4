"use strict";

/* ЛР №4. Основы JavaScript
   Вариант 19. «Историк и реконструктор» — возраст артефактов в годах */

// ---------- Данные ----------
// 6 значений: возраст артефактов в годах (диапазон 100–5000)
const artifactAges = [120, 250, 780, 1450, 2300, 3200];

// Пороговые значения вынесены в константы
const ANCIENT_LIMIT = 1000; // «древние» — старше 1000 лет
const YOUNG_LIMIT = 300;    // «молодые» — не старше 300 лет
const VERY_ANCIENT = 3000;  // порог для дополнительного сообщения

// ---------- Функции ----------

// Максимум (самый старый артефакт)
function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Фильтрация: артефакты старше заданного возраста
function filterOlderThan(arr, limit) {
  const result = [];
  for (const age of arr) {
    if (age > limit) {
      result.push(age);
    }
  }
  return result;
}

// Сумма элементов массива
function getSum(arr) {
  let sum = 0;
  for (const age of arr) {
    sum += age;
  }
  return sum;
}

// Средний возраст
function getAverage(arr) {
  return getSum(arr) / arr.length;
}

// Цикл по молодым артефактам (≤ 300 лет): количество и доля в процентах
function getYoungStats(arr, limit) {
  let count = 0;
  for (const age of arr) {
    if (age <= limit) {
      count++;
    }
  }
  const share = (count / arr.length) * 100;
  return { count, share };
}

// Запрос имени: prompt возвращает null при отмене, поэтому есть проверка
function askName() {
  const name = prompt("Как вас зовут?");
  if (name === null || name.trim() === "") {
    return "гость";
  }
  return name.trim();
}

// ---------- Основная логика ----------
function main() {
  // Ввод / вывод: prompt + alert
  const name = askName();
  alert("Здравствуйте, " + name + "! Добро пожаловать в музей артефактов.");

  // Вычисления
  const maxAge = getMax(artifactAges);
  const ancient = filterOlderThan(artifactAges, ANCIENT_LIMIT);
  const average = getAverage(artifactAges);
  const young = getYoungStats(artifactAges, YOUNG_LIMIT);

  // Вывод: alert
  alert(
    "Средний возраст – " + Math.round(average) + " лет, " +
    ancient.length + " артефактов – древние"
  );

  // Вывод: console.log
  console.log("Возраст артефактов:", artifactAges);
  console.log("Самый старый артефакт:", maxAge, "лет");
  console.log("Древние артефакты (старше " + ANCIENT_LIMIT + " лет):", ancient);
  console.log("Сумма возрастов:", getSum(artifactAges));
  console.log(
    "Молодые артефакты (≤ " + YOUNG_LIMIT + " лет): " + young.count +
    " шт., доля – " + young.share.toFixed(1) + "%"
  );

  // Дополнительное условие
  if (maxAge > VERY_ANCIENT) {
    console.log("Среди находок есть по-настоящему древние артефакты!");
  }
}

main();
