import styled from 'styled-components';

export const StyledButton = styled.button`
  background: #485460;
  color: #fff;
  font-size: inherit;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  padding: 1.25rem 3rem;
  cursor: pointer;
  box-shadow: 0 3px 6px -6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
  &:hover {
    background: #fff;
    color: #485460;
    box-shadow: 0 13px 6px -13px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
