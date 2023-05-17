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

export const BoxButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
`;

export const Edit = styled.button`
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

export const Delete = styled.button`
  margin: 0.625rem;
  padding: 0.625rem;

  border-radius: 1.25rem;
  border: 0.063rem solid white;
  color: white;
  background: red;
  text-transform: capitalize;

  cursor: pointer;

  :hover {
    background: darkorange;

    transition: background 0.5s;
  }
`;

export const BoxName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  margin-top: 3.125rem;

  border: 0.063rem solid white;
  border-radius: 1.25rem;
  background: gray;
`;

export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6.25rem;
  height: 6.25rem;
  margin-top: -3.125rem;

  border: 0.063rem solid white;
  border-radius: 100%;
  background: darkorange;
`;

export const Title = styled.h2`
  width: 100%;
  margin: 0.625rem;

  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: white;
  background: transparent;
`;

export const ContainerNumber = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 90%;
  margin: 1.875rem 0;

  border: 0.063rem solid white;
  border-radius: 1.25rem;
  background: gray;
`;

export const ContainerEmail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 90%;
  margin: 0 0 1.875rem;

  border: 0.063rem solid white;
  border-radius: 1.25rem;
  background: gray;
`;

export const BoxGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90%;
  margin-top: 1.875rem;

  border: 0.063rem solid white;
  border-radius: 1.25rem;
  background: gray;
`;

export const TextGroup = styled.p`
  width: 100%;
  margin: 0.625rem;
  padding-left: 0.625rem;

  text-align: center;
  font-size: 0.938rem;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  background: transparent;
`;

export const Group = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 0.625rem;
  padding-left: 0.625rem;

  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  background: transparent;
`;

export const BoxNumber = styled.div`
  display: flex;
  flex-direction: column;

  background: transparent;
`;

export const Text = styled.p`
  width: 100%;
  margin: 0.625rem;
  padding-left: 0.625rem;

  font-size: 0.938rem;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  background: transparent;
`;

export const Number = styled.h2`
  width: 100%;
  margin: 0.625rem;
  padding-left: 0.625rem;

  font-family: sans-serif;
  font-weight: bold;
  color: white;
  background: transparent;
`;

export const Email = styled.h2`
  width: 100%;
  margin: 0.625rem;
  padding-left: 0.625rem;

  font-family: sans-serif;
  font-weight: bold;
  color: white;
  background: transparent;
  
  @media (max-width: 768px) {
    width: 90%;
    overflow-wrap: break-word;
  }
`;

export const LogoPhoto = styled.img`
  width: 70%;

  background: transparent;
`;
export const LogoPhone = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  background: transparent;
`;

export const Alert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 0.625rem;
  margin: 0 auto;

  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;

  border: 0.125rem solid gray;
  transform: translate(-50%, -50%);

  background: black;

  @media (min-width: 768px) {
    width: 90%;
    max-height: 40.625rem;
  }
`;

export const TextAlert = styled.h2`
  width: 100%;
  margin: 0.625rem;
  padding-left: 0.625rem;
  
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  background: transparent;
`;

export const Yes = styled.button`
  min-width: 6.25rem;
  margin: 0.625rem;
  padding: 0.625rem;

  border-radius: 1.25rem;
  border: 0.063rem solid white;
  color: white;
  background: green;

  text-transform: capitalize;

  cursor: pointer;

  :hover {
    background: darkorange;

    transition: background 0.5s;
  }
`;

export const No = styled.button`
  min-width: 6.25rem;
  margin: 0.625rem;
  padding: 0.625rem;

  border-radius: 1.25rem;
  border: 0.063rem solid white;
  color: white;
  background: red;

  text-transform: capitalize;

  cursor: pointer;

  :hover {
    background: darkorange;

    transition: background 0.5s;
  }
`;
