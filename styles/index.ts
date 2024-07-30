import { css } from '@emotion/react';

export const GlobalStyles = css`
  @font-face {
    font-family: 'GochiHand';
    src: url('/fonts/GochiHand-Regular.ttf');
  }
  @font-face {
    font-family: 'Holywind';
    src: url('/fonts/Holywind.ttf');
  }
  @font-face {
    font-family: 'Scribble';
    src: url('/fonts/scribble.ttf');
  }
  @font-face {
    font-family: 'Reenie';
    src: url('/fonts/reenie-beanie.regular.ttf');
  }
  @font-face {
    font-family: 'Dailymirror';
    src: url('/fonts/Dailymirror.ttf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'GochiHand';
    color: #4e4e4e;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'GochiHand';
    text-shadow: 3px 3px 0 #fff;
    text-align: center;
  }

  p {
    font-family: 'GochiHand';
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
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
