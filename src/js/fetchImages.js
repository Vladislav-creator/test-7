import axios from "axios";
// Збереження ключа API в окремому файлі змінних

axios.defaults.headers.common['Authorization'] = "RUutV9o6Wsaxt6MdwROcNBNPiyCS3A3gcUpA2RtcIDURKF9e1pdE1bDF";

// Перевірка помилок під час виконання запиту до серверу
axios.defaults.baseURL = "https://api.pexels.com/v1/search"


axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    Notiflix.Notify.failure('Something went wrong. Please try again later.');
    return Promise.reject(error);
  },
);

async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `?query=${query}&page=${page}&per_page=${perPage}`,
  );
  return response.data; 
}

export { fetchImages };

