import axios from 'axios'
// import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

const BASE_URL = 'http://localhost:5000/api'
const INITIAL_VALUES = {  }

export const getList = () => dispatch =>  {
    axios.get(`${BASE_URL}/pessoa`).then((res) => {
        console.log(res)
        dispatch({
            type: 'ALUNOS_FETCHED',
            payload: res.data
        });
    })
}

export const create = (values) => {
    console.log(values)
    submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

export function save(values){
    const id = values._id ? values._id : ''
    if (id) {
        return submit(values, 'put')
    } else {
        return submit(values, 'post')
    }
}

export function submit(values, method){
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/pessoa/${id}`, values)
            .then(resp => {
                dispatch([
                    resetForm('alunoForm'),
                    //dispatch(console.log('Foi!'))
                ])
            })
            .catch(e => {
                console.log('Erro', e)
            })
    }
}

export function showUpdate(values){
    return [
        
        initialize('alunoForm', values)
    ]
}

export function init(){
    return [
        initialize('alunoForm', INITIAL_VALUES)
    ]
}

export const clear = () => {
    return [{ type: 'ALUNOS_CLEAR' }]
}

export const novo = () => {
    return [{ type: 'ALUNOS_CLEAR' }]
}