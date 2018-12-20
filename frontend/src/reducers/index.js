import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import alunoReducer from './alunoReducer'

export default combineReducers({
    form: formReducer,
    errors: errorReducer,
    auth: authReducer,
    aluno: alunoReducer
});

