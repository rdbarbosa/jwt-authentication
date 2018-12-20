import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {authenticated, user} = this.props.auth;
        const authLinks = (
            <React.Fragment>
                <Link className="nav-link" to="/aluno">Aluno</Link>
                <Link className="nav-link" to="/alunos">Alunos</Link>
                <Link className="nav-link" to="/avaliacao">Avaliação</Link>
                <Link className="nav-link" to="/avaliacoes">Avaliações</Link>
                <Link className="nav-link" to="/relatorio">Relatório</Link>
                <ul className="navbar-nav ml-auto">
                    <a href="" className="nav-link" onClick={this.onLogout.bind(this)}>
                        <img src={user.avatar} alt={user.name} title={user.name}
                            className="rounded-circle"
                            style={{ width: '25px', marginRight: '5px'}} />
                                Logout
                    </a>
                </ul>
            </React.Fragment>   
        )
      const guestLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/register">Sign Up</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Sign In</Link>
            </li>
        </ul>
      )
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Redux Node Auth</Link>                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {authenticated ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));