import styled from "styled-components";
// import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh;
  grid-template-areas:
    "content";
`;

export const Content = styled.div`
    grid-area: content;
    justify-self: center;
    align-self: center;
`

export const Img = styled.img`
    width: 150px;
`