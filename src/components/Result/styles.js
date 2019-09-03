import styled from "styled-components";
import { colorPrimaria, colorSecundaria, device } from "../layout/StylesDevices";

export const ContainerFilho = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100%;
  grid-template-areas: "cep";
  padding-top: 70px;
  @media ${device.mobileS} {
    grid-template-columns: 1fr;
    grid-template-rows: 50vh 50vh;
    grid-template-areas:
      "cep"
      "repos";
    padding-top: 70px;
  }
`;

export const Cep = styled.div`
  grid-area: cep;
  margin: 0 5px;
  @media ${device.mobileS} {
    margin-left: 0;
  }
`;

export const Texto = styled.p`
  font-size: ${props => (props.fontSize ? props.fontSize : "15px")};
`;

export const HeaderInfo = styled.div`
  border: 2px solid ${colorSecundaria};
  width: 100%;
  height: 20px;
  background: ${colorSecundaria};
  border-radius: 10px 10px 0 0;
`;

export const InfoCep = styled.div`
  color: #fff;
  border: 2px solid ${colorSecundaria};
  width: 100%;
  min-height: 500px;
`;

export const InfoRepo = styled.div`
  min-height: 35px;
  width: 97%;
  background-color: #fff;
  border-radius: 25px;
  padding: 15px 0 15px 5px;
  margin-bottom: 10px;
  &&:hover {
    background-color: ${colorPrimaria};
    color: #fff;
    border: 2px solid ${colorPrimaria};
    transform: scale(1.1);
    transform: translate(5px, 5px);
    box-shadow: 10px 10px 34px 0px rgba(0, 0, 0, 0.75);
    a button {
      display: block;
    }
    a {
      color: #fff;
    }
  }
  a {
    color: ${colorPrimaria};
    text-decoration: none;
  }
`;