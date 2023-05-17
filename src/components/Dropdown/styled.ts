import styled from "styled-components";

export const Box = styled.div`
  width: 95%;
  min-height: 1.875rem;

  margin-bottom: 1.25rem;
`;

export const BoxSelect = styled.select`
  width: 70%;
  min-height: 1.875rem;

  border: 0.063rem solid white;
  border-radius: 0.313rem;
  
  color: white;
  background: gray;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const BoxDropdown = styled.option`
  color: white;
  background: gray;
`;