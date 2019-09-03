import React from 'react'
import { Container, Content, Img } from './styles';

export default function Error(props) {
    return(
        <Container>
            <Content>
                <h1>Ops, algo deu errado!!!</h1>
            </Content>
        </Container>
    )
}