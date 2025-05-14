import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function Cta() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <OverTitle>Regulatory Compliance</OverTitle>
          <SectionTitle>Eziit operates in full compliance with all relevant financial regulations and consumer protection laws.</SectionTitle>
          <Description>
            
          </Description>
          <ButtonGroup>
            <NextLink href="" passHref legacyBehavior>
              <Button>
                View Terms and Conditions <span>&rarr;</span>
              </Button>
            </NextLink>
            
            {/*<NextLink href="#whitepaper" passHref legacyBehavior>
              <OutlinedButton transparent>
                Features <span>&rarr;</span>
              </OutlinedButton>
            </NextLink>*/}
          </ButtonGroup>
        </Stack>
        
        {/* Properly wrapped SVG */}
        
      </Container>
    </CtaWrapper>
  );
}

{/* SVG as a separate component
function CreditCardSVG() {
  return (
    <svg width="300" height="180" viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="280" height="160" rx="12" fill="#1A237E"/>
      <path d="M10 10H290V50H10V10Z" fill="white" fillOpacity="0.1"/>
      <rect x="30" y="70" width="40" height="30" rx="4" fill="#FFD600"/>
      <rect x="30" y="110" width="240" height="20" rx="4" fill="#E8EAF6" fillOpacity="0.8"/>
      <circle cx="250" cy="140" r="15" fill="#1565C0"/>
      <text x="250" y="145" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle">VISA</text>
      <path d="M150 40L170 60M170 60L150 80M170 60H230" stroke="#00C853" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}*/}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;

