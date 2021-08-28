import React from "react";
export default function Prato(props){
    
    const [classesPrato, setClassesPrato] = React.useState(["prato produto roboto"]);
    
    
    function selecionarPrato(){
        const selecionado = [...classesPrato, " selecionado"];
        setClassesPrato(selecionado);
        
    }

    
    return (
        <li class="prato-conteiner">
            <button class={classesPrato} onClick={selecionarPrato}>
                <div class="imagem-produto">
                    <img src={props.imgPrato}/>
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