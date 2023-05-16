import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  align-items: center;

  width: 75%;
  max-width: 1550px;
  margin: 0 0.625rem 0.625rem 0.625rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 60%;
  height: 3.125rem;
  margin: 1.25rem;

  border: none;
  border-bottom: 0.125rem solid white;
  color: white;
  background: black;

  :focus {
    outline: none;
    border: none;
    border-bottom: 0.125rem solid white;
  }

  :focus::placeholder {
    color: transparent;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
