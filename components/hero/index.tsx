import {
  A,
  Button,
  Code,
  Div,
  H1,
  H2,
  Header,
  Img,
  P,
} from '@stylin.js/elements';
import { FC } from 'react';

const Hero: FC = () => (
  <Header
    flex="1"
    gap="1rem"
    display="flex"
    maxWidth="1024px"
    alignItems="center"
    flexDirection="column"
    mx={['1rem', '1rem', '1rem', 'auto']}
    backgroundColor="rgb(255, 255, 255, 0.9)"
    marginTop="2rem"
    // borderRadius="2rem 2rem 0 0"
    border="1rem solid #d0ae88"
    borderBottom="none"
  >
    <Img
      width="100%"
      alt="background"
      // borderRadius="2rem 2rem 0 0"
      src="/img/cover.webp"
      mb={['-3rem', '-4rem', '-5rem', '-7rem']}
    />
    <H1 title="UFO CAT" aria-label="UFO CAT">
      <Img
        overflow="hidden"
        borderRadius="50%"
        alt="Comrade Boris"
        src="/img/logo.webp"
        border="5px solid #ffffff"
        height={['7rem', '7.5rem', '10rem', '15rem']}
      />
    </H1>
    <H2 fontSize={['1.2rem', '1.3rem', '2.2rem']} maxWidth="50rem">
      War is Hell <br />
      <br /> And I am just a DOGE named Boris
    </H2>
    <P
      fontSize={['1rem', '1rem', '1.5rem']}
      textAlign="center"
      wordWrap="break-word"
      maxWidth="40rem"
      width="70%"
    >
      <Code>CA: BfHkvKMEYjwPXnL36uiM8RnAoMFy8aqNyTJXYU3ZnZtz</Code>
    </P>
    <Div display="flex" gap={['0.2rem', '1rem', '0.5rem']}>
      <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://x.com/BORIS_DOG_SOL"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.3)' }}
      >
        <Img width="5rem" src="/img/x.webp" alt="X" />
      </A>
      <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://t.me/boris_solana_portal"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.3)' }}
      >
        <Img width="5rem" src="/img/tg.webp" alt="Telegram" />
      </A>
      <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://dexscreener.com/solana/4ccpqljfzrfy41mcbskfka8xvgzqvkpxma7ybrotpdid"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.3)' }}
      >
        <Img width="5rem" src="/img/dexscreener.webp" alt="Dex Screener" />
      </A>
    </Div>
    <Button
      all="unset"
      p={['0.5rem', '0.75rem', '1rem']}
      gap={['0.5rem', '0.75rem', '1rem']}
      bg="#ffffff"
      display="flex"
      color="#b20f0d"
      fontSize={['1rem', '1.5rem', '2rem']}
      cursor="pointer"
      alignItems="center"
      fontFamily="Dailymirror"
      border={['3px solid #b20f0d', '4px solid #b20f0d', '5px solid #b20f0d']}
      boxShadow={[
        '5px 5px 0px #b20f0d',
        '7px 7px 0px #b20f0d',
        '10px 10px 0px #b20f0d',
      ]}
      nHover={{ transform: 'scale(1.1)' }}
      transition="transform 300ms ease-in-out"
      marginBottom={['0.5rem', '0.75rem', '1rem']}
    >
      <Img width="3rem" src="/img/pump.webp" alt="Jup" />
      <A target="_blank" rel="noreferer, noopener" href="https://pump.fun/">
        BUY NOW
      </A>
      <Img width="3rem" src="/img/solana.webp" alt="Solana" />
    </Button>
  </Header>
);

export default Hero;
