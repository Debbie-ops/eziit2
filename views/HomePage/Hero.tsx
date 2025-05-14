import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroSection>
      <BackgroundImage />
      <HeroWrapper>
        <Contents>
          <CustomOverTitle style={{ fontSize: '2.0rem' }}>the eziit revolution</CustomOverTitle>
          <Heading>Make your life easier with Eziit</Heading>
          <Description>
          Building a world where financial constraints never prevent access to essential goods and services, creating a more equitable marketplace for consumers and businesses alike.
          </Description>
          <CustomButtonGroup>
            {/*<Button onClick={() => setIsModalOpened(true)}>
              Subscribe to the newsletter <span>&rarr;</span>
            </Button>
            <NextLink href="#whitepaper" passHref legacyBehavior>
              <Button transparent>
                Features <span>&rarr;</span>
              </Button>
            </NextLink>*/}
          </CustomButtonGroup>
        </Contents>
        <ImageContainer>
         {/* <HeroIllustration />*/}
        </ImageContainer>
      </HeroWrapper>
    </HeroSection>
  );
}

// Outer section that will contain the background
const HeroSection = styled.section`
  position: relative;
  min-height: 80vh;
  width: 100%;
  overflow: hidden; /* Ensure background doesn't overflow */
`;

// Background image with controllable opacity and mirroring
const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  background-image: url('/background(2).jpg'); 
  background-size: cover;
  background-position: center;
  opacity: 0.4; /* Control the opacity here (0.0 to 1.0) */
  z-index: 0;
  
  /* Mirror the background image horizontally */
  transform: scaleX(-1);
  
  /* If you want to mirror vertically instead, use this: */
  /* transform: scaleY(-1); */
  
  /* If you want to mirror both horizontally and vertically, use this: */
  /* transform: scale(-1, -1); */
`;

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;
  position: relative; /* Required for absolute positioning of background */
  min-height: 80vh;
  padding-bottom: 5rem;
  z-index: 1; /* Ensure content is above background */

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;
  position: relative;
  z-index: 2; /* Increased z-index */

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
  z-index: 2; /* Increased z-index */

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;