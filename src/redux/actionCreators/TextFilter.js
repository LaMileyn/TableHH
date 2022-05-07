import {CHANGE_TEXT} from "../Actions/TextFilterActions";

export const changeText = (text) => {
    return { type : CHANGE_TEXT, payload : text}
}