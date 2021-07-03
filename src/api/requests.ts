import { Options, Response } from '../types';

const BASE_URL = 'https://jordan.ashton.fashion/api/';

export const request = (
  endpoint: string, options: Options,
): Promise<Array<Response>> => {
  const url = BASE_URL + endpoint;

  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    })
    .then((result) => result.data);
};

export const add = (
  endpoint: string, options: Options,
): Promise<Array<Response>> => (
  request(endpoint, options)
);
