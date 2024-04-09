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

import { XSVG } from '../svg';

const Hero: FC = () => (
  <Header
    my="5rem"
    mx="auto"
    gap="5rem"
    display="flex"
    maxWidth="1024px"
    alignItems="center"
    justifyContent="center"
  >
    <Div
      p="2rem"
      gap="2rem"
      display="flex"
      textAlign="center"
      alignItems="center"
      flexDirection="column"
    >
      <H1 title="Tolo Yakoloko" aria-label="Tolo Yakoloko">
        <Img
          height="10rem"
          overflow="hidden"
          borderRadius="50%"
          alt="Tolo Yakoloko"
          src="/img/logo.webp"
        />
      </H1>
      <H2 fontSize="1.8rem" maxWidth="40rem">
        I am Tolo, co-fudder of Solano Labs
      </H2>
      <P fontSize="1.8rem" maxWidth="40rem">
        Tolo Yakoloko has no intrinsic value, it is a community and culture
        token. No Promises, No Utility, Purely For Entertainment
      </P>
      <P>
        ✅ Contract:<Code> 7EGxmyu8DEvVVW3SxQBVeRh6ft3Qbtx2WNWxb2W7oxZ1</Code>
      </P>
      <A
        target="_blank"
        rel="noreferer, noopener"
        href="https://twitter.com/SolanoCofudder"
      >
        <XSVG maxWidth="2rem" maxHeight="2rem" width="100%" />
      </A>
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
    </Div>
  </Header>
);

export default Hero;
