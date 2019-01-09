import Layout from '../components/Layout';
import styled from 'styled-components';
import { fadein } from '../styles/fadein';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
// import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  return (
    <Layout>
      <StyledContactPage>
        <h1>Contact!</h1>
        <ContactForm />

        {/* <SocialLinks /> */}
        <Footer />
      </StyledContactPage>
    </Layout>
  );
};

const StyledContactPage = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  flex-wrap: wrap;
  animation: ${fadein} 0.5s ease-in forwards;
  h1 {
    width: 100%;
  }
`;

export default Contact;
