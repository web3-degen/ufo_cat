import { css } from '@emotion/react';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Kremlin';
    src: url('/fonts/Kremlin.ttf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Kremlin';
    color: #b20f0d;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Kremlin';
    text-align: center;
  }

  p {
    font-family: 'Kremlin';
    text-transform: uppercase;
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  html {
    overflow-x: hidden;
  }

  body {
    background-image: url('/img/bg.webp');
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    background-attachment: fixed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
