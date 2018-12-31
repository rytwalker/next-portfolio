import styled from 'styled-components';

const StyledProject = styled.div`
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 190px);
  margin-bottom: 5rem;
  align-items: center;
  flex-wrap: wrap;
  .left,
  .right {
    width: 48%;
    @media (max-width: 800px) {
      width: 100%;
    }
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
      @media (max-width: 980px) {
        font-size: 1.6rem;
      }
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
          One of the many hats I wear is quizmaster (quizmaster hat?) at pub
          quiz. I wanted to find a way to reward teams that come back week after
          week. So goes the creation of Suzie's Scores. It is an app that keeps
          track of teams' scores and compiles each weeks results to give teams
          fat stats about their overall performance.
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
