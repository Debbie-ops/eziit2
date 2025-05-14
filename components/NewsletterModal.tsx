import React, { useState } from 'react';
import styled from 'styled-components';
import useEscClose from 'hooks/useEscKey';
import { media } from 'utils/media';
import Button from './Button';
import CloseIcon from './CloseIcon';
import Container from './Container';
import Input from './Input';
import MailSentState from './MailSentState';
import Overlay from './Overlay';

export interface NewsletterModalProps {
  onClose: () => void;
}

export default function NewsletterModal({ onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string | null>(null);

  useEscClose({ onClose });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setMessage(null);

    try {
      // Replace this with your actual email service API call
      const response = await mockEmailService(email);
      
      if (response.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setMessage(response.message || 'Subscription failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred. Please try again.');
    }
  }

  // Mock function - replace with your actual email service integration
  async function mockEmailService(email: string): Promise<{ success: boolean; message?: string }> {
    console.log('Would send to email service:', email);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    return { success: true };
    
    // For error simulation:
    // return { success: false, message: "Email is already subscribed" };
  }

  return (
    <Overlay>
      <Container>
        <Card onSubmit={handleSubmit}>
          <CloseIconContainer>
            <CloseIcon onClick={onClose} />
          </CloseIconContainer>
          {status === 'success' && <MailSentState />}
          {status !== 'success' && (
            <>
              <Title>Are you ready to enroll to the best newsletter ever?</Title>
              <Row>
                <CustomInput
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  required
                  type="email"
                />
                <CustomButton 
                  as="button" 
                  type="submit" 
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit'}
                </CustomButton>
              </Row>
              {status === 'error' && message && (
                <ErrorMessage>{message}</ErrorMessage>
              )}
            </>
          )}
        </Card>
      </Container>
    </Overlay>
  );
}

const Card = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: auto;
  padding: 10rem 5rem;
  background: rgb(var(--modalBackground));
  border-radius: 0.6rem;
  max-width: 70rem;
  overflow: hidden;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    padding: 7.5rem 2.5rem;
  }
`;

const CloseIconContainer = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;

  svg {
    cursor: pointer;
    width: 2rem;
  }
`;

const Title = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    font-size: 2.6rem;
  }
`;

const ErrorMessage = styled.p`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
  margin: 1rem 0;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 3rem;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;

const CustomButton = styled(Button)`
  height: 100%;
  padding: 1.8rem;
  margin-left: 1.5rem;
  box-shadow: var(--shadow-lg);

  ${media('<=tablet')} {
    width: 100%;
    margin-left: 0;
    margin-top: 1rem;
  }
`;

const CustomInput = styled(Input)`
  width: 60%;

  ${media('<=tablet')} {
    width: 100%;
  }
`;

