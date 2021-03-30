import { createStore, combineReducers, applyMiddleware } from "redux";
import CounterReducer from "./Reducers/CounterReducer";
import AddCartReducer from "./Reducers/AddCartReducer";

const rootReducer = combineReducers({
  CounterReducer,
  AddCartReducer,
});

const customMiddleware = store => next => action => {

    const actionModif = {
        type: "ADDCART",
        payload: 789
    }

   next(actionModif)

}


const store = createStore(rootReducer, applyMiddleware(customMiddleware));

export default store;
