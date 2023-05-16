import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const BoxButtons = styled.div`
  display: flex;
  justify-content: flex-end;

  margin: 0.625rem;
`;

export const Button = styled.button`
  margin: 0.625rem;
  padding: 0.625rem;

  border-radius: 1.25rem;
  border: 0.063rem solid white;
  color: white;
  background: transparent;
  text-transform: capitalize;

  cursor: pointer;

  :hover {
    background: darkorange;

    transition: background 0.5s;
  }
`;

export const ContactLine = styled.button`
  display: flex;
  justify-content: space-between;

  margin: 0.313rem 0.938rem;
  padding: 0.313rem 0.938rem;

  border: 0.063rem solid white;
  border-radius: 1.25rem;
  background: gray;

  :hover {
    cursor: pointer;
  }
`;

export const BoxName = styled.div`
  display: flex;

  background: transparent;
`;

export const Letter = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.875rem;
  height: 1.875rem;
  margin-right: 0.938rem;
  padding: 0 0.5rem;

  font-size: 1.563rem;
  text-transform: uppercase;
  color: white;
  background: darkorange;
  border: 0.063rem solid white;
  border-radius: 100%;
`;

export const Text = styled.p`
  display: flex;

  color: white;
  background: transparent;
  font-size: 1.563rem;
`;
