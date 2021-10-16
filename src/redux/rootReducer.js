import { combineReducers } from "redux";

import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from './IceCream/iceCreamReducer';
import usersReducer from "./users/userReducer";

const rootReducer = combineReducers({
    Cake: cakeReducer,
    IceCream: iceCreamReducer,
    User: usersReducer
})

export default rootReducer
