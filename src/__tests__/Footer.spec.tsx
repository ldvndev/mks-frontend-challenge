import { render } from '@testing-library/react'

import { Footer } from '../components/Footer'

describe('Footer', () => {
  it('should render all rights reserved text', () => {
    const { getByText } = render(<Footer />)

    expect(
      getByText('MKS sistemas © Todos os direitos reservados'),
    ).toBeTruthy()
  })
})
