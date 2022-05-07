import React, {useState} from 'react';
import MyInput from "../../UI/MyInput";
import './search.css'
import {useDispatch, useSelector} from "react-redux";
import search from './../../images/search.png'
import { changeText } from './../../redux/actionCreators/TextFilter'

const Search = () => {

    const { text } = useSelector( state => state.textFilter)
    // const [ value,setValue ] = useState(text ? text : "")
    const dispatch = useDispatch()
    return (
        <div className="wrapperSearch">
            <MyInput type ="text" value = {text} onChange ={ (e) => dispatch(changeText(e.currentTarget.value)) } placeholder = "Поиск"/>
            <span className="material-symbols-outlined">search</span>
        </div>
    )
}
export default Search;