import Layout from '../components/Layout';
import styled from 'styled-components';
import Link from 'next/link';
import { StyledButton } from '../styles/StyledButton';

const StyledHomePage = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 80px);
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
