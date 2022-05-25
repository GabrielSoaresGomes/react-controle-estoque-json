import './ButtonSubmit.css'

const ButtonSubmit = ({texto="Salvar", extra_class="", name="", id=""}) => {
    return(
        <>
            <button className={`button_submit ${extra_class} `} type='submit'>{texto}</button>
        </>
    )
}

export default ButtonSubmit