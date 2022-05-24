import { useState } from 'react'
import './Input.css'

const Input = ({type, label, name, id, placeholder="", value="", extra_class="", extra_funcao=""}) => {

    const [val, setVal] = useState(value)
    return (
        <>
          { type !== "checkbox" ?
        
        <>
            <label className={`input_label ${extra_class} `} htmlFor={`${id}`}>{label}</label>
            <input className={`input ${extra_class}`} type={type} name={name} id={id} placeholder={placeholder} value={val} onChange={(e) => {setVal(e.target.value)}}  />
        </>
        :
        <div className='div_checkbox'>
            <label className={`input_label ${extra_class}`} htmlFor={`${id}`}>{label}</label>
            <input className={`input ${extra_class}`} type={type} name={name} id={id} placeholder={placeholder} value={val} onChange={(e) => {setVal(e.target.value)}}  />
        </div>
        }
        </>
    )
}

export default Input