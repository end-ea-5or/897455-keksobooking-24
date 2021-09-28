function getRandomIntFromRange (from, to) {
  if (to <= from) {
    return 'Значение "от" должно быть меньше, чем значение "до"';
  }
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function getRandomFractionIntFromRange (from, to, decimalPlaces) {
  if (to <= from) {
    return 'Значение "от" должно быть меньше, чем значение "до"';
  }
  return +(Math.random() * (to - from) + from).toFixed(decimalPlaces);
}

getRandomIntFromRange(0, 8);
getRandomFractionIntFromRange(0, 8, 2);
