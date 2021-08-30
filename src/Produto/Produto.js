import TopoProduto from "./TopoProduto";
import BottomProduto from "./BottomProduto";
import QtdProdutos from "./QtdProdutos";

import React from "react";


export default function Produto(props){
    
    const [qtd, setQtd] = React.useState(0);
    
    const {
        selecionarProduto, 
        id, 
        imgProduto, 
        descricao,  
        titulo,
        valor
    } = props;
    
    function diminuirQtd(){
        setQtd(qtd-1);
        console.log("qtd:"+qtd);
        
    }
    function aumentarQtd(){
        setQtd(qtd + 1);
        console.log("qtd:"+qtd);
    }
    

    return (
        <li>
            <div className={props.children} onClick={()=> selecionarProduto(id)}>
                <TopoProduto imgProduto = {imgProduto} titulo = {titulo} descricao = {descricao}/>
                <BottomProduto valor = {valor} />
                <QtdProdutos diminuirQtd = {diminuirQtd} aumentarQtd = {aumentarQtd}>{qtd}</QtdProdutos> 
            </div>
         </li>
    );
}