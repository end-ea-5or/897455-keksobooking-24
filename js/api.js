const URL = 'https://24.javascript.pages.academy/keksobooking';

const getData = async (onSuccess, onFail) => {
  try {
    const response = await fetch(`${URL}/data`); // получит промис
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    const data = await response.json(); // получит массив данных
    onSuccess(data);
  } catch (error) {
    onFail(error);
  }
};

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

export { getData, sendData };
