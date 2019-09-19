export default (state=[],action)=>{
    switch (action.type){
        case 'GET_UNIQUE_UNIT':
            return action.payload;
        default:
            return state;
    }
}