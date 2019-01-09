import Layout from '../components/Layout';
import styled from 'styled-components';
import { fadein } from '../styles/fadein';
import Project from '../components/Project';
import Footer from '../components/Footer';

const Work = () => {
  return (
    <Layout>
      <StyledWorkPage>
        <h1>Work</h1>
        <Project
          title="SUZIE'S SCORES"
          description="One of the many hats I wear is quizmaster (quizmaster hat?) at pub
          quiz. I wanted to find a way to reward teams that come back week after
          week. So goes the creation of Suzie's Scores. It is an app that keeps
          track of teams' scores and compiles each weeks results to give teams
          fat stats about their overall performance."
          tech="React, Redux, Node, Express, Postgres"
          site="https://sharp-mccarthy-8025d0.netlify.com/"
          github="https://github.com/rytwalker/scores-client"
        />
        <Project
          title="LAMBDA NOTES"
          description="Lambda notes is a full-stack project I completed at Lambda School. I spent a week working on the UI using React and Redux and then spent another week working on the backend using a node express server and a SQL database using Postgres."
          tech="React, Redux, Node, Express, Postgres"
          site="https://sharp-mccarthy-8025d0.netlify.com/"
          github="https://github.com/rytwalker/scores-client"
        />
        <Footer />
      </StyledWorkPage>
    </Layout>
  );
};

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

export default Work;
