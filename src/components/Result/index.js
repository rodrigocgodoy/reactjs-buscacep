import React, { Component } from "react";
import {
  FaEnvelope,
  GoRepoClone,
  FaStar,
  FaRegStar,
  MdDescription,
  FaLocationArrow,
  MdWeb,
  FaIndustry
} from "react-icons/all";
import {
  ContainerFilho,
  Cep,
  Img,
  Texto,
  HeaderInfo,
  InfoCep,
  ButtonVisit
} from "./styles";

class Result extends Component {
  state = {
    dataCep: this.props.dataCep
  };

  render() {
    const { dataCep } = this.props;

    return (
      <ContainerFilho>
        <Cep>
          <HeaderInfo />
          <InfoCep>
            
          </InfoCep>
        </Cep>
      </ContainerFilho>
    );
  }
}

export default Result;