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
  h1 {
    width: 100%;
    font-size: 5rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 3rem;
    height: 60px;
  }
`;

const Work = () => {
  return (
    <Layout>
      <StyledWorkPage>
        <h1>Work</h1>
        <Project />
      </StyledWorkPage>
    </Layout>
  );
};

export default Work;
