import Produto from "../Produto/Produto";
import ImgSobremesa from "../assets/sobremesa.png";

const sobremesas = [
    {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
    descricao: "Apenas bolo", valor: "R$8,90", classes: "produto roboto"}, 
    {imgSobremesa: ImgSobremesa, titulo: "Pudim", 
    descricao: "Apenas bolo", valor: "R$5,90", classes: "produto roboto"},
    {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
    descricao: "Apenas bolo", valor: "R$8,90", classes: "produto roboto"},
    {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
    descricao: "Apenas bolo", valor: "R$8,90", classes: "produto roboto"},
    {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
    descricao: "Apenas bolo", valor: "R$8,90", classes: "produto roboto"},
    {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
    descricao: "Apenas bolo", valor: "R$8,90", classes: "produto roboto"},
    {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
    descricao: "Apenas bolo", valor: "R$8,90", classes: "produto roboto"},
    {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
    descricao: "Apenas bolo", valor: "R$8,90", classes: "produto roboto"},
    {imgSobremesa: ImgSobremesa, titulo: "Bolo", 
    descricao: "Apenas bolo", valor: "R$8,90", classes: "produto roboto"}
];

export default function Sobremesas (){
    
    
    function selecionarSobremesa(id){
        sobremesas.filter(buscarSelecionado)
        sobremesas[id].classes = "produto roboto selecionado";
        console.log(sobremesas)
    }

    function buscarSelecionado(sobremesa){
       
        if(sobremesa.classes === "produto roboto selecionado"){
            sobremesa.classes = "produto roboto";
        }
    }

    return (
        <ul className="sobremesas-conteiner">
            
            {sobremesas.map((sobremesa, index) => <Produto id = {index} selecionarProduto = {selecionarSobremesa} imgProduto = {sobremesa.imgSobremesa} titulo = {sobremesa.titulo} descricao = {sobremesa.descricao} valor = {sobremesa.valor} selecionado = {sobremesa.selecionado} key = {index}>{sobremesa.classes}</Produto>)}
            
        </ul>
    );
}