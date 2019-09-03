import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/all";
import { Container, Logo, InputSearch, Img, Input, Button } from "./styles";

class Telainicial extends Component {
    state = {
      cepSearch: ""
    };
  
    onChangecepSearch = event => {
      this.setState({
        cepSearch: event.target.value
      });
    };

    render() {
        const { cepSearch } = this.state;
        return (
            <Container>
                <Logo>
                <Img src="/images/logo-busca-cep.png" alt="GitHub Search" />
                </Logo>
                <InputSearch>
                <Input
                    placeholder="Por favor, digite um CEP"
                    type="text"
                    onChange={this.onChangecepSearch.bind(this)}
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
                    <Link to={`/search/${cepSearch}`}>
                    <Button type="button">
                        <FaSearch />
                    </Button>
                    </Link>
                )}
                </InputSearch>
            </Container>
        )
    }
}

export default Telainicial;