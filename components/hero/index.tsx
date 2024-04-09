import { A, Button, Code, Div, H1, Header, Img, P } from '@stylin.js/elements';
import { FC } from 'react';

import { TelegramSVG, XSVG } from '../svg';

const Hero: FC = () => (
  <Header
    flex="1"
    my="1rem"
    gap="1rem"
    display="flex"
    maxWidth="1024px"
    alignItems="center"
    flexDirection="column"
    mx={['1rem', '1rem', '1rem', 'auto']}
  >
    <Img
      width="100%"
      alt="background"
      borderRadius="2rem"
      src="/img/cover.webp"
      mb={['-3rem', '-4rem', '-5rem', '-7rem']}
    />
    <H1 title="Tolo Yakoloko" aria-label="Tolo Yakoloko">
      <Img
        overflow="hidden"
        borderRadius="50%"
        alt="Tolo Yakoloko"
        src="/img/logo.webp"
        border="5px solid #ffffff"
        height={['5rem', '7.5rem', '10rem', '15rem']}
      />
    </H1>
    <P fontSize="1.8rem" maxWidth="40rem">
      I am Tolo, co-fudder of Solano Labs
    </P>
    <P>
      ✅ Contract:<Code> Coming soon</Code>
    </P>
    <Div display="flex" gap="1rem" mt="1rem">
      <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://twitter.com/SolanoCofudder"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.1)' }}
      >
        <XSVG maxWidth="3rem" maxHeight="3rem" width="100%" />
      </A>
      <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://twitter.com/SolanoCofudder"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.1)' }}
      >
        <TelegramSVG maxWidth="3rem" maxHeight="3rem" width="100%" />
      </A>
    </Div>
    <Div display="flex" gap="0.5rem" mb="1rem">
      <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://twitter.com/SolanoCofudder"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.1)' }}
      >
        <Img width="5rem" src="/img/coingecko.webp" alt="Coin Gecko" />
      </A>
      <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://twitter.com/SolanoCofudder"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.1)' }}
      >
        <Img width="5rem" src="/img/coinmarketcap.webp" alt="Coin Market Cap" />
      </A>
      <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://twitter.com/SolanoCofudder"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.1)' }}
      >
        <Img width="5rem" src="/img/dexscreener.webp" alt="Dex Screener" />
      </A>
      <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://twitter.com/SolanoCofudder"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.1)' }}
      >
        <Img width="5rem" src="/img/dextools.webp" alt="Dex Tools" />
      </A>
    </Div>
    <Button
      all="unset"
      py="1rem"
      px="2rem"
      bg="#3E0451"
      color="#ffffff"
      cursor="pointer"
      fontSize="1.5rem"
      fontFamily="GochiHand"
      boxShadow="10px 10px 1px #494949"
      nHover={{ transform: 'scale(1.1)' }}
      transition="transform 300ms ease-in-out"
    >
      Buy Now
    </Button>
  </Header>
);

export default Hero;
