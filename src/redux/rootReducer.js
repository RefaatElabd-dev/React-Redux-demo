import { combineReducers } from "redux";

import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from './IceCream/iceCreamReducer';

const rootReducer = combineReducers({
    Cake: cakeReducer,
    IceCream: iceCreamReducer
})

export default rootReducer
