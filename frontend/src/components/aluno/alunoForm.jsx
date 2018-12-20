import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { FormGroup, ControlLabel, Grid, Radio, Button } from 'react-bootstrap'
import LabelAndInput from '../template/labelAndInput'
import DatePicker from '../template/DatePicker'

import { ReactDatez, ReduxReactDatez } from 'react-datez'
import 'react-datez/dist/css/react-datez.css';

import { init, create, update } from '../../actions/alunos'



class AlunoForm extends Component {

	componentWillMount() {	}
	
	render() {
    	const {  handleSubmit  } = this.props
    	return (
			<form role='form' onSubmit={handleSubmit}>
				<Grid>
					<Field name='nome' component={LabelAndInput} label='Nome' placeholder='Informe o nome' />
					<div>
						<label>
							<Field name="sexo" component="input" type="radio" value="Masculino"/> M
						</label>
						<label>
							<Field name="sexo" component="input" type="radio" value="Feminino"/> F
						</label>
					</div>
					<FormGroup>
						<ControlLabel>Data de Nascimento</ControlLabel>
					</FormGroup>
					<FormGroup>
						<Field name="dataNascimento" inputClassName="form-control" component={ReduxReactDatez} allowPast={true} displayCalendars={1} highlightWeekends locale='Pt-Br' />
					</FormGroup>
					<Field name='nomeMae' component={LabelAndInput} label='Nome da Mãe' placeholder='Informe o nome da mãe' />
					<Field name='email' component={LabelAndInput} label='E-mail' placeholder='Informe o e-mail' />
					<Field name='telefone' component={LabelAndInput} label='Telefone' placeholder='Informe o telefone' />
					<Button type="submit">Enviar</Button>
					<Button type="button" >Salvar</Button>
				</Grid>
			</form>
    	)
  	}
}

AlunoForm = reduxForm({form: 'alunoForm', destroyOnUnmount: false})(AlunoForm)
const selector = formValueSelector('alunoForm')

const mapStateToProps = state => ({ })
const mapDispatchToProps = dispatch => bindActionCreators({ init, create, update }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AlunoForm)
