import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Header } from '../components/Header'

const user = userEvent.setup()

describe('Header', () => {
  it('should display logo correctly', () => {
    render(<Header />)

    expect(screen.getByText('MKS')).toBeInTheDocument()
    expect(screen.getByText('Sistemas')).toBeInTheDocument()
  })

  it('should open the side bar when the basket button is clicked', async () => {
    render(<Header />)

    const button = screen.getByRole('button')
    await user.click(button)

    expect(screen.getByText('x')).toBeInTheDocument()
  })
})
