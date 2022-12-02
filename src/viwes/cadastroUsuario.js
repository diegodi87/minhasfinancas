import React from "react";
import { withRouter } from "react-router-dom";

import Card from "../components/card";
import FormGroup from "../components/form-group";

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    cadastrar = () => {

        console.log(this.state)
    }

    cancelar =() => {
        this.props.history.push('/login')

    }

    render() {
        return (
                <Card title="Cadastro de usuário">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup label="Nome: *" htmlFor="inputNome">
                                    <input type="text"
                                        id="inputNome"
                                        name="nome"
                                        placeholder=" Digite aqui seu nome"
                                        className="form-control"
                                        onChange={e => this.setState({ nome: e.target.value })} />
                                </FormGroup>
                                <FormGroup label="Email: *" htmlFor="inputEmail">
                                    <input type="email"
                                        id="inputEmail"
                                        name="email"
                                        placeholder="Digite aqui seu email"
                                        className="form-control"
                                        onChange={e => this.setState({ email: e.target.value })}
                                    />
                                </FormGroup>
                                <FormGroup label="Senha: *" htmlFor="inputSenha">
                                    <input type="password"
                                        className="form-control"
                                        id="inputSenha"
                                        placeholder="Password"
                                        onChange={e => this.setState({ senha: e.target.value })}
                                    />
                                </FormGroup>
                                <FormGroup label="Repita a senha: *" htmlFor="inputRepitaSenha">
                                    <input type="password"
                                        className="form-control"
                                        id="inputSenha"
                                        placeholder="Password"
                                        onChange={e => this.setState({ senhaRepeticao: e.target.value })}
                                    />
                                </FormGroup>
                                <br/>
                                <button onClick={this.cadastrar} type="button" className="btn btn-success">Salvar</button>
                                <button onClick={this.cancelar} type="button" className="btn btn-danger">Voltar</button>
                            </div>
                        </div>
                    </div>
                </Card>
        )
    }
}

export default withRouter (CadastroUsuario)