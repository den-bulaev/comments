import { add, download } from './requests';

export const addComment = (
  productId: number, name: string, text: string,
): Promise<any> => add(`goods/${productId}/comments`, name, text);

export const getComments = (productId: number): Promise<any> => (
  download(`goods/${productId}/comments?page=12`)
);
