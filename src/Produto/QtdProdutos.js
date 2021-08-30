import React from "react";

export default function QtdProdutos(props){
    
    const {
        diminuirQtd, 
        aumentarQtd
    } = props;

    
    return (
        <div className="qtd-produto">
            <button className="diminuir-qtd" onClick={diminuirQtd}>-</button> 
            {props.children}
            <button className="aumentar-qtd" onClick={aumentarQtd}>+</button>
        </div>
    );
}