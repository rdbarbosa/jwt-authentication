import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DataTable } from 'react-data-components';
import { jsonResponse } from './data'
// import 'react-data-components/css/table-twbs.css'

export class AvaliacaoList extends Component {

  render() {
    const data = jsonResponse;
    const renderMapUrl = (val, row) => <a  href={`https://www.google.com/maps?q=${row['lat']},${row['long']}`}>  Google Maps </a>
    const tableColumns = [
        { title: 'Name', prop: 'name' },
        { title: 'City', prop: 'city' },
        { title: 'Street address', prop: 'street' },
        { title: 'Phone', prop: 'phone', defaultContent: '<no phone>' },
        { title: 'Map', render: renderMapUrl, className: 'text-center' },
    ];
    return (
      <div>
        <DataTable
            className="container"
            keys="id"
            columns={tableColumns}
            initialData={data}
            initialPageLength={5}
            initialSortBy={{ prop: 'name', order: 'ascending' }}
            pageLengthOptions={[ 5, 20, 50 ]}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AvaliacaoList)
