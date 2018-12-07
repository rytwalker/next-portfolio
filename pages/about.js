import Layout from '../components/Layout';
import styled from 'styled-components';

const StyledAbout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  height: 100%;

  /* z-index: 100; */

  .left,
  .right {
    width: 50%;
  }

  .left {
    background: #8fdfde;
    margin-top: -60px;
    padding: 5rem;
    line-height: 1.6;
    h1 {
      font-size: 4rem;
      margin-bottom: 5rem;
    }
  }

  .right {
    .about-img {
      width: 100%;
    }
  }
`;

const About = () => {
  return (
    <Layout>
      <StyledAbout>
        <div className="left">
          <h1>About</h1>
          <p>
            My name is Ryan Walker and I am a front-end developer from
            Youngstown, Ohio. I started my journey as a developer in the fall of
            2017. Ever since starting my development journey, I have fallen more
            in love with the process. I started my way by learning symatic HTML
            and CSS. I then began working my way through JavaScript. Since then,
            I have build up my skillset by learning React, SASS, and Bootstrap.
          </p>
          <p>
            Aside from coding, I also play music in a couple of musical
            projects: The Lighthouse and the Whaler and Poro. This has really
            inspired me to make sites for other musicians. Some of my other
            passions include food, beer, magic, and comedy.
          </p>
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

export default About;
