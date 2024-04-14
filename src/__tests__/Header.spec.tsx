import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { Header } from '../components/Header'

describe('Header component', () => {
  it('should render logo', () => {
    render(<Header />)

    expect(screen.getByText('MKS')).toBeInTheDocument()
    expect(screen.getByText('Sistemas')).toBeInTheDocument()
  })
})
