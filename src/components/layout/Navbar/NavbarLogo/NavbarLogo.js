import { Link } from 'react-router-dom'
import './NavbarLogo.css'

const NavbarLogo = ({imagem = "", destino="#"}) => {
    return(//Subistituir por imagem depois
        <Link to={destino}>
            <div className='logo'> 

            </div>
        </Link>
    )
}

export default NavbarLogo