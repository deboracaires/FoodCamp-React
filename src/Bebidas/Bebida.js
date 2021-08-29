import React from "react";
import TopoProduto from "../Produto/TopoProduto";
import BottomProduto from "../Produto/BottomProduto";

export default function Bebida(props){
    
    const [classesBebida, setClassesBebida] = React.useState(["bebida produto roboto"]);
    const [qtdProduto, setQtdProduto] = React.useState([]);
    const [qtd, setQtd] = React.useState(0);
    
    function selecionarBebida(){
        const selecionado = [...classesBebida, " selecionado"];
        setClassesBebida(selecionado);
        const quantidade = [...qtdProduto,
        <div className="qtd-produto">
            <button className="diminuir-qtd">-</button> 
            {qtd}
            <button className="aumentar-qtd">+</button>
        </div>    
        ];
        setQtdProduto(quantidade); 
    }
    return (
        <li className="bebida-conteiner">
            <div className={classesBebida} onClick={selecionarBebida}>
                <TopoProduto imgProduto = {props.imgProduto} titulo = {props.titulo} descricao = {props.descricao}/>
                <BottomProduto valor = {props.valor} />
                {qtdProduto}
            </div>
        </li>
    );
}