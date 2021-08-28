import React from "react";

export default function Sobremesa (props){
    
    const [classesSobremesa, setClassesSobremesa] = React.useState(["sobremesa produto roboto"]);
    
    
    function selecionarSobremesa(){
        const selecionado = [...classesSobremesa, " selecionado"];
        setClassesSobremesa(selecionado);
        
    }
    return (
        <li class="sobremesa-conteiner">
                <button class={classesSobremesa} onClick={selecionarSobremesa}>
                <div class="imagem-produto">
                    <img src={props.imgSobremesa}/>
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