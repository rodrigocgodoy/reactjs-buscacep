import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import Result from "../Result";
import Error from "../Error";
import Loading from "../Loading";
import { FaSearch } from "react-icons/all";
import {
  Container,
  Logo,
  InputSearch,
  Content,
  Img,
  Input,
  Button
} from "./styles";

class Telasearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCep: [],
      status: "",
      loading: 0,
      cepSearch: this.props.match.params.cep
    };
    this.onChangecepSearch = this.onChangecepSearch.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
    // this.showSpiner = this.showSpiner.bind(this);
    // this.hideSipner = this.hideSipner.bind(this);
  }

  async componentDidMount() {
    await this.setState({
      ...this.state,
      loading: 1
    });

    await this.loadCep();

    await this.setState({
      ...this.state,
      loading: 0
    });
  }

  onChangecepSearch(event) {
    this.setState({
      ...this.state,
      cepSearch: event.target.value
    });
  }

  onClickButton = () => {
    this.loadCep();
  };

  loadCep = async () => {
    const cep = this.state.cepSearch;
    const cepData = api.get(`/${cep}/json/`);
 
    await Promise.all([cepData])
      .then(values => {
        this.setState({
          ...this.state,
          dataCep: values[0].data,
          status: 202
        });
      })
      .catch(error => {
        this.setState({
          ...this.state,
          dataCep: [],
          status: 404
        });
      });
  };

  render() {
    const { dataCep, loading, cepSearch } = this.state;

    return (
      <Container>
        <Logo>
          <Link to={"/"}>
            <Img src="/images/logo-busca-cep.png" alt="GitHub Search" />
          </Link>
        </Logo>
        <InputSearch>
          <Input
            placeholder="Por favor, digite um CEP"
            type="text"
            // value={cepSearch}
            onChange={this.onChangecepSearch}
          />
          {cepSearch === "" ? (
            <Button
              type="button"
              onClick={() => {
                alert("Por favor insira um CEP para proseguir!");
                return false;
              }}
            >
              <FaSearch />
            </Button>
          ) : (
            <Button type="button" onClick={this.onClickButton}>
              <FaSearch />
            </Button>
          )}
        </InputSearch>
        <Content>
          {/* <h1>{loading}</h1> */}
          {loading === 1 ? <Loading /> : null}
          {!!dataCep && dataCep.logradouro !== undefined ? (
            <Result dataCep={dataCep} />
          ) : (
            <Error />
          )}
        </Content>
      </Container>
    );
  }
}

export default Telasearch;