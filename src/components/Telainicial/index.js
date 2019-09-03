import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/all";
import { Container, Logo, InputSearch, Img, Input, Button } from "./styles";

class Telainicial extends Component {
    state = {
      textSearch: ""
    };
  
    onChangeTextSearch = event => {
      this.setState({
        textSearch: event.target.value
      });
    };

    render() {
        const { textSearch } = this.state;
        return (
            <Container>
                {/* <Logo>
                <Img src="/images/logo-gitHub-Search.png" alt="GitHub Search" />
                </Logo> */}
                <InputSearch>
                <Input
                    placeholder="Por favor, digite um username"
                    type="text"
                    onChange={this.onChangeTextSearch.bind(this)}
                />
                {textSearch === "" ? (
                    <Button
                    type="button"
                    onClick={() => {
                        alert("Por favor insira um user para proseguir!");
                        return false;
                    }}
                    >
                    <FaSearch />
                    </Button>
                ) : (
                    <Link to={`/search/${textSearch}`}>
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