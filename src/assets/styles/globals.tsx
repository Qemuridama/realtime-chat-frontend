import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700,900&display=swap');

* {
  padding: 0;
  margin: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: 'Source Sans Pro', 'Segoe UI', 'Roboto';
  margin: 0;
}
`

export default GlobalStyle
