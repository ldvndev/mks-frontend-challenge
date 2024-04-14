import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { CartDrawer } from '../pages/Dashboard/components/CartDrawer'

describe('Header component', () => {
  it('should render title', () => {
    render(<CartDrawer />)

    expect(screen.getByText(/Carrinho/)).toBeInTheDocument()
  })
})
