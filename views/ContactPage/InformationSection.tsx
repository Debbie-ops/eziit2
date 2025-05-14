import styled from 'styled-components';

export default function InformationSection() {
  return (
    <Wrapper>
  <h3>Contact Info</h3>
  <p style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '12px',
    fontSize: '16px' 
  }}>
    <span>Email: info@eziit.com</span> 
    <span>Phone: +260 971 089407</span>
    <span>Address: Zimco House Building. Suites 401 & 402, 4th Floor</span>
  </p>
</Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    color: rgba(var(--text), 0.7);
  }

  span {
    opacity: 1;
    color: rgba(var(--text), 1);
  }
`;
