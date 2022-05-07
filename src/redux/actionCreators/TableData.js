import {
    TABLE_DATA_CHANGE_PAGE,
    TABLE_DATA_ERROR,
    TABLE_DATA_FETCHING,
    TABLE_DATA_SUCCESS
} from "../Actions/TableDataActions";
import axios from "axios";

export const getTableData = () => async (dispatch,getState) => {
    try {
        dispatch({type: TABLE_DATA_FETCHING})
        const data = await axios.get("https://jsonplaceholder.typicode.com/posts",{
            params : {
                _limit : 10,
                _page : getState().tableData.currentPage
            }
        });
        console.log(data)
        dispatch({type: TABLE_DATA_SUCCESS, payload : {
                data : data.data,
                totalUsersCount : data.headers["x-total-count"]
            }})
    } catch (e) {
        dispatch({type: TABLE_DATA_ERROR, payload: e.message})
    }
}
export const changePage = (page) =>{
    return { type : TABLE_DATA_CHANGE_PAGE, payload : page}
}