import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactTable from "react-table";
import matchSorter from 'match-sorter'

import { getList } from '../../actions/alunos'

import "react-table/react-table.css";

// import { makeData } from "./utils";

export class alunoList extends Component {
  
  componentDidMount() {
    this.props.getList()
  } 

  render() {
  
    const data = this.props.list || []
    return (
        <div>
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: "Nome",
              columns: [
                {
                  Header: "Nome",
                  id: "nome",
                  width: 350,
                  accessor: d => d.nome,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["nome"] }),
                  filterAll: true
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Idade",
                  accessor: "idade"
                },
                {
                  Header: "Sexo",
                  accessor: "sexo"
                },
                {
                  Header: "Mãe",
                  id: "nomeMae",
                  accessor: "nomeMae",
                  width: 350,
                  // accessor: dm => dm.nomeMae,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["nomeMae"] }),
                  filterAll: true
                }
              ]
            },
            {
              // Header: 'Status',
              accessor: '_id',
              filterable: false,
              Cell: row => (
                  <div>
                    <button className="btn btn-success" onClick={() => console.log('Go: ', row.value)}>Go!</button>
                    <button className="btn btn-danger" onClick={() => console.log('Del: ',row.value)}>Del!</button>
                  </div>
              )
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
    )
  }
}

// export default alunoList
const mapStateToProps = state => ({list: state.aluno.list})
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(alunoList)