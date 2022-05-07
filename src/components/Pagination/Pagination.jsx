import React, {useEffect, useMemo, useState} from 'react';
import './Pagination.css'
import {useDispatch, useSelector} from "react-redux";
import {changePage, getTableData} from "../../redux/actionCreators/TableData";

const Pagination = () => {

    const [firstPage, setFirstPage] = useState(1)
    const [pagePortionSize, setPagePortionSize] = useState(5)
    // const [currentPortionIndex, setCurrentPortionIndex] = useState(0)
    const dispatch = useDispatch()
    const {currentPage, fetching, totalUsersCount} = useSelector(state => state.tableData);
    const totalPagesCount = useMemo(() => {
        return Math.ceil(totalUsersCount / 10)
    }, [totalUsersCount])
    const changeThePage = (page) => {
        dispatch(changePage(page))
        dispatch(getTableData())
    }
    const setPreviousPage = () => {
        if (currentPage === firstPage + 1) {
            setFirstPage(prev => Math.max( prev - 2, 1))
        }
        dispatch(changePage(currentPage - 1))
        dispatch(getTableData())
    }
    const setNextPage = () => {
        if (currentPage === firstPage + pagePortionSize - 2) {
            setFirstPage(prev => prev + 2)
        }
        dispatch(changePage(currentPage + 1))
        dispatch(getTableData())
    }
    const pages = useMemo(() => {
        let arr = []
        for (let i = firstPage; i < Math.min( firstPage + pagePortionSize, totalPagesCount + 1); i++) {
            arr.push(i)
        }
        return arr

    }, [currentPage, totalPagesCount])
    if (fetching) return;
    return (
        <div className="paginator-wrapper">
            <div className="paginator-btn">
                <button disabled={currentPage === 1} onClick={setPreviousPage}>Назад</button>
            </div>
            <div className="paginatorPages">
                {
                    pages?.map(el => (
                        <span onClick={() => changeThePage(el)} className={el === currentPage && "active"}
                              key={el}>{el}</span>
                    ))
                }
            </div>
            <div className="paginator-btn">
                <button disabled={currentPage + 1 > totalPagesCount} onClick={setNextPage}>Далее</button>
            </div>
        </div>
    )
}

export default Pagination;