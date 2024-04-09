import { Footer } from '@stylin.js/elements';
import { NextPage } from 'next';

import { Hero, Layout, Tokenomics } from '@/components';

const HomePage: NextPage = () => (
  <Layout>
    <Hero />
    <Tokenomics />
    <Footer />
  </Layout>
);

export default HomePage;
