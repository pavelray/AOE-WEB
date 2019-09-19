import {combineReducers} from 'redux';
import civilizationReducer from './civilizationReducer';
import unitReducer from './unitReducer';

export default combineReducers({
    civilizations: civilizationReducer,
    unit: unitReducer
})

