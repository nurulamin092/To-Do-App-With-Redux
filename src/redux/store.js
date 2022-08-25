import { createStore } from 'redux';
import rootReducer from './rootReducer';
import second, { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools());

export default store;