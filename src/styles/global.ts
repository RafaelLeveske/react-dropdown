import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
body {
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  -webkit-font-smothing: antialiased;

  /* background: #282A36;
  color: #CDCDCD;
  -webkit-font-smothing: antialiased; */
}
body, input, button {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  outline: 0;
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}
button {
  cursor: pointer;
}
`;
