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
    <H2 fontSize="2rem" maxWidth="40rem">
      Me Tolo Yakoloco, co-fudder of Solano Labs.
    </H2>
    <P fontSize="1.5rem" maxWidth="40rem">
      ✅ <Code>CA: Soon</Code>
    </P>
    <Div display="flex" gap="0.5rem" mb="1rem">
      <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://twitter.com/SolanoCofudder"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.3)' }}
      >
        <Img width="5rem" src="/img/x.webp" alt="X" />
      </A>
      <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://t.me/solanacofudder"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.3)' }}
      >
        <Img width="5rem" src="/img/tg.webp" alt="Coin Market Cap" />
      </A>
      {/* <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://birdeye.so/token/wbQqETusxtZEpB1SGiYhMDEM8ruBKazb6rgEmiNF5GB?chain=solana"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.3)' }}
      >
        <Img width="5rem" src="/img/birdeye.webp" alt="Birdeye" />
      </A> */}
      {/* <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://jup.ag/swap/wbQqETusxtZEpB1SGiYhMDEM8ruBKazb6rgEmiNF5GB-SOL"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.3)' }}
      >
        <Img width="5rem" src="/img/jup.webp" alt="Jup" />
      </A> */}
      {/* <A
        target="_blank"
        rel="noreferer, noopener"
        href="#"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.3)' }}
      >
        <Img width="5rem" src="/img/coingecko.webp" alt="Coin Gecko" />
      </A> */}
      {/* <A
        target="_blank"
        rel="noreferer, noopener"
        href="#"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.3)' }}
      >
        <Img width="5rem" src="/img/coinmarketcap.webp" alt="Coin Market Cap" />
      </A> */}
      {/* <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://dexscreener.com/solana/65lxwfmlj8fjj5lepcv979mtddiimpm1zmtkrxu12tvp"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.3)' }}
      >
        <Img width="5rem" src="/img/dexscreener.webp" alt="Dex Screener" />
      </A> */}
      {/* <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://www.dextools.io/app/en/solana/pair-explorer/65LXWfmLJ8Fjj5LEpCV979MTDdiiMPm1ZmtkrXU12tVP?t=1712971144437"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.3)' }}
      >
        <Img width="5rem" src="/img/dextools.webp" alt="Dex Tools" />
      </A> */}
    </Div>
    <Button
      all="unset"
      p="1rem"
      gap="1rem"
      bg="#ffffff"
      display="flex"
      color="#3E0451"
      fontSize="2rem"
      cursor="pointer"
      alignItems="center"
      fontFamily="GochiHand"
      border="5px solid #3E0451"
      boxShadow="10px 10px 0px #3E0451"
      nHover={{ transform: 'scale(1.1)' }}
      transition="transform 300ms ease-in-out"
    >
      <Img width="3rem" src="/img/pump.webp" alt="Pump" />
      SOON...
      <Img width="3rem" src="/img/solana.webp" alt="Solana" />
    </Button>
  </Header>
);

export default Hero;
