import intialState from '../../const/state';

export default (state=intialState,action)=>{
    switch (action.type){
        case 'GET_CIVILIZATIONS':
            return {...state, civilizations: action.payload};
        case 'GET_CIVILIZATION_BY_ID':
            return {...state, civilization: action.payload};
        case 'SELECT_CIVILIZATION':
            return {...state, id: action.payload};
        default:
            return state;
    }
}