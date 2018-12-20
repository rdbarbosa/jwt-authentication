import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';


import requireAuth from "./components/auth/requireAuth";
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Aluno from './components/aluno/aluno';
import AlunoList from './components/aluno/alunoList';
import Avaliacao from './components/avaliacao/avaliacaoForm'
import AvaliacaoList from './components/avaliacao/avaliacaoList'
import Relatorio from './components/relatorio/relatorio';

import 'bootstrap/dist/css/bootstrap.min.css';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
              <Navbar />
                <Route exact path="/" component={ requireAuth(Home) } />                
                <div className="">
                  <Route exact path="/aluno" component={ requireAuth(Aluno) } />
                  <Route exact path="/alunos" component={ requireAuth(AlunoList) } />
                  <Route path="/avaliacao" component={Avaliacao} />
                  <Route path="/avaliacoes" component={AvaliacaoList} />
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } />
                  <Route path="/relatorio" component={Relatorio} />
                </div>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;