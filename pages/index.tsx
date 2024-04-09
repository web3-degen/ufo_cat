import { NextPage } from 'next';

import { Footer, Hero, Layout } from '@/components';

const HomePage: NextPage = () => (
  <Layout>
    <Hero />
    <Footer />
  </Layout>
);

export default HomePage;
