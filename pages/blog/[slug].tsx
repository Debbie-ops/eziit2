import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import MDXRichText from 'components/MDXRichText';
import { formatDate } from 'utils/formatDate';
import { media } from 'utils/media';
import { getReadTime } from 'utils/readTime';

interface Post {
  title: string;
  description: string;
  date: string;
  tags: string[];
  imageUrl: string;
  body: any;
}

export default function SingleArticlePage({ post, slug }: InferGetStaticPropsType<typeof getStaticProps>) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [readTime, setReadTime] = useState('');

  useEffect(() => {
    if (contentRef.current) {
      setReadTime(getReadTime(contentRef.current.textContent || ''));
    }
    
    const loadPrismTheme = () => {
      if (!document.querySelector('link[data-id="prism-theme"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/prism-theme.css';
        link.media = 'print';
        link.setAttribute('data-id', 'prism-theme');
        link.onload = () => link.media = 'all';
        document.head.appendChild(link);
      }
    };

    loadPrismTheme();
  }, []);

  if (!post) return null;

  const { title, description, date, tags, imageUrl, body } = post;
  const absoluteImageUrl = imageUrl 
    ? imageUrl.replace(/\\+/g, '/').replace(/\/+/g, '/')
    : '/default-image.jpg';

  const safeContent = typeof body === 'string' 
    ? body.replace(/\\[0-7]{1,3}/g, '')
    : body;

  return (
    <>
      <Head>
        <noscript>
          <link rel="stylesheet" href="/prism-theme.css" />
        </noscript>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      
      <CustomContainer id="content" ref={contentRef}>
        <h1>{title}</h1>
        <p>{formatDate(new Date(date))}</p>
        {imageUrl && <img src={absoluteImageUrl} alt={title} />}
        <MDXRichText content={safeContent} />
      </CustomContainer>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  const { slug } = params as { slug: string };

  // Replace this with your actual data fetching
  const mockPost: Post = {
    title: "Sample Post",
    description: "Sample description",
    date: new Date().toISOString(),
    tags: ["sample"],
    imageUrl: "/default-image.jpg",
    body: "<p>Sample content without any backslash issues.</p>"
  };

  return {
    props: {
      slug,
      post: mockPost
    },
  };
}

const CustomContainer = styled(Container)`
  position: relative;
  max-width: 90rem;
  margin: 10rem auto;
  ${media('<=tablet')} {
    margin: 5rem auto;
  }
`;