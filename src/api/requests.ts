const BASE_URL = 'https://jordan.ashton.fashion/api/';

type Options = {
  method: string,
  body?: string,
  headers?: {
    'Content-type': string,
  }
}

export const request = (
  endpoint: string, options: Options,
): Promise<any> => {
  const url = BASE_URL + endpoint;

  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    })
    .then((result) => result);
};

export const add = (
  endpoint: string, name: string, text: string,
): Promise<any> => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      name,
      text,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  return request(endpoint, options);
};

export const download = (
  endpoint: string,
): Promise<any> => {
  const method = { method: 'GET' };

  return request(endpoint, method);
};
