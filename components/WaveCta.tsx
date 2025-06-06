import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

export default function WaveCta() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <>
      <WaveSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#D4AF37"
          fillOpacity="1"
          d="M0,64L80,58.7C160,53,320,43,480,80C640,117,800,203,960,197.3C1120,192,1280,96,1360,48L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </WaveSvg>
      <CtaWrapper>
  <Container>
    <Title>Underwritten Security</Title>
    <h1 style={{ color: 'white', textAlign: 'center' }}>
      Every transaction on Eziit is backed by our underwriting partners, <br />
      ensuring protection for both consumers and merchants.
    </h1>
  </Container>
</CtaWrapper>
    </>
  );
}

// This ensures the SVG color matches exactly with our theme
const WaveSvg = styled.svg`
  path {
    fill:rgb(199, 162, 39) !important;
  }
`;



const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
  margin-top: -1rem;
  padding-bottom: 16rem;

  ${media('<=tablet')} {
    padding-top: 8rem;
  }
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--textSecondary));
  margin-bottom: 4rem;
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CustomButtonGroup = styled(ButtonGroup)`
  justify-content: center;
`;