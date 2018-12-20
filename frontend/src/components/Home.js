import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { loginUser } from '../actions/authentication';
// import classnames from 'classnames';


class Home extends Component {

    // componentDidMount() {
    //     if(!this.props.auth.authenticated) {
    //         this.props.history.push('/login');
    //     }
    // }

    render() {
        return (
            <div>
                Home Component
            </div>
        );
    }
}

// Home.propTypes = {
//     loginUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
//     errors: PropTypes.object.isRequired
// }

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps, null )(Home)