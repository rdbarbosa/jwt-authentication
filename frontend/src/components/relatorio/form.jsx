import React, { Component } from 'react'

import { FormGroup, FormControl, ControlLabel, Grid, Row, Col, Table } from 'react-bootstrap'

export class Relatorio extends Component {
  render() {
    return (
      <form>
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <FormGroup>
                <ControlLabel>Nome</ControlLabel>
                <FormControl type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <FormGroup>
                <ControlLabel>Data de Nascimento</ControlLabel>
                <FormControl type="text" />
              </FormGroup>
            </Col>
            <Col xs={6} md={4}>
              <FormGroup>
                <ControlLabel>Nome da Mãe</ControlLabel>
                <FormControl type="text" />
              </FormGroup>
            </Col>
            <Col xs={6} md={4}>
              <FormGroup>
                <ControlLabel>Idade</ControlLabel>
                <FormControl type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Row className="show-grid">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>MEDIDAS DE DIMENSÃO CORPORAL</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Massa Corporal (Peso)</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Estatura (Altura)</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Envergadura</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Perímetro da cintura</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Row className="show-grid">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th colSpan="6">TESTES DE APTIDÃO FÍSICA PARA SAÚDE</th> 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Estimativa de Peso</td>
                  <td>Índice de Massa Corporal IMC</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Estimativa de excesso de gordura visceral</td>
                  <td>Razão cintura estatura</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Aptidão cardiorrespiratória</td>
                  <td>Teste da corrida/ caminhada dos 6 minutos</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Flexibilidade</td>
                  <td>Teste de sentar e alcançar</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Resistência muscular localizada</td>
                  <td>N° de abdominais em 1 minuto - Sit-up</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Row className="show-grid">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th colSpan="6">TESTES DE APTIDÃO FÍSICA PARA O DESEMPRENHO ESPORTIVO</th> 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Força explosiva de membros superiores</td>
                  <td>Arremesso de medicineball (2 Kg)</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Força explosiva de membros inferiores</td>
                  <td>Salto horizontal (em distância)</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Agilidade</td>
                  <td>Teste do quadrado (4 metros de lado)</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Velocidade</td>
                  <td>Corrida de 20 metros</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Aptidão cardiorrespiratória</td>
                  <td>Corrida de 6 minutos</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Grid>
      </form>
    )
  }
}

export default Relatorio
