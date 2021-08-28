import React from "react";

export default function Bebida(props){
    
    const [classesBebida, setClassesBebida] = React.useState(["bebida produto roboto"]);
    
    
    function selecionarBebida(){
        const selecionado = [...classesBebida, " selecionado"];
        setClassesBebida(selecionado);
        
    }
    return (
        <li class="bebida-conteiner">
                <button class={classesBebida} onClick={selecionarBebida}>
                <div class="imagem-produto">
                    <img src={props.imgBebida}/>
                </div>
                <p class="titulo-produto">
                    {props.titulo}
                </p>
                <p class="descricao-produto">
                    {props.descricao}
                </p>
                <p class="valor-produto">
                    {props.valor}
                </p>
                </button>
        </li>
    );
}