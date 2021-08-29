import React from "react";
export default function Prato(props){
    
    const [classesPrato, setClassesPrato] = React.useState(["prato produto roboto"]);
    const [qtdProduto, setQtdProduto] = React.useState([]);
    
    function selecionarPrato(){
        const selecionado = [...classesPrato, " selecionado"];
        setClassesPrato(selecionado);
        const quantidade = [...qtdProduto, <p><strong className="diminuir-qtd">-       </strong> 1 <strong className="aumentar-qtd">        +</strong></p>];
        setQtdProduto(quantidade); 
    }

    
    return (
        <li className="prato-conteiner">
            <button className={classesPrato} onClick={selecionarPrato}>
                <div className="imagem-produto">
                    <img src={props.imgPrato}/>
                </div>
                <p className="titulo-produto">
                    {props.titulo}
                </p>
                <p className="descricao-produto">
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