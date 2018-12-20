// const INITIAL_STATE = { status: "", message: "", data:{ result: [{}]}, list: [{}] }
const INITIAL_STATE = { list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ALUNOS_FETCHED':
            return { ...state, list: action.payload.result }
        default:
            return state
    }
}