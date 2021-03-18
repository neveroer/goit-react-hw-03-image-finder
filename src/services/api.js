const API_KEY = '20710753-e9f2c037f579edfcd595b7386';
const BASE_URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&';

export default function fetchImages(query, page) {
  const searchParams = new URLSearchParams({
    q: query,
    page,
    per_page: 12,
    key: API_KEY,
  });
  return fetch(`${BASE_URL}${searchParams}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`There are no images for your query: ${query}`),
    );
  });
}
