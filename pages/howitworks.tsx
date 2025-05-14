import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import Image from 'next/image';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import { media } from 'utils/media';

export default function HowItWorks() {
  return (
    <HowItWorksWrapper>
      <Container>
        <HeaderStack>
          <OverTitle>Simple & Seamless</OverTitle>
          <SectionTitle>How Eziit Works</SectionTitle>
          <Description>
            Eziit is a zero-interest soft loan system that connects employees, employers, and retailers in a win-win partnership.
          </Description>
        </HeaderStack>

        <StepsContainer>
          <StepCard>
            <StepIconContainer>
              <Image src="/download (1).png?height=80&width=80" alt="Download App" width={80} height={80} />
            </StepIconContainer>
            <StepTitle>1. Download & Register</StepTitle>
            <StepDescription>
              Download the Eziit app for free from your app store and complete the registration process to create your account.
            </StepDescription>
          </StepCard>

          <StepCard>
            <StepIconContainer>
              <Image src="/list-check.png?height=80&width=80" alt="Verification" width={80} height={80} />
            </StepIconContainer>
            <StepTitle>2. Employer Verification</StepTitle>
            <StepDescription>
              Eziit verifies your details with your employer. If your employer has an MOU with Eziit, your account will be activated immediately.
            </StepDescription>
          </StepCard>

          <StepCard>
            <StepIconContainer>
              <Image src="/shopping-cart.png?height=80&width=80" alt="Shop" width={80} height={80} />
            </StepIconContainer>
            <StepTitle>3. Shop With Ease</StepTitle>
            <StepDescription>
              Use your activated Eziit account to purchase goods and services from any registered retailer or service provider at zero interest.
            </StepDescription>
          </StepCard>

          <StepCard>
            <StepIconContainer>
              <Image src="/coins.png?height=80&width=80" alt="Payment" width={80} height={80} />
            </StepIconContainer>
            <StepTitle>4. Convenient Repayment</StepTitle>
            <StepDescription>
              Your employer deducts the amount from your next salary and transfers it to Eziit, who then pays the retailer. No interest, no hassle.
            </StepDescription>
          </StepCard>
        </StepsContainer>

        <BenefitsSection>
          <BenefitsTitle>Benefits For Everyone</BenefitsTitle>
          
          <BenefitsGrid>
            <BenefitCard>
              <BenefitIcon>
                <Image src="/users-alt.png?height=60&width=60" alt="Employee Benefits" width={60} height={60} />
              </BenefitIcon>
              <BenefitTitle>For Employees</BenefitTitle>
              <BenefitList>
                <BenefitItem>Zero interest soft loans</BenefitItem>
                <BenefitItem>Increased purchasing power</BenefitItem>
                <BenefitItem>Convenient payment through salary</BenefitItem>
                <BenefitItem>Access to a wide network of retailers</BenefitItem>
              </BenefitList>
            </BenefitCard>

            <BenefitCard>
              <BenefitIcon>
                <Image src="/home-location-alt.png?height=60&width=60" alt="Employer Benefits" width={60} height={60} />
              </BenefitIcon>
              <BenefitTitle>For Employers</BenefitTitle>
              <BenefitList>
                <BenefitItem>Increase staff satisfaction at no cost</BenefitItem>
                <BenefitItem>Enhance employee benefits package</BenefitItem>
                <BenefitItem>Simple payroll deduction process</BenefitItem>
                <BenefitItem>Improved employee retention</BenefitItem>
              </BenefitList>
            </BenefitCard>

            <BenefitCard>
              <BenefitIcon>
                <Image src="/shopping-bag.png?height=60&width=60" alt="Retailer Benefits" width={60} height={60} />
              </BenefitIcon>
              <BenefitTitle>For Retailers</BenefitTitle>
              <BenefitList>
                <BenefitItem>Increased customer numbers</BenefitItem>
                <BenefitItem>Higher sales volumes</BenefitItem>
                <BenefitItem>Maintained profit margins</BenefitItem>
                <BenefitItem>Secure payment guarantee</BenefitItem>
              </BenefitList>
            </BenefitCard>
          </BenefitsGrid>
        </BenefitsSection>
      </Container>
      
      {/* White background CTA section */}
      <WhiteCTAWrapper>
        <Container>
          <CTASection>
            <WhiteOverTitle>Get Started Today</WhiteOverTitle>
            <WhiteSectionTitle>Join the Eziit ecosystem and transform how you shop</WhiteSectionTitle>
            <ButtonGroup>
              <NextLink href="/download" passHref legacyBehavior>
                <GoldButton>
                  Sign up Here <span>&rarr;</span>
                </GoldButton>
              </NextLink>
              <NextLink href="/contact" passHref legacyBehavior>
                <OutlinedGoldButton>
                  Contact Us
                </OutlinedGoldButton>
              </NextLink>
            </ButtonGroup>
          </CTASection>
        </Container>
      </WhiteCTAWrapper>
    </HowItWorksWrapper>
  );
}

const HowItWorksWrapper = styled.div`
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const HeaderStack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8rem 0 4rem;
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

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
  max-width: 60%;
  text-align: center;
  
  ${media('<=tablet')} {
    max-width: 100%;
  }
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  margin: 2rem 0 6rem;
  
  ${media('<=tablet')} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${media('<=phone')} {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.6rem;
  padding: 2.5rem;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const StepIconContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

const StepTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color:rgb(250, 250, 249); /* Gold color */
`;

const StepDescription = styled.p`
  font-size: 1.6rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const BenefitsSection = styled.div`
  padding: 6rem 0;
  text-align: center;
`;

const BenefitsTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 4rem;
  color:rgb(255, 254, 250); /* Gold color */
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  
  ${media('<=tablet')} {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const BenefitCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.6rem;
  padding: 3rem;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const BenefitIcon = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

const BenefitTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color:rgb(255, 254, 252); /* Gold color */
`;

const BenefitList = styled.ul`
  text-align: left;
  padding-left: 2rem;
`;

const BenefitItem = styled.li`
  font-size: 1.6rem;
  color: rgba(var(--textSecondary), 0.8);
  margin-bottom: 1rem;
  position: relative;
  
  &:before {
    content: "•";
    color: #d4af37; /* Gold color */
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;


// White background wrapper for CTA section
const WhiteCTAWrapper = styled.div`
  background-color: rgb(var(--secondBackground));
  width: 100%;
`;

const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 0 10rem;
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    & > *:not(:first-child) {
      margin-top: 2rem;
    }
  }
`;

// Custom styled components for white background section
const WhiteOverTitle = styled(OverTitle)`
  color: rgb(var(--text));
`;

const WhiteSectionTitle = styled(SectionTitle)`
  color: rgb(var(--text));
`;

const GoldButton = styled(Button)`
  background-color: #d4af37;
  color: #ffffff;
  
  &:hover {
    background-color: #c4a030;
  }
`;

const OutlinedGoldButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #d4af37;
  color: #d4af37;
  
  &:hover {
    background-color: rgba(212, 175, 55, 0.1);
  }
`;