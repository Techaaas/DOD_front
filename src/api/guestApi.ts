// src/api/guestApi.ts
import axios from 'axios';

// Функция для получения данных о госте с сервера
export async function fetchGuestData(guestId: number) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users${guestId}`); // Замените путь и параметры запроса на свои
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении данных о госте', error);
    throw error;
  }
}
export async function fetchGuestIdFromServer() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Замените путь на ваш реальный маршрут для получения ID
    return response.data.id;
  } catch (error) {
    console.error('Ошибка при получении ID гостя', error);
    throw error;
  }
}