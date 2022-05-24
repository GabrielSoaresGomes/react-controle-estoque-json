// noinspection JSVoidFunctionReturnValueUsed

import './AddProduto.css'
import Container from '../../components/layout/Container/Container'
import H1 from '../../components/layout/Heading/H1/H1'
import Input from '../../components/form/Input/Input'
import MySelect from '../../components/form/MySelect/MySelect'
import Form from '../../components/form/Form/Form'
import {getDatabase, ref, child, get} from 'firebase/database'
import {useEffect, useState} from "react";

import $ from 'jquery'

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

    $('#checkbox_varejo').on("change", function (e) { 
        if ($(this).prop("checked")) {
            $(this).val(true)
            $(".input_label_preco_varejo").show()
        }else{
            $(this).val(false)
            $(".input_label_preco_varejo").hide()
            $("#input_preco_varejo").val("1")
        }
        
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
                <Input extra_class='hidden' type={"text"} label="Insira a unidade do produto ex:Kg, un, L, ml, saco, etc: "
                    name={"unidade_produto"} id="input_unidade" placeholder='Kg, Un, L, ml, Saco, etc...' />
                <Input type={"checkbox"} label="Seu produto tem à varejo? " name={"produto_varejo"} id="checkbox_varejo" />
                <Input type={"number"} label="Insira o preço do produto: " name={"preco_produto"} id="input_preco" />
                <Input extra_class='hidden input_label_preco_varejo' type={"number"} label="Insira o preço à varejo do produto: " name={"preco_varejo"} id="input_preco_varejo" />
            </Form>
        </Container>
    )
}

export default AddProduto