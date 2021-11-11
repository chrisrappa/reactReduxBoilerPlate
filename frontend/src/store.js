import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { itemListReducer, itemDetailsReducer, itemSaveReducer} from './reducers/itemReducers';


const initialState = {};

const reducer = combineReducers({
    itemList: itemListReducer, 
    itemDetails: itemDetailsReducer,
    itemSave: itemSaveReducer,
})



const composeEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true})) || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;