const URL = 'https://24.javascript.pages.academy/keksobooking';
const CONNT_OF_PINS = 10;
let dataList; // для сохранения копии массива данных


// получение данных
const getData = async (onSuccess, onFail) => {
  try {
    const response = await fetch(`${URL}/data`); // получит промис
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    const data = await response.json(); // получит массив данных
    onSuccess(data.slice(0, CONNT_OF_PINS));
    dataList = data;
  } catch (error) {
    onFail(error);
  }
};

// отправка данных
const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(`${URL}`, {
      method: 'POST',
      body,
    });
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    onSuccess();
  } catch (error) {
    onFail(error);
  }
};

export { getData, sendData, dataList };
