import { createGlobalStyle } from 'styled-components';
import * as fontFamilies from './fonts';
import theme from './theme';
import media from './media';

const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Fira Sans';
    src: url(${fontFamilies.FiraSansLight}) format ('truetype');
    font-weight: 300;
    font-style: normal:
    font-display: auto;
  }
  @font-face {
    font-family: 'Fira Sans';
    src: url(${fontFamilies.FiraSansLightItalic}) format ('truetype');
    font-weight: 300;
    font-style: italic:
    font-display: auto;
  }
  @font-face {
    font-family: 'Fira Sans';
    src: url(${fontFamilies.FiraSansRegular}) format ('truetype');
    font-weight: normal;
    font-style: normal:
    font-display: auto;
  }
  @font-face {
    font-family: 'Fira Sans';
    src: url(${fontFamilies.FiraSansRegularItalic}) format ('truetype');
    font-weight: normal;
    font-style: italic:
    font-display: auto;
  }
  @font-face {
    font-family: 'Fira Sans';
    src: url(${fontFamilies.FiraSansMedium}) format ('truetype');
    font-weight: 500;
    font-style: normal:
    font-display: auto;
  }
  @font-face {
    font-family: 'Fira Sans';
    src: url(${fontFamilies.FiraSansMediumItalic}) format ('truetype');
    font-weight: 500;
    font-style: italic:
    font-display: auto;
  }
  @font-face {
    font-family: 'Fira Sans';
    src: url(${fontFamilies.FiraSansSemiBold}) format ('truetype');
    font-weight: 600;
    font-style: normal:
    font-display: auto;
  }
  @font-face {
    font-family: 'Fira Sans';
    src: url(${fontFamilies.FiraSansSemiBoldItalic}) format ('truetype');
    font-weight: 600;
    font-style: italic:
    font-display: auto;
  }
  @font-face {
    font-family: 'Fira Sans';
    src: url(${fontFamilies.FiraSansBold}) format ('truetype');
    font-weight: 800;
    font-style: normal:
    font-display: auto;
  }
  @font-face {
    font-family: 'Fira Sans';
    src: url(${fontFamilies.FiraSansBoldItalic}) format ('truetype');
    font-weight: 800;
    font-style: italic:
    font-display: auto;
  }

  html {
    box-sizing: border-box;
    width: 100%;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.deepestPurple};
    color: ${colors.slate};
    line-height: 1.3;
    font-family: ${fonts.FiraSans};
    font-size: ${fontSizes.xlarge};
    ${media.phablet`font-size: ${fontSizes.large};`}
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    color: ${colors.white};
    margin: 0 0 10px 0;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }
`;

export default GlobalStyle;
