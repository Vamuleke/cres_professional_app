import {createStore,combineReducers, applyMiddleware,compose} from 'redux';
import Cookie from "js-cookie";
import thunk from 'redux-thunk';
import {  userSigninReducer,userUpdateProfil } from './reducers/userReducers';
import { getAgentInfosReducer } from './reducers/agentRecucers';
// const userInfo = Cookie.getJSON("userInfo") || null;
const initialState = {
    userSignin:{
        userInfo:localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")):null
    }
};

const reducer = combineReducers({
    userSignin:userSigninReducer,
    updateProfil:userUpdateProfil,
    agentInfos:getAgentInfosReducer,
})
const composeEnHancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store=createStore(reducer,initialState,composeEnHancer(applyMiddleware(thunk)));
export default store;

