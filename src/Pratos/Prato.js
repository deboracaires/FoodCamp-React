import TopoProduto from "../Produto/TopoProduto";
import BottomProduto from "../Produto/BottomProduto";
import React from "react";

export default function Prato(props){
    
    const [classesPrato, setClassesPrato] = React.useState(["prato produto roboto"]);
    const [qtdProduto, setQtdProduto] = React.useState([]);
    const [qtd, setQtd] = React.useState(1);
    
    

    
    function selecionarPrato(){
        const selecionador = [...classesPrato, " selecionado"];
        setClassesPrato(selecionador);
        
        addQtd(); 
    }

    function addQtd(){
        const quantidade = [...qtdProduto, 
            <div className="qtd-produto">
                <button className="diminuir-qtd" onClick={()=> setQtd(qtd-1)}>-</button> 
                {qtd}
                <button className="aumentar-qtd" onClick={()=> setQtd(qtd-1)}>+</button>
            </div>];
        setQtdProduto(quantidade);
    }
    

    
    return (
        <li className="prato-conteiner">
            <div className={classesPrato} onClick={selecionarPrato}>
                <TopoProduto imgProduto = {props.imgProduto} titulo = {props.titulo} descricao = {props.descricao}/>
                <BottomProduto valor = {props.valor} />
                {qtdProduto}
            </div>
         </li>
    );
}