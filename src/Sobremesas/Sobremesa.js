import React from "react";

export default function Sobremesa (props){
    
    const [classesSobremesa, setClassesSobremesa] = React.useState(["sobremesa produto roboto"]);
    const [qtdProduto, setQtdProduto] = React.useState([]);
    
    function selecionarSobremesa(){
        const selecionado = [...classesSobremesa, " selecionado"];
        setClassesSobremesa(selecionado);
        const quantidade = [...qtdProduto, <p><strong className="diminuir-qtd">-       </strong> 1 <strong className="aumentar-qtd">        +</strong></p>];
        setQtdProduto(quantidade);
        
    }
    return (
        <li className = "sobremesa-conteiner">
                <button className = {classesSobremesa} onClick={selecionarSobremesa}>
                <div className = "imagem-produto">
                    <img src={props.imgSobremesa}/>
                </div>
                <p className = "titulo-produto">
                    {props.titulo}
                </p>
                <p className = "descricao-produto">
                    {props.descricao}
                </p>
                <div className = "bottom-produto">
                    <p className="valor-produto">
                        {props.valor}
                    </p>
                    {qtdProduto}
                    
                </div>
                </button>
        </li>
    );
}