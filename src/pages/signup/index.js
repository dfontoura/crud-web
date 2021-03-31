import React, { Component } from "react";
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from "../../images/logo.png";

//import { Form, Container } from "./styles";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = e => {
    e.preventDefault();
    alert("Eu vou te registrar");
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
            <Card border="primary" className="text-center" style={{ width: '18rem' }}>
                <Card.Img style={{ width: '14rem' }} variant="top" src={Logo} alt="logo da escola" />
                <Card.Body>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="Nome de usuário"
                        onChange={e => this.setState({ username: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <button type="submit">Confirmar cadastro</button>
                    <hr />
                    <Link to="/">Já possui cadastro? Fazer login</Link>
                </Card.Body>
            </Card>
        </Form>
      </Container>
    );
  }
}

export default SignUp;