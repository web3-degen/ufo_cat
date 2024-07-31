import { Footer as FooterElement, P } from '@stylin.js/elements';
import { FC } from 'react';

const Footer: FC = () => (
  <FooterElement
    backgroundColor="rgb(255, 255, 255, 0.7)"
    display="flex"
    justifyContent="center"
    maxWidth="1024px"
    width="92%"
    px="2rem"
    py="4rem"
    mx={['1rem', '1rem', '1rem', 'auto']}
    marginBottom="2rem"
    // borderRadius="0 0 2rem 2rem"
    border="1rem solid #d0ae88"
    borderTop="none"
  >
    <P fontSize="1rem" fontWeight="bold" textAlign="center">
      No Promises, No Utility, Purely For Entertainment
    </P>
  </FooterElement>
);

export default Footer;
