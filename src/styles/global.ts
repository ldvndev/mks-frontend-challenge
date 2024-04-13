import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background-color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Montserrat, sans-serif;
    line-height: 1.2;
  }

  a, button {
    cursor: pointer;
  }

  button {
    border: 0;
    background: transparent;
  }
`
