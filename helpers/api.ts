import { create } from 'apisauce'

// define the api
export const api = create({
  baseURL: 'http://streaming.nexlesoft.com:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});