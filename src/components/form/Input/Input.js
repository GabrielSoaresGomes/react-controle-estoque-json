import { useState } from 'react'
import './Input.css'

const Input = ({type, label, name, id, placeholder="", value=""}) => {

    const [val, setVal] = useState(value)

    return (
        <>
            <label htmlFor={`input_${id}`}>{label}</label>
            <input type={type} name={name} id={id} placeholder={null} value={val} onChange={(e) => {setVal(e.target.value)}}  />
        </>
    )
}

export default Input