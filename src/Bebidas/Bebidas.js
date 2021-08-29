import Bebida from "./Bebida";
import ImgBebida from "../assets/bebida.png"; 

export default function Bebidas(){
    
    const bebidas = [
        {imgBebida: ImgBebida, titulo:  "Coca geladona", 
        descricao: "lata 350mL", valor: "R$ 4,90"},
        {imgBebida: ImgBebida, titulo:  "Coca geladinha", 
        descricao: "lata 350mL", valor: "R$ 8,90"},
        {imgBebida: ImgBebida, titulo:  "Coca geladona", 
        descricao: "lata 350mL", valor: "R$ 7,90"}, 
        {imgBebida: ImgBebida, titulo:  "Coca geladona", 
        descricao: "lata 350mL", valor: "R$ 14,90"}, 
        {imgBebida: ImgBebida, titulo:  "Coca geladona", 
        descricao: "lata 350mL", valor: "R$ 4,90"}, 
        {imgBebida: ImgBebida, titulo:  "Coca geladona", 
        descricao: "lata 350mL", valor: "R$ 4,90"}, 
        {imgBebida: ImgBebida, titulo:  "Coca geladona", 
        descricao: "lata 350mL", valor: "R$ 4,90"}, 
        {imgBebida: ImgBebida, titulo:  "Coca geladona", 
        descricao: "lata 350mL", valor: "R$ 4,90"}
    ];
    return (
        <ul className="bebidas-conteiner">
            {bebidas.map((bebida, index) => <Bebida imgProduto = {bebida.imgBebida} titulo = {bebida.titulo} descricao = {bebida.descricao} valor = {bebida.valor} key = {index}/>)}
        </ul>
    );
}