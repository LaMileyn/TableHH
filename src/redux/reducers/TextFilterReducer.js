import {CHANGE_TEXT} from "../Actions/TextFilterActions";

const initialState = {
    text : ""
}

const TextFillterReducer = (state = initialState, action) =>{
    const { type, payload } = action
    switch ( type ){
        case CHANGE_TEXT:
            return { ...state, text : payload };
        default:
            return state;
    }
}
export default TextFillterReducer;