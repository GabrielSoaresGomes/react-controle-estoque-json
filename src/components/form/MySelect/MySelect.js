import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
import Select  from 'react-select'
import "./MySelect.css"

const MySelect = ({label, list_options=[], name, id, extra="", extra_link="#"}) => {

    const [options, setOptions] = useState(list_options)
    const [formActive, setFormActive] = useState(false)
    const [newExtraValue, setNewExtraValue] = useState("")

    const $ = require('jquery')

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
                <Select id={id} name={name} className="select" options={select_options} defaultValue={[{"value":"", "label":"---"}]}>
                    
                </Select>
                <span className="extra-select"><a href="#/" className="extra-link" onClick={() => {
                    if (!formActive) {
                        $('.extra-select-fields').show()
                    }
                }} >{extra}</a></span>
                <div className="extra-select-fields">

                    <input type={'text'} placeholder={label} value={newExtraValue} onChange={(e) => {
                        setNewExtraValue(e.target.value)
                    }} />

                    <button onClick={() => {
                        
                    }}>Salvar</button>

                </div>
            </div>
        </>
    )
}

export default MySelect