import { request } from './requests';
import { Options } from '../types';

export const addComment = (
  productId: number, options: Options,
): void => {
  request(`goods/${productId}/comments`, options);
};
