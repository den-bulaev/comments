import { add } from './requests';
import { Response } from '../types';

export const addComment = (
  productId: number, name: string, text: string,
): Promise<Array<Response>> => add(`goods/${productId}/comments`, name, text);
