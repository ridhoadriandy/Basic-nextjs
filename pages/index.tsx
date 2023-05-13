import Features from '@/components/Home/features';
import Hero from '@/components/Home/hero';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Features />
      </Layout>
    </>
  );
}
