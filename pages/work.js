import Layout from '../components/Layout';
import styled from 'styled-components';

const StyledWorkPage = styled.div`
  /* min-height: 100vh; */
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  flex-wrap: wrap;
  h1 {
    width: 100%;
    font-size: 6rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  .left,
  .right {
    width: 50%;
    height: 100%;
  }

  .left {
    background-color: #8fdfde;
  }

  .right {
    h2 {
      font-weight: 400;
      font-size: 4rem;
    }
    p {
      font-size: 2rem;
      line-height: 1.6;
    }
  }
`;

const Work = () => {
  return (
    <Layout>
      <StyledWorkPage>
        <h1>Work</h1>
        <div className="left" />
        <div className="right">
          <h2>SUZIE'S SCORES</h2>
          <p>
            This is an app that does stuff and things check out the site here
            and check out the repo on gittub it uses react, redux, postgres,
            node, express backend. It has a full API backend that performs CRUD
            thingys.{' '}
          </p>
          <p>Github Email Website</p>
        </div>
      </StyledWorkPage>
    </Layout>
  );
};

export default Work;
