import axios from 'axios';

export const config = axios.create({ baseURL: 'https://finnhub.io/api/v1/' });
