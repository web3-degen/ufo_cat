import { Footer } from '@stylin.js/elements';
import { NextPage } from 'next';

import { Hero, Layout } from '@/components';

const HomePage: NextPage = () => (
  <Layout>
    <Hero />
    <Footer />
  </Layout>
);

export default HomePage;
