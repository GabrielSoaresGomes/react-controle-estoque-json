import './AddProduto.css'
import Container from '../../components/layout/Container/Container'
import H1 from '../../components/layout/Heading/H1/H1'
import Input from '../../components/form/Input/Input'
import Select from '../../components/form/MySelect/MySelect'
import Form from '../../components/form/Form/Form'

import {BsPlusCircle} from 'react-icons/bs'
//import { Link } from 'react-router-dom'

const AddProduto = () => {
    return(
        <Container>
            <div className='head_add_produto'>
                <H1 text={"Adicionar Produto"} />
                {/*<Link to={'#'}>Adicionar novo campo</Link>*/}
            </div>
            <Form>
                <Input type={"text"} label={"Digite o nome do produto: "} name="produto_name" id={"input_produto"} placeholder="Digite aqui... " />
                <Select label={"Categoria: "} name={"select_categoria"} id={"select_categoria"} options extra={<BsPlusCircle />} extra_link="#" />
            </Form>
        </Container>
    )
}

export default AddProduto