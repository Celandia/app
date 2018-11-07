import {createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer/index";//与reducer建立联系

export default createStore(reducer,applyMiddleware(thunk));
