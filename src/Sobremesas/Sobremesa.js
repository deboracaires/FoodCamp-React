import React from "react";
import TopoProduto from "../Produto/TopoProduto";
import BottomProduto from "../Produto/BottomProduto";

export default function Sobremesa (props){
    
    const [classesSobremesa, setClassesSobremesa] = React.useState(["sobremesa produto roboto"]);
    const [qtdProduto, setQtdProduto] = React.useState([]);
    const [qtd, setQtd] = React.useState(0);
    
    function selecionarSobremesa(){
        const selecionado = [...classesSobremesa, " selecionado"];
        setClassesSobremesa(selecionado);
        setQtd(qtd+1);
        adicionarContador();
    }

    function adicionarContador(){
        const quantidade = [...qtdProduto, 
        <div className="qtd-produto">
            <button className="diminuir-qtd" onClick = {() => setQtd(qtd-1)}>-</button> 
            {qtd}
            <button className="aumentar-qtd">+</button>
        </div>
        ];
        setQtdProduto(quantidade);  
    }
    
    return (
        <li className = "sobremesa-conteiner">
            <div className = {classesSobremesa} onClick={selecionarSobremesa}>
                <TopoProduto imgProduto = {props.imgProduto} titulo = {props.titulo} descricao = {props.descricao}/>
                <BottomProduto valor = {props.valor} />
                {qtdProduto}
            </div>
        </li>
    );
}
