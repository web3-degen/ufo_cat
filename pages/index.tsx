import { NextPage } from 'next';

import { Footer, Hero, Layout, Music } from '@/components';

const HomePage: NextPage = () => (
  <Layout>
    <Music videoId="FlxBbOllK2I" />
    <Hero />
    <Footer />
  </Layout>
);

export default HomePage;
