import styled from 'styled-components';

const StyledProject = styled.div`
  display: flex;
  justify-content: space-between;
  .left,
  .right {
    width: 48%;
    height: 100%;
  }

  .left {
    img {
      width: 100%;
    }
  }

  .right {
    h2 {
      font-weight: 400;
      font-size: 4rem;
      margin-top: 0;
    }
    p {
      font-size: 2rem;
      line-height: 1.6;
    }
  }
`;

const Project = () => {
  return (
    <StyledProject>
      <div className="left">
        <img src="/static/suzies-scores-desktop.png" alt="" />
      </div>
      <div className="right">
        <h2>SUZIE'S SCORES</h2>
        <p>
          This is an app that does stuff and things check out the site here and
          check out the repo on gittub it uses react, redux, postgres, node,
          express backend. It has a full API backend that performs CRUD thingys.{' '}
        </p>
        <p>Github Email Website</p>
      </div>
    </StyledProject>
  );
};

export default Project;
