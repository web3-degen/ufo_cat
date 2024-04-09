import { Footer as FooterElement, P } from '@stylin.js/elements';
import { FC } from 'react';

const Footer: FC = () => (
  <FooterElement px="2rem" py="4rem">
    <P
      opacity="0.8"
      fontSize="0.75rem"
      textAlign="center"
      fontFamily="-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu"
    >
      No Promises, No Utility, Purely For Entertainment
    </P>
  </FooterElement>
);

export default Footer;
