import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, Grid, Row, Col, Table, Button } from 'react-bootstrap'
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const options = [
   { nome: 'Opção 1', value: 'chocolate', label: 'Chocolate' },
   { value: 'strawberry', label: 'Strawberry' },
   { value: 'vanilla', label: 'Vanilla' }
 ];

export class AvaliacaoForm extends Component {

   state = {
      selectedOption: null,
      avalDate: null,
      nascDate: null,
   }
   handleChangeNome = (selectedOption) => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
   }

   handleChangeDate = (avalDate) => {
      this.setState({avalDate})
   }

   handleChange (e) {
      this.setState({ [e.target.name]: e.target.value });
   }
   

  render() {
   const { selectedOption, avalDate, nascDate } = this.state;
      return (
         <form>
            <Grid fluid>
               <Row className="show-grid">
                  <Col md={3}>
                     <FormGroup>
                        <ControlLabel>Nome</ControlLabel>
                        <Select name="selectedOption" value={selectedOption} onChange={this.handleChangeNome} options={options} isClearable={true} />
                     </FormGroup>
                  </Col>
                  <Col md={1}>
                     <FormGroup>
                        <ControlLabel>Avaliação</ControlLabel>
                        {/* <FormControl type="text" /> */}
                        <DatePicker name="avalDate" className="form-control" dateFormat="dd/MM/yyyy" selected={avalDate} onChange={this.handleChangeDate}/>
                     </FormGroup>
                  </Col>
               </Row>
               <Row className="show-grid">
                  <Col md={1}>
                     <FormGroup>
                        <ControlLabel>Sexo</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                           <option value=""></option>
                           <option value="feminino">Feminino</option>
                           <option value="masculino">Masculino</option>
                        </FormControl>
                     </FormGroup>
                  </Col>
                  <Col md={1}>
                     <FormGroup>
                        <ControlLabel>Nascimento</ControlLabel>
                        <DatePicker name="nascDate" className="form-control" dateFormat="dd/MM/yyyy" selected={nascDate} onChange={this.handleChange}/>
                     </FormGroup>
                  </Col>
                  <Col md={1}>
                     <FormGroup>
                        <ControlLabel>Idade</ControlLabel>
                        <FormControl type="text" />
                     </FormGroup>
                  </Col>
               </Row>
               <Row className="show-grid">
                  <Col md={1}>
                     <FormGroup>
                        <ControlLabel>Massa Corporal</ControlLabel>
                        <FormControl type="text" />
                     </FormGroup>
                  </Col>
                  <Col md={1}>
                     <FormGroup>
                        <ControlLabel>Estatura</ControlLabel>
                        <FormControl type="text" />
                     </FormGroup>
                  </Col>
                  <Col md={1}>
                     <FormGroup>
                        <ControlLabel>Envergadura</ControlLabel>
                        <FormControl type="text" />
                     </FormGroup>
                  </Col>
                  <Col md={1}>
                     <FormGroup>
                        <ControlLabel>Cintura</ControlLabel>
                        <FormControl type="text" />
                     </FormGroup>
                  </Col>
               </Row>
               <Row className="show-grid">
                  <Col md={1}>
                     <FormGroup>
                        <ControlLabel>Corrida 6m</ControlLabel>
                        <FormControl type="text" />
                     </FormGroup>
                  </Col>
                  <Col md={1}>
                     <FormGroup>
                        <ControlLabel>Flexibilidade</ControlLabel>
                        <FormControl type="text" />
                     </FormGroup>
                  </Col>
                  <Col md={1}>
                     <FormGroup>
                        <ControlLabel>Abdominais/1min</ControlLabel>
                        <FormControl type="text" />
                     </FormGroup>
                  </Col>
                  <Col md={1}>
                     <FormGroup>
                        <ControlLabel>Arremesso</ControlLabel>
                        <FormControl type="text" />
                     </FormGroup>
                  </Col>
               </Row>
               <Row className="show-grid">
                  <Col md={1}>
                     <FormGroup>
                        <ControlLabel>Salto</ControlLabel>
                        <FormControl type="text" />
                     </FormGroup>
                  </Col>
                  <Col md={1}>
                     <FormGroup>
                        <ControlLabel>Agilidade</ControlLabel>
                        <FormControl type="text" />
                     </FormGroup>
                  </Col>
                  <Col md={1}>
                     <FormGroup>
                        <ControlLabel>Velocidade</ControlLabel>
                        <FormControl type="text" />
                     </FormGroup>
                  </Col>
                  <Col md={1}>
                     <FormGroup>
                        <ControlLabel>Resistência</ControlLabel>
                        <FormControl type="text" />
                     </FormGroup>
                  </Col>
               </Row>
               <Button type="button" bsStyle="primary">Salvar</Button>
            </Grid>
         </form>
      )
   }
}

export default AvaliacaoForm
