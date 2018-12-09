import styled from 'styled-components';

const StyledSocialLinks = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  a {
    color: #485460;
    transition: all 0.2s;
    &:hover {
      color: #fff;
    }
  }
  i {
    font-size: 2.6rem;
  }
`;

const SocialLinks = () => {
  return (
    <StyledSocialLinks>
      socials:
      <a href="https://linkedin.com/ryan" target="_blank">
        <i class="fab fa-linkedin" />
      </a>
      <a href="/contact" target="_blank">
        <i class="fab fa-github" />
      </a>
      <a href="https://twitter.com/mr_ryanwalker" target="_blank">
        <i class="fab fa-twitter" />
      </a>
    </StyledSocialLinks>
  );
};

export default SocialLinks;
