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
import ButtonSubmit from '../../components/form/ButtonSubmit/ButtonSubmit'

const AddProduto = () => {
    const db = getDatabase()

    const [categoriesOptions, setCategoriesOptions] = useState()
    const [produtos, setProdutos] =useState([])

    useEffect(() => {
        const produtosRef = ref(getDatabase());
        get(child(produtosRef, 'produtos/')).then((snapshot) => {
            if (snapshot.exists()) {
                let products = snapshot.val()
                setProdutos(products)
            } else {
                console.log("No data available for products");
            }
        }).catch((error) => {
            console.error(error);
        });
    })

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
            $("#input_preco_varejo").val("0")
        }
        
    })

    useEffect(() => {
        $('#form_produto').on("submit", function(e) {
            let produto_object = {}
            produto_object["nome"] = $("#input_produto").val()
            produto_object["categoria"] = $('#select_categoria input[name="select_categoria"]').val()
            produto_object["unidade"] = $("#input_unidade").val()
            produto_object["custo"] = $("#input_custo").val()
            produto_object["varejo"] = $("#checkbox_varejo").val()
            produto_object["preco"] = $("#input_preco").val()
            produto_object["preco_varejo"] = $("#input_preco_varejo").val()
            e.preventDefault()
            console.log(produto_object)
    
            
        })
    })

    return(
        <Container>
            <div className='head_add_produto'>
                <H1 text={"Adicionar Produto"} />
                {/*<Link to={'#'}>Adicionar novo campo</Link>*/}
            </div>
            <Form method='POST' id="form_produto">
                <Input type={"text"} label={"Digite o nome do produto: "} name="produto_name" id={"input_produto"} placeholder="Digite aqui... " />

                <MySelect label={"Categoria: "} name={"select_categoria"} id={"select_categoria"} list_options={categoriesOptions} extra_link="#" />

                <Input type={"text"} label="Insira a unidade de controle do produto "
                    name={"unidade_produto"} id="input_unidade" placeholder='Kg, Un, L, ml, Saco, etc...' />

                <Input type={"number"} label="Insira o valor do custo do produto:" name={"custo_produto"} id="input_custo" />

                <Input type={"checkbox"} label="Seu produto tem à varejo? " name={"produto_varejo"} id="checkbox_varejo" />

                <Input type={"number"} label="Insira o preço do produto: " name={"preco_produto"} id="input_preco" />

                <Input extra_class='hidden input_label_preco_varejo' type={"number"} label="Insira o preço à varejo do produto: " name={"preco_varejo"} id="input_preco_varejo" />

                <ButtonSubmit texto={"Salvar produto"} name="salvar_produto" id='produto_submit' />
            </Form>
        </Container>
    )
}

export default AddProduto