import './AddProduto.css'
import Container from '../../components/layout/Container/Container'
import H1 from '../../components/layout/Heading/H1/H1'
import Input from '../../components/form/Input/Input'

const AddProduto = () => {
    return(
        <Container>
            <H1 text={"Adicionar Produto"} />
            <form>
                <Input type={"text"} label={"Digite o nome do produto: "} name="produto_name" id={"input_produto"} placeholder="Digite aqui... " />
            </form>
        </Container>
    )
}

export default AddProduto