import AOE from '../../apis/AOE';

const CORS_URL = 'https://cors-anywhere.herokuapp.com/';

export const getCivilizations = () => async dispatch =>{
    const response = await AOE.get('/civilizations');
    dispatch({type:'GET_CIVILIZATIONS', payload: response.data.civilizations})
}

export const selectCivilization = (id) => async dispatch =>{
    dispatch({type:'SELECT_CIVILIZATION', payload: id})
}

export const getCivilizationById = (id) => async dispatch =>{
    const response = await AOE.get(`/civilization/${id}`);
    dispatch({type:'GET_CIVILIZATION_BY_ID', payload: response.data})
}

export const getUniqueUnit = (url) => async dispatch =>{
    const response = await AOE.get(CORS_URL+url);
    dispatch({type:'GET_UNIQUE_UNIT', payload: response.data})
}