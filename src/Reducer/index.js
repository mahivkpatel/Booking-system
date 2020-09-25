import { combineReducers } from 'redux'
import { authentication } from './loginReducer';
import { registration } from './RegistrationReducer';

const rootReducer = combineReducers({
    authentication,
    registration
});

export default rootReducer;