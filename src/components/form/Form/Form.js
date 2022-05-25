import './Form.css'

const Form = ({children, method="GET",extra_class="", id=""}) => {
    return(
        <form className={`form ${extra_class}`} id={id}>
            {children}
        </form>
    )
}

export default Form