import React from "react";

export default function QtdProdutos(){
    
    const [qtd, setQtd] = React.useState(1);

    function subtraiUm(){
        console.log("entrei verifica sub");
        setQtd(qtd-1);
        if(qtd === 0){
            retiraSelecionado();
        }
        
    }
    function somaUm(){
        console.log("entrei verifica soma");
        setQtd(qtd+1);
        if(qtd === 0){
            retiraSelecionado();
        }
    }

    function retiraSelecionado(){
        console.log(qtd)
    }
    return (
        <div className="qtd-produto">
            <button className="diminuir-qtd" onClick={subtraiUm}>-</button> 
            {qtd}
            <button className="aumentar-qtd" onClick={somaUm}>+</button>
        </div>
    );
}