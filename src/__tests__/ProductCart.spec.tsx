import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { Product } from '../contexts/CartDrawerContext'
import { ProductCard } from '../pages/Dashboard/components/ProductCard'

const fakeProduct: Product = {
  id: 1,
  name: 'Fake Product',
  brand: 'Apple',
  photo: 'fake-photo',
  price: '2000',
  quantity: 1,
  description: 'Fake product description',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

describe('ProductCard component', () => {
  it('should render product image', () => {
    render(<ProductCard products={fakeProduct} />)

    expect(screen.getByAltText(fakeProduct.name)).toBeInTheDocument()
  })
})
