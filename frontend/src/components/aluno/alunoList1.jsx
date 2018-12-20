import React, { Component } from 'react'
import {BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';


export class alunoList extends Component {

    afterSearch(searchText, result) {
        console.log('Your search text is ' + searchText);
        console.log('Result is:');
        for (let i = 0; i < result.length; i++) {
          console.log('Fruit: ' + result[i].id + ', ' + result[i].name + ', ' + result[i].price);
        }
    };

    handleInsertButtonClick = (onClick) => {
        // Custom your onClick event here,
        // it's not necessary to implement this function if you have no any process before onClick
        console.log('This is my custom function for InserButton click event');
        onClick();
    }

    createCustomInsertButton = (onClick) => {
        return (
          <InsertButton
            btnText='CustomInsertText'
            btnContextual='btn-warning'
            className='my-custom-class'
            btnGlyphicon='glyphicon-edit'
            onClick={ () => this.handleInsertButtonClick(onClick) }/>
        );
      }
    

    render() {

        const products = [{
            id: 1,
            name: "Product1",
            price: 120
        }, {
            id: 2,
            name: "Product2",
            price: 80
        }];

        const options = {
            afterSearch: this.afterSearch,  // define a after search hook
            insertBtn: this.createCustomInsertButton
        };
        
        function buttonFormatter(cell, row){
            return '<BootstrapButton type="submit"></BootstrapButton>';
        }

        function activeFormatter(cell, row) {
            return (
              <ActiveFormatter active={ cell } />
            );
        }

        const selectRow = {
            mode: 'checkbox'
          }

        return (
            <BootstrapTable data={ products } search={ true } options={ options } insertRow selectRow = { selectRow }>
                <TableHeaderColumn dataField='id' isKey searchable={ false }>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Fruit Name</TableHeaderColumn>
                <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                <TableHeaderColumn dataField="button" dataFormat={buttonFormatter}>Buttons</TableHeaderColumn>
                <TableHeaderColumn dataField='active' dataFormat={ activeFormatter }>Active</TableHeaderColumn>
            </BootstrapTable>
            )
        }
}

export default alunoList
