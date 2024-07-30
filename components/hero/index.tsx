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
    borderRadius="2rem 2rem 0 0"
  >
    <Img
      width="100%"
      alt="background"
      borderRadius="2rem"
      src="/img/cover.webp"
      mb={['-3rem', '-4rem', '-5rem', '-7rem']}
    />
    <H1 title="UFO CAT" aria-label="UFO CAT">
      <Img
        overflow="hidden"
        borderRadius="50%"
        alt="Ufo Cat"
        src="/img/logo.webp"
        border="5px solid #ffffff"
        height={['5rem', '7.5rem', '10rem', '15rem']}
      />
    </H1>
    <H2 fontSize="2rem" maxWidth="40rem">
      Have you seen this cat.
    </H2>
    <P
      fontSize={['0.9rem', '0.9rem', '1.5rem']}
      maxWidth="40rem"
      textAlign="center"
    >
      <Code>CA: </Code>
    </P>
    <Div display="flex" gap="0.5rem" mb="1rem">
      <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://x.com/UFOCatCTO"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.3)' }}
      >
        <Img width="5rem" src="/img/x.webp" alt="X" />
      </A>
      <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://t.me/ufo_cat_portal"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.3)' }}
      >
        <Img width="5rem" src="/img/tg.webp" alt="Telegram" />
      </A>
      {/* <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://dexscreener.com/solana/4ccpqljfzrfy41mcbskfka8xvgzqvkpxma7ybrotpdid"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.3)' }}
      >
        <Img width="5rem" src="/img/dexscreener.webp" alt="Dex Screener" />
      </A> */}
    </Div>
    <Button
      all="unset"
      p="1rem"
      gap="1rem"
      bg="#ffffff"
      display="flex"
      color="#4e4e4e"
      fontSize="2rem"
      cursor="pointer"
      alignItems="center"
      fontFamily="Dailymirror"
      border="5px solid #4e4e4e"
      boxShadow="10px 10px 0px #4e4e4e"
      nHover={{ transform: 'scale(1.1)' }}
      transition="transform 300ms ease-in-out"
      marginBottom="1rem"
    >
      <Img width="3rem" src="/img/pump.webp" alt="Jup" />
      <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://jup.ag/swap/SOL-6GgVewyRN9PGJQbHXBf3YUg99cGQA87Bbx6vNpA3uXit"
      >
        BUY NOW
      </A>
      <Img width="3rem" src="/img/solana.webp" alt="Solana" />
    </Button>
  </Header>
);

export default Hero;
