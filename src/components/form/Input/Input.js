import { useState } from 'react'
import './Input.css'

const Input = ({type, label, name, id, placeholder="", value=""}) => {

    const [val, setVal] = useState(value)

    return (
        <>
            <label className='input_label' htmlFor={`input_${id}`}>{label}</label>
            <input className='input' type={type} name={name} id={id} placeholder={placeholder} value={val} onChange={(e) => {setVal(e.target.value)}}  />
        </>
    )
}

export default Input