const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

async function handleResponse(res) {
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || 'Error en la solicitud');
  }
  return res.json();
}

export function getProducts(categoria = null) {
  const url = categoria
    ? `${BASE_URL}/products?categoria=${categoria}`
    : `${BASE_URL}/products`;
  return fetch(url).then(handleResponse);
}

export function getProductById(id) {
  return fetch(`${BASE_URL}/products/${id}`).then(handleResponse);
}

export function createOrder(orden) {
  return fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orden),
  }).then(handleResponse);
}
