import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactTable from "react-table";
import matchSorter from 'match-sorter'

import { getList, showUpdate } from '../../actions/alunos'

import "react-table/react-table.css";

// import { makeData } from "./utils";

export class alunoList extends Component {
  
  componentDidMount() {
    this.props.getList()
  } 

  render() {
  
    const renderRows = () => {
      const list = this.props.list || []
        return list.map(alu => (
            <tr key={alu._id}>
                <td>{alu.nome}</td>
                <td>{alu.email}</td>
                <td>{alu.sexo}</td>
                <td>{alu.nomeMae}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => this.props.showUpdate(alu)}>
                    <i className="fa fa-pencil-alt"></i>
                    Edit
                  </button>
                  <button className="btn btn-danger" onClick={() => this.props.remove(alu)}>
                    <i className="far fa-trash-alt"></i>
                    Del
                  </button>
                </td>
            </tr>
      ))
    }
    return (
      <div>
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Sexo</th>
              <th>Mãe</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

// export default alunoList
const mapStateToProps = state => ({list: state.aluno.list})
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(alunoList)