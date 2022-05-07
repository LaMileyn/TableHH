import React, {useMemo, useState} from 'react';
import './Table.css'
import {useSelector} from "react-redux";
import Preloder from "../../UI/Preloder";

const Table = () => {
    const sortTypes = {"ID": false, "Заголовок": false, "Описание": false}
    const [tableSortType, setTableSortType] = useState(null)
    const {data, fetching} = useSelector(state => state.tableData);
    const {text} = useSelector(state => state.textFilter)

    const filteredTableData = useMemo(() => {
        if (!text.length) return data
        return data.filter(el => el.title.includes(text) || el.body.includes(text))
    }, [text, data])

    const handleClick = (event) => {
        const curr = event.target.innerText.split("\n")[0]
        setTableSortType(curr)
    }
    const filteredDataBytable = useMemo(() => {
        if (!tableSortType) return filteredTableData
        switch (tableSortType) {
            case "Заголовок":
                return filteredTableData.sort((x, y) => x.title.localeCompare(y.title))
            case "Описание":
                return filteredTableData.sort((x, y) => x.body.localeCompare(y.body))
            case "ID":
                return filteredTableData.sort((x, y) => y.id - x.id)
            default:
                return filteredTableData
        }
    }, [tableSortType, filteredTableData, sortTypes])


    if (fetching) return <Preloder/>
    return (
        <div className="tableWrapper">
            <table>
                <thead>
                <tr align="center">
                    <th onClick={handleClick} style={{width: "5%"}}><span>ID <span
                        className="material-symbols-outlined">expand_more</span></span></th>
                    <th onClick={handleClick} style={{width: "50%"}}><span>Заголовок  <span
                        className="material-symbols-outlined">expand_more</span></span></th>
                    <th onClick={handleClick} style={{width: "40%"}}><span>Описание  <span
                        className="material-symbols-outlined">expand_more</span></span></th>
                </tr>
                </thead>
                <tbody>
                {
                    filteredDataBytable.map(tableElement => {
                        return (
                            <tr key={tableElement.id}>
                                <td>{tableElement.id}</td>
                                <td>{tableElement.title}</td>
                                <td>{tableElement.body}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            {!filteredTableData.length && (
                <div className="nothing-mathed">Ничего не найдено.....</div>
            )}
        </div>
    )
}
export default Table;