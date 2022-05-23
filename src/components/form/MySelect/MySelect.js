import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"

import Select  from 'react-select'
import NewCategory from "../NewCategory/NewCategory";

import "./MySelect.css"

const MySelect = ({label, list_options, name, id, extra="", extra_link="#"}) => {
    if (!list_options) {list_options=[]}

    const [options, setOptions] = useState(list_options)

    useEffect(() => {
        setOptions(list_options)
    }, [list_options])

    let select_options = [{"value":"", "label":"---"}]
    options.forEach((item) => {
        select_options.push({'value':item, "label": item.charAt(0).toUpperCase() + item.slice(1)})
    })



    return(
        <>
            <label htmlFor={id}>{label}</label>
            <div className='div_select'>
                <Select id={id} name={name} className="select" options={select_options} defaultValue={[{"value": "", "label": "---"}]}></Select>
                <NewCategory />
            </div>
        </>
    )
}

export default MySelect