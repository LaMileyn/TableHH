import {
    TABLE_DATA_CHANGE_PAGE,
    TABLE_DATA_ERROR,
    TABLE_DATA_FETCHING,
    TABLE_DATA_SUCCESS
} from "../Actions/TableDataActions";

const initialState = {
    data : [],
    fetching : false,
    error : null,
    currentPage : 1,
    totalUsersCount : null
}
export const TableDataReducer = ( state = initialState, action ) =>{
    const { type, payload } = action;
    switch ( type ){
        case TABLE_DATA_FETCHING:
            return { ...state, fetching: true};
        case TABLE_DATA_SUCCESS:
            return { ...state, fetching: false, data : payload.data, totalUsersCount: payload.totalUsersCount};
        case TABLE_DATA_ERROR:
            return { ...state, fetching: false, error: payload};
        case TABLE_DATA_CHANGE_PAGE:
            return { ...state, currentPage: payload}
        default:
            return state
    }
}