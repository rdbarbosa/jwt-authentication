import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init, save, create, update, submit } from '../../actions/alunos';
import Form from './alunoForm';

export class Aluno extends Component {

  render() {
    return (
      <div>
        <Form onSubmit={ this.props.save } />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = dispatch => bindActionCreators({ init, save, create, update, submit }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Aluno)
