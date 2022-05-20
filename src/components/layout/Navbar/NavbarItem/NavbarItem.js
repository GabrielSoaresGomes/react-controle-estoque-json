import { Link } from 'react-router-dom'

import './NavbarItem.css'

const NavbarItem = ({texto, destino}) => {
    return (
        <li className='navbar_item'><Link to={destino}>{texto}</Link></li>
    )
}

export default NavbarItem