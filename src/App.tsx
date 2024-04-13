import { ThemeProvider } from 'styled-components'

import { CartSidebarProvider } from './contexts/CartSidebarContext'
import { Dashboard } from './pages/Dashboard'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartSidebarProvider>
        <Dashboard />
      </CartSidebarProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
