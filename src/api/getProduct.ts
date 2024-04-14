import { api } from '../libs/axios'

export interface GetProductResponse {
  products: {
    id: number
    name: string
    brand: string
    description: string
    photo: string
    price: string
    createdAt: string
    updatedAt: string
  }[]
}

export async function getProduct() {
  const response = await api.get<GetProductResponse>(
    '/products?page=1&rows=8&sortBy=id&orderBy=DESC',
  )

  return response.data
}
