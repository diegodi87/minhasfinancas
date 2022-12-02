import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import CadastroUsuario from '../viwes/cadastroUsuario';
import Home from '../viwes/home';
import Login from '../viwes/login';

function Rotas() {

    return (
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuario" component={CadastroUsuario} />

            </Switch>
        </HashRouter>
    )
}

export default Rotas

