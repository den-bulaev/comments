export type Options = {
  method: string,
  body?: string,
  headers?: {
    'Content-type': string,
  }
}

export type Response = {
  id: number,
  name: string,
  text: string,
  visible: number,
  'product_id': number,
  'created_at': string,
  'updated_at': string,
}
