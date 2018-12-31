import Layout from '../components/Layout';
import styled, { keyframes } from 'styled-components';
import { StyledButton } from '../styles/StyledButton';
import { fadein } from '../styles/fadein';
import SocialLinks from '../components/SocialLinks';

const About = () => {
  return (
    <Layout>
      <StyledAbout>
        <div className="left">
          <h1>About</h1>
          <p>
            My name is Ryan Walker and I am a full-stack developer from
            Youngstown, Ohio. I started my journey as a developer in the fall of
            2017. Ever since starting my development journey, I have fallen more
            in love with the process. I am currently enrolled at Lambda School.
            I love JavaScript and learn more about it everyday. I also know:
            HTML, CSS, LESS, Python, and C. And like using frameworks like React
            and Django.
          </p>
          <p>
            Development is a pivot for me and I love the connection it has to
            everything. I graduated with a BA in Sociology and Psychology. I
            then served in in AmeriCorps and worked for non-profits before
            running off and joining a band. I also play music in a couple of
            musical projects: The Lighthouse and the Whaler and Poro.
          </p>
          <StyledButton>view my resume</StyledButton>
          <SocialLinks />
        </div>
        <div className="right">
          <img
            src="/static/professional_photo_small_bw_crop.png"
            alt="my image"
            className="about-img"
          />
        </div>
      </StyledAbout>
    </Layout>
  );
};

const StyledAbout = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 50px);
  display: flex;
  animation: ${fadein} 0.5s ease-in forwards;
  /* opacity: 0; */
  background-image: linear-gradient(
    to right,
    #8fdfde,
    #8fdfde 50%,
    #f4f4f4 50%
  );
  @media (max-width: 600px) {
    background-image: none;
    background-color: #8fdfde;
    flex-direction: column;
    position: relative;
  }

  .left,
  .right {
    width: 50%;
  }

  .left {
    padding: 2rem 4rem 4rem;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
      margin-top: 0;
      padding: 3rem;
      height: 100%;
      width: 100%;
    }
    h1 {
      font-size: 5rem;
      text-transform: uppercase;
      font-weight: 400;
      margin-bottom: 2rem;
      @media (max-width: 600px) {
        font-size: 3rem;
        margin-bottom: 2rem;
      }
    }
    button {
      width: 30%;
      margin: 2rem auto auto;
      @media (max-width: 600px) {
        width: 100%;
        margin: 2rem auto 5rem;
      }
    }
  }

  .right {
    display: flex;
    align-items: flex-end;
    @media (max-width: 600px) {
      display: none;
    }
    .about-img {
      width: 100%;
    }
  }
`;

export default About;
