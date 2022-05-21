import { Link } from 'react-router-dom'
import Container from '../../components/layout/Container/Container'
import H1 from '../../components/layout/Heading/H1/H1'

import Table from '../../components/Table/Table'

import './Produtos.css'

const Produtos = () => {
    return (
        <Container>
            <H1 text={"Produtos"} />
            <div className='div_link'><Link className='link_add_produto' to={"/produtos/add"}>Adicionar Produto</Link></div>
            <Table headList={["id", "nome", "preço", ]} tableValues={[[1,"Anidog",'64.90'],[2,"M13","105.00"]]} />
        </Container>
    )
}

export default Produtos