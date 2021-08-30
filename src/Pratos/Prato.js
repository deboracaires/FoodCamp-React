import TopoProduto from "../Produto/TopoProduto";
import BottomProduto from "../Produto/BottomProduto";
import QtdProdutos from "../Produto/QtdProdutos";

import React from "react";

export default function Prato(props){
    
    const [classesPrato, setClassesPrato] = React.useState(["prato produto roboto"]);
    const [alteraProps, setNovaProps] = React.useState(props);
    const [textoQtd, setTextoQtd] = React.useState([]);
    
    function selecionarPrato(){
        if(alteraProps.selecionado === false){
            const selecionado = [...classesPrato, " selecionado"];
            setClassesPrato(selecionado);
            const novaProps = {...alteraProps, selecionado: true};
            setNovaProps(novaProps);
            setTextoQtd([<QtdProdutos />]);
        }else{
            

        }
        
    }

    
    

    
    return (
        <li className="prato-conteiner">
            <div className={classesPrato} onClick={selecionarPrato}>
                <TopoProduto imgProduto = {props.imgProduto} titulo = {props.titulo} descricao = {props.descricao}/>
                <BottomProduto valor = {props.valor} />
                {textoQtd}
            </div>
         </li>
    );
}