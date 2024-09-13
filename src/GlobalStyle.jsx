import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after { 
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: none;
  }

  /* HTML5 display-role reset for older browsers */
  
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: none;
  }


  ul,
  ol,
  li {
    list-style: none;
  }

  th,
  td {
    padding: 0;
  }

  select,
  input,
  textarea,
  button {
    margin: 0;
    padding: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    outline: none;
    border: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: inherit;
    vertical-align: middle;
  }

  input,
  button {
    background: transparent;
    -webkit-border-radius: 0;
    -webkit-appearance: none;
  }

  input[type='button'],
  button,
  select {
    cursor: pointer;
  }

  select {
    -o-appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }

  select::-ms-expand {
    display: none;
  }

  textarea {
    padding: 0;
    background: transparent;
    border: 0;
    overflow: auto;
    resize: none;
  }

  a {
    outline: 0;
    font-family: inherit;
    font-weight: inherit;
    text-decoration: none;
    color: inherit;
    line-height: inherit;
  }

  .h {
    position: absolute;
    top: -9999999px;
    opacity: 0;
  }


  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`

export default GlobalStyle
