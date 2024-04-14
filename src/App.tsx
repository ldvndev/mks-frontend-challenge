import { ThemeProvider } from 'styled-components'

import { CartDrawerProvider } from './contexts/CartDrawerContext'
import { Dashboard } from './pages/Dashboard'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartDrawerProvider>
        <Dashboard />
      </CartDrawerProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
