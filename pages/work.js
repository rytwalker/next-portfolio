import Layout from '../components/Layout';
import styled from 'styled-components';
import { fadein } from '../styles/fadein';
import Project from '../components/Project';

const StyledWorkPage = styled.div`
  min-height: calc(100vh - 110px);
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  flex-wrap: wrap;
  animation: ${fadein} 0.5s ease-in forwards;
  @media (max-width: 800px) {
    width: 95%;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
  h1 {
    width: 100%;
    font-size: 5rem;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0;
    height: 60px;
    @media (max-width: 800px) {
      font-size: 4rem;
      margin-bottom: 3rem;
    }
  }
`;

const Work = () => {
  return (
    <Layout>
      <StyledWorkPage>
        <h1>Work</h1>
        <Project />
        <Project />
      </StyledWorkPage>
    </Layout>
  );
};

export default Work;
