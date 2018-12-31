import styled from 'styled-components';

const Project = props => {
  return (
    <StyledProject>
      <div className="left">
        <img src="/static/suzies-scores-desktop.png" alt="" />
      </div>
      <div className="right">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>Tech: {props.tech}</p>
        <nav>
          <a href={props.site} target="_blank">
            <i className="fas fa-external-link-alt" />
          </a>
          <a href={props.github} target="_blank">
            <i className="fab fa-github" />
          </a>
        </nav>
      </div>
    </StyledProject>
  );
};

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

export default Project;
