// функция для определения случайного целого (по умолчанию) значения из заданного диапазона
// для определения случайного значения с плавающей точкой третьим параметром
// необходимо указывать количество знаков после запятой
const getRandomIntFromRange = (from, to, decimalPlaces = 0) => {
  const lower = Math.min(Math.abs(from), Math.abs(to));
  const upper = Math.max(Math.abs(from), Math.abs(to));
  return +(Math.random() * (upper - lower) + lower).toFixed(decimalPlaces);
};

export {getRandomIntFromRange};
