import { createStore, combineReducers } from "redux";
import CounterReducer from './Reducers/CounterReducer'
import AddCartReducer from './Reducers/AddCartReducer'

const rootReducer = combineReducers({
  CounterReducer,
  AddCartReducer
})

const store = createStore(rootReducer);

export default store;