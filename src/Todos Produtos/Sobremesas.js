import Produto from "../Produto/Produto";
import ImgSobremesa from "../assets/sobremesa.png";

export default function Sobremesas (){
    
    const sobremesas = [
        {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
        descricao: "Apenas bolo", valor: "R$8,90", selecionado: false}, 
        {imgSobremesa: ImgSobremesa, titulo: "Pudim", 
        descricao: "Apenas bolo", valor: "R$5,90", selecionado: false},
        {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
        descricao: "Apenas bolo", valor: "R$8,90", selecionado: false},
        {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
        descricao: "Apenas bolo", valor: "R$8,90", selecionado: false},
        {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
        descricao: "Apenas bolo", valor: "R$8,90", selecionado: false},
        {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
        descricao: "Apenas bolo", valor: "R$8,90", selecionado: false},
        {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
        descricao: "Apenas bolo", valor: "R$8,90", selecionado: false},
        {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
        descricao: "Apenas bolo", valor: "R$8,90", selecionado: false},
        {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
        descricao: "Apenas bolo", valor: "R$8,90", selecionado: false}
    ];
    return (
        <ul className="sobremesas-conteiner">
            
            {sobremesas.map((sobremesa, index) => <Produto imgProduto = {sobremesa.imgSobremesa} titulo = {sobremesa.titulo} descricao = {sobremesa.descricao} valor = {sobremesa.valor} selecionado = {sobremesa.selecionado} key = {index}/>)}
            
        </ul>
    );
}