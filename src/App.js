import Search from "./components/Search/Search";
import Table from "./components/Table/Table";
import Pagination from "./components/Pagination/Pagination";
import {useEffect, useState} from "react";
import {getTableData} from "./redux/actionCreators/TableData";
import {useDispatch, useSelector} from "react-redux";

function App() {

    const { data } = useSelector( state => state.tableData )
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTableData())
    },[])


    return (
        <div className="App">
            <Search/>
            <Table/>
            <Pagination/>
        </div>
    );
}

export default App;
