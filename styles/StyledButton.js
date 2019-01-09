import styled from 'styled-components';

export const StyledButton = styled.button`
  background: #485460;
  color: #fff;
  font-size: inherit;
  font-weight: 700;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 1.25rem 3rem;
  cursor: pointer;
  box-shadow: 0 3px 6px -6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
  &:hover {
    background: #f4f4f4;
    color: #485460;
    border: 1px solid #485460;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
