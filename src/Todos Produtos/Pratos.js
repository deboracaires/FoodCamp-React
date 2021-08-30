import React from "react";
import Comida from "../assets/comida.png";
import Produto from "../Produto/Produto";

const pratos = [
    {imgPrato: Comida, titulo: "Frango Yin Yang",  
    descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 14,90", classes: "produto roboto"}, 
    {imgPrato: Comida, titulo: "Ixtrofonofe",
    descricao: "Um pouco de salada, um pouco de batata", valor: "R$ 10,90", classes: "produto roboto"}, 
    {imgPrato: Comida, titulo: "Batatão",
    descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 5,90", classes: "produto roboto"}, 
    {imgPrato: Comida, titulo: "Frango Yin Yang",
    descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 14,90", classes: "produto roboto"}, 
    {imgPrato: Comida, titulo: "Frango Yin Yang",
    descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 14,90", classes: "produto roboto"}, 
    {imgPrato: Comida, titulo: "Frango Yin Yang",
    descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 14,90", classes: "produto roboto"}, 
    {imgPrato: Comida, titulo: "Frango Yin Yang",
    descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 14,90", classes: "produto roboto"}, 
    {imgPrato: Comida, titulo: "Frango Yin Yang",
    descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 14,90", classes: "produto roboto"}

];

export default function Pratos(){
        
    function selecionarPrato(id){
        pratos.filter(buscarSelecionado)
        pratos[id].classes = "produto roboto selecionado";
        console.log(pratos)
    }

    function buscarSelecionado(prato){
       
        if(prato.classes === "produto roboto selecionado"){
            prato.classes = "produto roboto";
        }
    }


    return (
        <ul className="pratos-conteiner">
           {pratos.map((prato, index) => <Produto key={index} id = {index} selecionarProduto={selecionarPrato} imgProduto = {prato.imgPrato} titulo = {prato.titulo} descricao = {prato.descricao}  valor = {prato.valor}>{prato.classes}</Produto> )}
        </ul>
    );
}

