import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components'

import { CartDrawerProvider } from './contexts/CartDrawerContext'
import { queryClient } from './libs/react-query'
import { Dashboard } from './pages/Dashboard'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <CartDrawerProvider>
          <Dashboard />
        </CartDrawerProvider>
      </QueryClientProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
