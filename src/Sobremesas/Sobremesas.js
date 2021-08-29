import Sobremesa from "./Sobremesa";
import ImgSobremesa from "../assets/sobremesa.png";

export default function Sobremesas (){
    
    const sobremesas = [
        {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
        descricao: "Apenas bolo", valor: "R$8,90"}, 
        {imgSobremesa: ImgSobremesa, titulo: "Pudim", 
        descricao: "Apenas bolo", valor: "R$5,90"},
        {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
        descricao: "Apenas bolo", valor: "R$8,90"},
        {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
        descricao: "Apenas bolo", valor: "R$8,90"},
        {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
        descricao: "Apenas bolo", valor: "R$8,90"},
        {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
        descricao: "Apenas bolo", valor: "R$8,90"},
        {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
        descricao: "Apenas bolo", valor: "R$8,90"},
        {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
        descricao: "Apenas bolo", valor: "R$8,90"},
        {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
        descricao: "Apenas bolo", valor: "R$8,90"}
    ];
    return (
        <ul className="sobremesas-conteiner">
            
            {sobremesas.map(sobremesa => <Sobremesa imgSobremesa = {sobremesa.imgSobremesa} titulo = {sobremesa.titulo} descricao = {sobremesa.descricao} valor = {sobremesa.valor}/>)}
            
        </ul>
    );
}