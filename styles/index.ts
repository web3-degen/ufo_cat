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
  @font-face {
    font-family: 'ChunkyFive';
    src: url('/fonts/ChunkyFive.ttf');
  }
  @font-face {
    font-family: 'Russian';
    src: url('/fonts/Russian.ttf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Russian';
    color: #e24920;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Russian';
    text-align: center;
  }

  p {
    font-family: 'Russian';
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
