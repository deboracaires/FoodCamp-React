import TopoProduto from "./TopoProduto";
import BottomProduto from "./BottomProduto";
import QtdProdutos from "./QtdProdutos";

import React from "react";

let keySelecionado = -1;
export default function Produto(props){
    
    const [classesProduto, setClassesProduto] = React.useState(["produto roboto"]);
    const [alteraProps, setNovaProps] = React.useState(props);
    const [textoQtd, setTextoQtd] = React.useState([]);
    
    
    

    function selecionarProduto(){
        
        if(alteraProps.selecionado === false){
            const selecionador = [...classesProduto, " selecionado"];
            setClassesProduto(selecionador);
            
            alterarProps();   

            setTextoQtd([<QtdProdutos />]);
            keySelecionado = props.id;
            console.log(keySelecionado);
        }else{   
            
            
        }
        
    }
    function alterarProps(){
        
        const novaProps = {...alteraProps, selecionado: true};
        setNovaProps(novaProps);
    }

    return (
        <li>
            <div className={classesProduto} onClick={selecionarProduto}>
                <TopoProduto imgProduto = {props.imgProduto} titulo = {props.titulo} descricao = {props.descricao}/>
                <BottomProduto valor = {props.valor} />
                {textoQtd}
            </div>
         </li>
    );
}