import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {TableDataReducer} from "./reducers/TableDataReducer";
import TextFillterReducer from "./reducers/TextFilterReducer";

const rootReducer = combineReducers({
    tableData : TableDataReducer,
    textFilter : TextFillterReducer
})
const store = createStore(rootReducer,{},applyMiddleware(thunk))
export default store;