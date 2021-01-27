import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --color-background: #F0F0F7;
    --color-primary-lighter: #9871F5;
    --color-primary-light: #916BEA;
    --color-primary: #8257E5;
    --color-primary-dark: #774DD6;
    --color-primary-darker: #6842C2;
    --color-secundary: #04D361;
    --color-secundary-dark: #04BF58;
    --color-title-in-primary: #FFFFFF;
    --color-text-in-primary: #D4C2FF;
    --color-text-title: #32264D;
    --color-text-complement: #9C98A6;
    --color-text-base: #6A6180;
    --color-line-in-white: #E6E6F0;
    --color-input-background: #F8F8FC;
    --color-button-text: #FFFFFF;
    --color-box-base: #FFFFFF;
    --color-box-footer: #FAFAFC;

    font-size: 60%;
  }
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline:0;
  }

  body{
    background: var(--color-background);
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100vh
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button, textarea {
    font: 500 1.6rem Poppins
  }

  a {
    text-decoration: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ol, ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button{
    cursor: pointer;
    background: 0;
    border: none;
  }

  .container {
    width: 90vw;
    max-width: 700px;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%
    }
  }
`
