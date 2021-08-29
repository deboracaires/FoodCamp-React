import React from "react";

export default function Bebida(props){
    
    const [classesBebida, setClassesBebida] = React.useState(["bebida produto roboto"]);
    const [qtdProduto, setQtdProduto] = React.useState([]);
    
    
    function selecionarBebida(){
        const selecionado = [...classesBebida, " selecionado"];
        setClassesBebida(selecionado);
        const quantidade = [...qtdProduto, <p><strong className="diminuir-qtd">-       </strong> 1 <strong className="aumentar-qtd">        +</strong></p>];
        setQtdProduto(quantidade); 
    }
    return (
        <li className="bebida-conteiner">
                <button className={classesBebida} onClick={selecionarBebida}>
                <div className="imagem-produto">
                    <img src={props.imgBebida}/>
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