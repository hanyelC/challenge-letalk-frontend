import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: #E5E5E5;
    color: #000;

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  button {
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover, button:hover {
    filter: brightness(0.9);
  }
`