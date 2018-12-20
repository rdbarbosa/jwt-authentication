import React, { Component, Fragment } from 'react'
import Search from './search'
import Form from './form';

export class Relatorio extends Component {
  render() {
    return (
      <Fragment>
        <Search />
        <Form />
      </Fragment>
    )
  }
}

export default Relatorio
