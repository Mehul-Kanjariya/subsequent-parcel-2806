import { reducer as menReducer } from "./Mens/reducer";
import { reducer as womenReducer } from "./Women/reducer";
import { reducer as toyReducer } from "./Toy/reducer";
import { reducer as homeReducer } from "./Home&App/reducer";
import { reducer as healthReducer } from "./Health&Beauty/reducer";
import { reducer as adminReducer } from "./Admin/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    men:menReducer,
    women:womenReducer,
    toy:toyReducer,
    home:homeReducer,
    health:healthReducer,
    admin:adminReducer
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));