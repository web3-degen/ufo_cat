import { Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import SEO from '../seo';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <SEO />
    <Div
      inset="0"
      position="absolute"
      backgroundImage="linear-gradient(#fff8, #fff8), url('/img/bg.webp')"
      backgroundPosition="center center"
      backgroundSize="cover"
    />
    <Main
      display="flex"
      minHeight="100vh"
      flexDirection="column"
      backdropFilter="grayScale(100%)"
    >
      {children}
    </Main>
  </>
);

export default Layout;
