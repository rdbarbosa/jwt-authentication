import React from 'react'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

export default props => (
    <FormGroup controlId="formBasicText">
        <ControlLabel>{props.label}</ControlLabel>
        <FormControl {...props.input} type={props.type} placeholder={props.placeholder} />
    </FormGroup>
)