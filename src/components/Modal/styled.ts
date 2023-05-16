import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  padding: 0.625rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 0.625rem;

  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 99;

  border: 0.125rem solid gray;
  transform: translate(-50%, -50%);

  background: black;

  @media (min-width: 768px) {
    width: 31.25rem;
    max-height: 40.625rem;
  }
`;

export const Close = styled.span`
  width: 100%;
  margin: 0.625rem;

  font-family: sans-serif;
  font-weight: bold;
  text-align: end;
  color: white;

  cursor: pointer;
`;

export const Title = styled.h2`
  width: 100%;
  margin: 0.625rem;

  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: white;
`;

export const Form = styled.form`
  width: 100%;
  margin: 0.625rem;

  overflow-x: hidden;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  margin: 0.625rem;
`;

export const Atribute = styled.label`
  margin: 0.625rem 15px 0.625rem 0px;

  font-family: sans-serif;
  font-weight: bold;
  color: white;
`;

export const Input = styled.input`
  width: 95%;
  padding: 0.313rem;
  min-height: 1.875rem;
  max-height: 6.25rem;
  overflow-y: auto;
  word-wrap: break-word;
  resize: none;

  border-radius: 0.313rem;
  color: white;
  background: gray;
  border: 0.063rem solid white;
`;

export const Error = styled.p`
  font-family: sans-serif;
  font-weight: bold;

  color: red;
`;

export const Add = styled.button`
  width: 95%;
  height: 1.875rem;
  margin-bottom: 0.625rem;

  font-family: sans-serif;
  font-weight: bold;
  color: white;
  background: darkorange;
  border: 0.063rem solid white;
  border-radius: 2.5rem;

  cursor: pointer;
`;

export const Cancel = styled.button`
  width: 95%;
  height: 1.875rem;
  margin-bottom: 0.625rem;

  font-family: sans-serif;
  font-weight: bold;
  color: white;
  background: darkorange;
  border: 0.063rem solid white;
  border-radius: 2.5rem;

  cursor: pointer;
`;
