// noinspection JSVoidFunctionReturnValueUsed

import './AddProduto.css'
import Container from '../../components/layout/Container/Container'
import H1 from '../../components/layout/Heading/H1/H1'
import Input from '../../components/form/Input/Input'
import MySelect from '../../components/form/MySelect/MySelect'
import Form from '../../components/form/Form/Form'
import {getDatabase, ref, child, get} from 'firebase/database'
import {useEffect, useState} from "react";



const AddProduto = () => {
    const [categoriesOptions, setCategoriesOptions] = useState()

    useEffect(() => {
        const categoriasRef = ref(getDatabase());
        get(child(categoriasRef, 'categorias/')).then((snapshot) => {
            if (snapshot.exists()) {
                let categorias = snapshot.val()
                setCategoriesOptions(categorias)
            } else {
                console.log("No data available for categorias");
            }
        }).catch((error) => {
            console.error(error);
        });
    })
    return(
        <Container>
            <div className='head_add_produto'>
                <H1 text={"Adicionar Produto"} />
                {/*<Link to={'#'}>Adicionar novo campo</Link>*/}
            </div>
            <Form>
                <Input type={"text"} label={"Digite o nome do produto: "} name="produto_name" id={"input_produto"} placeholder="Digite aqui... " />
                <MySelect label={"Categoria: "} name={"select_categoria"} id={"select_categoria"} list_options={categoriesOptions} extra_link="#" />
            </Form>
        </Container>
    )
}

export default AddProduto