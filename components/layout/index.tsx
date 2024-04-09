import { Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import SEO from '../seo';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <SEO />
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
