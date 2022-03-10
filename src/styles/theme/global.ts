import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme.colors.text._300};
    font: 400 16px Roboto, sans-serif;
  }

	h1, h2, h3, h4, h5, h6 {
    margin: 0;
}
`;
