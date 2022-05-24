import './NewCategory.css'
import $ from "jquery";
import {useEffect, useState} from "react";

import {child, get, getDatabase, ref, set} from 'firebase/database'

import {BsPlusCircle} from 'react-icons/bs'

const NewCategory = () => {

    const db = getDatabase()

    const [formActive, setFormActive] = useState(false)
    const [newExtraValue, setNewExtraValue] = useState("")
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const categoriasRef = ref(getDatabase());
        get(child(categoriasRef, 'categorias/')).then((snapshot) => {
            if (snapshot.exists()) {
                let categorias = snapshot.val()
                setCategories(categorias)
            } else {
                console.log("No data available for categorias");
            }
        }).catch((error) => {
            console.error(error);
        });
    })

    return(
        <div>
            <span className="extra-select"><a href="#" className="extra-link" onClick={() => {
                if (!formActive) {
                    $('.extra-select-fields').show()
                    $('.extra-select').hide()
                }
            }}> <BsPlusCircle/> </a></span>
            <div className="extra-select-fields">

                <input className="new_category_input" type={'text'} placeholder={"Nova categoria"} value={newExtraValue} onChange={(e) => {
                    setNewExtraValue(e.target.value)
                }} />

                <button onClick={() => {
                    let category_val = $('.new_category_input').val()
                    if (category_val !== undefined && category_val !== "" && category_val !== null ) {
                        setFormActive(false)
                        let newCategory = $('.new_category_input').val()
                        let newCategories = categories
                        newCategories.push(newCategory)
                        setCategories(newCategories)
                        set(ref(db, 'categorias'), categories)
                        $('.new_category_input').val("")
                        $('.extra-select-fields').hide()
                        $('.extra-select').show()

                    }
                }} type={"button"}>Salvar</button>

            </div>
        </div>
    )
}

export default NewCategory