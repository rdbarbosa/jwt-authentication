import React from 'react'
import { FormGroup, ControlLabel } from 'react-bootstrap'
import { ReactDatez, ReduxReactDatez } from 'react-datez'
import 'react-datez/dist/css/react-datez.css';

export default props => (
    <FormGroup>
        <ControlLabel>{props.label}</ControlLabel>
        <ReactDatez {...props.input} name={props.name} />
    </FormGroup>
)