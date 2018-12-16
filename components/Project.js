import styled from 'styled-components';

const StyledProject = styled.div`
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 190px);
  /* background: #8fdfde; */
  margin-bottom: 5rem;
  align-items: center;
  .left,
  .right {
    width: 48%;
    /* height: 100%; */
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
    nav {
      a {
        color: #485460;
        font-size: 2.4rem;
        text-decoration: none;
        margin-right: 2rem;
        transition: all 0.2s;
        &:hover {
          color: #8fdfde;
        }
      }
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
        <p>Tech: React, Redux, Node, Express, Postgres</p>
        <nav>
          <a href="https://sharp-mccarthy-8025d0.netlify.com/" target="_blank">
            <i className="fas fa-external-link-alt" />
          </a>
          <a href="https://github.com/rytwalker/scores-client" target="_blank">
            <i className="fab fa-github" />
          </a>
        </nav>
      </div>
    </StyledProject>
  );
};

export default Project;
