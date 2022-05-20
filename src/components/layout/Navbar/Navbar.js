import './Navbar.css'
import NavbarItem from './NavbarItem/NavbarItem'
import NavbarLogo from './NavbarLogo/NavbarLogo'

const Navbar = () => {
    return (
        <nav className='navbar'>
                <NavbarLogo destino='/' />
                <NavbarItem destino="/" texto={"Home"} />
                <NavbarItem destino="/produtos" texto={"Produtos"} />
                <NavbarItem destino="#" texto={"Clientes"} />
        </nav>
    )
}

export default Navbar