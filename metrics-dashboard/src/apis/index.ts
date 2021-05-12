import axios from 'axios';

export const stock = axios.create({ baseURL: 'https://finnhub.io/api/v1/' });
