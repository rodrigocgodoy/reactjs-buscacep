import styled from "styled-components";
import { colorPrimaria, colorSecundaria, device } from "../layout/StylesDevices";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 5vh 5vh 90vh;
  grid-template-areas:
    "logo inputSearch inputSearch"
    "content content content";
  padding-top: 35px;
  @media ${device.mobileS} {
    grid-template-columns: 1fr;
    grid-template-rows: 100% 100% 100%;
    grid-template-areas:
      "logo"
      "inputSearch"
      "content";
    padding-top: 5px;
  }
  @media ${device.mobileM} {
    grid-template-columns: 1fr;
    grid-template-rows: 5vh 5vh 90vh;
    grid-template-areas:
      "logo"
      "inputSearch"
      "content";
    padding-top: 5px;
  }
  @media ${device.mobileL} {
    grid-template-columns: 1fr;
    grid-template-rows: 5vh 5vh 90vh;
    grid-template-areas:
      "logo"
      "inputSearch"
      "content";
    padding-top: 5px;
  }
`;

export const Logo = styled.div`
  grid-area: logo;
  justify-self: center;
  margin-left: -100px;
  @media ${device.mobileS} {
    margin-left: 0;
  }
  @media ${device.mobileM} {
    margin-left: 0;
  }
  @media ${device.mobileL} {
    margin-left: 0;
  }
`;

export const InputSearch = styled.div`
  grid-area: inputSearch;
  justify-self: center;
  margin-left: -120px;
  padding-top: 15px;
  @media ${device.mobileS} {
    padding-top: 30px;
    margin-left: 0;
  }
  @media ${device.mobileM} {
    padding-top: 30px;
    margin-left: 0;
  }
  @media ${device.mobileL} {
    padding-top: 30px;
    margin-left: 0;
  }
`;

export const Content = styled.div`
  grid-area: content;
`;

export const Img = styled.img`
  width: 200px;
  @media ${device.mobileS} {
    width: 150px;
  }
  @media ${device.mobileM} {
    width: 160px;
  }
  @media ${device.mobileL} {
    width: 180px;
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border-radius: 3px 0 0 3px;
  border: 2px solid ${colorPrimaria};
  color: ${colorPrimaria};
  font-weight: bolder;
  font-size: 15px;
  height: 34px;
  min-width: 350px;
  padding-left: 10px;
  &&::placeholder {
    font-size: 15px;
    color: ${colorPrimaria};
  }
  &&:hover {
    outline: none;
  }
  &&:focus {
    outline: none;
    &&::placeholder {
    }
  }
  @media ${device.mobileS} {
    font-size: 13px;
    min-width: 150px;
    margin-top: 5px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
    min-width: 200px;
  }
  @media ${device.mobileL} {
    font-size: 15px;
    min-width: 200px;
  }
`;

export const Button = styled.button`
  /* padding-top: 500px; */
  background-color: ${colorPrimaria};
  border-radius: 0 3px 3px 0;
  border: none;
  color: #fff;
  height: 40px;
  width: 65px;
  // mudei o font size de 15 para 14
  font-size: 14px;
  cursor: pointer;
  &&:hover {
    background-color: ${colorPrimaria};
    opacity: 0.8;
  }
  @media ${device.mobileS} {
    font-size: 13px;
    /* height: 40px;
    margin-top: 2px; */
  }
  @media ${device.mobileM} {
    font-size: 14px;
  }
  @media ${device.mobileL} {
    font-size: 15px;
  }
`;