import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
//import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Eziit"
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <section id="about">
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Buy now, pay later at Zero interest" overTitle="eziit">
            <p>
            Eziit is a credit platform that empowers you to shop for everyday essentials without the burden of interest or hidden fees. {' '}
              {/*<Link href="/help-center">Possimus ullam velit rem itaque consectetur, in distinctio?</Link>*/} Lorem ipsum, dolor sit amet
              With Eziit, you can buy goods on credit from trusted merchants and pay later, all at zero interest.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="" overTitle="eziit" reversed>
            <p>
            Our mission is simple: to make access to basic goods and services  {' '}
              <strong>easier, fairer, and stress free.</strong> Whether it's groceries, household items, or personal needs, Eziit gives you the flexibility to pay in manageable installments with full transparency.
            </p>
            <ul>
              <li>Shop Freely</li>
              <li>Flexible Repayment</li>
              <li>Build Credit History</li>
            </ul>
          </BasicSection>
          </section>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          {/*<Testimonials />*/}
          {/*<ScrollableBlogPosts posts={posts} />*/}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
