import { Footer as FooterElement, P } from '@stylin.js/elements';
import { FC } from 'react';

const Footer: FC = () => (
  <FooterElement
    backgroundColor="rgb(255, 255, 255, 0.9)"
    display="flex"
    justifyContent="center"
    maxWidth="1024px"
    width="92%"
    px="2rem"
    py="4rem"
    mx={['1rem', '1rem', '1rem', 'auto']}
    marginBottom="2rem"
    borderRadius="0 0 2rem 2rem"
  >
    <P
      opacity="0.8"
      fontSize="0.75rem"
      fontWeight="bold"
      textAlign="center"
      fontFamily="-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu"
    >
      No Promises, No Utility, Purely For Entertainment
    </P>
  </FooterElement>
);

export default Footer;
