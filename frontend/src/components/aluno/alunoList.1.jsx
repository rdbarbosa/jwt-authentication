import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactTable from "react-table";
import matchSorter from 'match-sorter'

import { getList } from '../../actions/alunos'

import "react-table/react-table.css";

import { makeData } from "./utils";

export class alunoList extends Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }

  componentDidMount() {
    this.props.getList()
  } 

  render() {
    const { data } = this.state;
    const list = this.props.list || []
    return (
        <div>
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName",
                  filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) &&
                    row[filter.id].endsWith(filter.value)
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["lastName"] }),
                  filterAll: true
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: 'Stats',
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
            },
            {
                Header: 'Profile Progress',
                accessor: 'progress',
                Cell: row => (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#dadada',
                      borderRadius: '2px'
                    }}
                  >
                    <div
                      style={{
                        width: `${row.value}%`,
                        height: '100%',
                        backgroundColor: row.value > 66 ? '#85cc00'
                          : row.value > 33 ? '#ffbf00'
                          : '#ff2e00',
                        borderRadius: '2px',
                        transition: 'all .2s ease-out'
                      }}
                    />
                  </div>
                )
              }, {
                Header: 'Status',
                accessor: 'status',
                Cell: row => (
                  <span>
                    <span style={{
                      color: row.value === 'relationship' ? '#ff2e00'
                        : row.value === 'complicated' ? '#ffbf00'
                        : '#57d500',
                      transition: 'all .3s ease'
                    }}>
                      &#x25cf;
                    </span> {
                      row.value === 'relationship' ? 'In a relationship'
                      : row.value === 'complicated' ? `It's complicated`
                      : 'Single'
                    }
                  </span>
                )
            }, {
                Header: 'Status',
                accessor: 'status',
                Cell: row => (
                    <div>
                    <button className="btn btn-success" >Go!</button>
                    <button className="btn btn-danger" >Del!</button>
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