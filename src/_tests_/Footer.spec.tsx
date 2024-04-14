import { render, screen } from '@testing-library/react'

import { Footer } from '../components/Footer'

describe('Footer', () => {
  it('should render content correctly', () => {
    render(<Footer />)

    expect(screen.getByText('MKS sistemas &copy; Todos os direitos reservados'))
  })
})
