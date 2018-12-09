import Layout from '../components/Layout';
import styled from 'styled-components';
import Link from 'next/link';
import { StyledButton } from '../styles/StyledButton';
import { fadein } from '../styles/fadein';

const StyledHomePage = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 80px);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${fadein} 0.5s ease-in forwards;
  @media (max-width: 600px) {
    width: 95%;
    margin: 0 auto;
  }
`;

const StyledHeading = styled.h1`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 8rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
  margin-bottom: 3rem;
  line-height: 1.1;
  @media (max-width: 600px) {
    font-size: 7rem;
  }
  .last {
    color: #8fdfde;
  }

  .tag {
    font-size: 2.4rem;
    align-self: flex-end;
    text-transform: lowercase;
    font-weight: 300;
  }
`;

const Index = () => {
  return (
    <Layout>
      <StyledHomePage>
        <StyledHeading>
          Ryan <span className="last">Walker</span>
          <span className="tag">full-stack developer</span>
        </StyledHeading>
        <Link href="/work">
          <StyledButton>See my work</StyledButton>
        </Link>
      </StyledHomePage>
    </Layout>
  );
};

export default Index;
