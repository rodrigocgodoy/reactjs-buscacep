    
import styled from "styled-components";
// import styled, { css } from "styled-components";

import { colorRoxo, device } from "../layout/StylesDevices";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50vh 50vh;
  grid-template-areas:
    "logo logo logo"
    "inputSearch inputSearch inputSearch";
`;

export const Logo = styled.div`
  grid-area: logo;
  justify-self: center;
  align-self: center;
`;

export const InputSearch = styled.div`
  grid-area: inputSearch;
  justify-self: center;
  align-self: flex-start;
`;

export const Img = styled.img`
  width: 500px;
  @media ${device.mobileS} {
    width: 300px;
  }
  @media ${device.mobileM} {
    width: 350px;
  }
  @media ${device.mobileL} {
    width: 400px;
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border-radius: 3px 0 0 3px;
  border: 2px solid ${colorRoxo};
  color: ${colorRoxo};
  font-weight: bolder;
  font-size: 15px;
  height: 34px;
  min-width: 350px;
  padding-left: 10px;
  &&::placeholder {
    font-size: 15px;
    color: ${colorRoxo};
  }
  &&:hover {
    outline: none;
  }
  &&:focus {
    outline: none;
  }
  @media ${device.mobileS} {
    min-width: 200px;
    &&::placeholder {
      font-size: 13px;
    }
  }
  @media ${device.mobileM} {
    min-width: 250px;
    &&::placeholder {
      font-size: 14px;
    }
  }
  @media ${device.mobileL} {
    min-width: 300px;
    &&::placeholder {
      font-size: 15px;
    }
  }
`;

export const Button = styled.button`
  /* padding-top: 500px; */
  background-color: ${colorRoxo};
  border-radius: 0 3px 3px 0;
  border: none;
  color: #fff;
  height: 40px;
  width: 65px;
  /* mudei o font size de 15 para 14 */
  font-size: 14px;
  cursor: pointer;
  &&:hover {
    background-color: ${colorRoxo};
    opacity: 0.8;
  }
`;