import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  :root {
  --heights: 50vh;
  --widths: 100%;
}

`
