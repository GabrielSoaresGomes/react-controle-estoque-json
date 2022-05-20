import Container from "../../components/layout/Container/Container";
import H1 from "../../components/layout/Heading/H1/H1";

import './Home.css'

const Home = () => {
    return(
        <Container>
            <H1 text={"Home"} />
            <p>Aqui mais para frente poderá exibir algumas informações úteis como lucro, venda, ultimas atualizações, etc!</p>
        </Container>
    )
}

export default Home