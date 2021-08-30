import ImgBebida from "../assets/bebida.png"; 
import Produto from "../Produto/Produto";

export default function Bebidas(){
    
    const bebidas = [
        {imgBebida: ImgBebida, titulo:  "Coca geladona", 
        descricao: "lata 350mL", valor: "R$ 4,90", selecionado: false},
        {imgBebida: ImgBebida, titulo:  "Coca geladinha", 
        descricao: "lata 350mL", valor: "R$ 8,90", selecionado: false},
        {imgBebida: ImgBebida, titulo:  "Coca geladona", 
        descricao: "lata 350mL", valor: "R$ 7,90", selecionado: false}, 
        {imgBebida: ImgBebida, titulo:  "Coca geladona", 
        descricao: "lata 350mL", valor: "R$ 14,90", selecionado: false}, 
        {imgBebida: ImgBebida, titulo:  "Coca geladona", 
        descricao: "lata 350mL", valor: "R$ 4,90", selecionado: false}, 
        {imgBebida: ImgBebida, titulo:  "Coca geladona", 
        descricao: "lata 350mL", valor: "R$ 4,90", selecionado: false}, 
        {imgBebida: ImgBebida, titulo:  "Coca geladona", 
        descricao: "lata 350mL", valor: "R$ 4,90", selecionado: false}, 
        {imgBebida: ImgBebida, titulo:  "Coca geladona", 
        descricao: "lata 350mL", valor: "R$ 4,90", selecionado: false}
    ];
    return (
        <ul className="bebidas-conteiner">
            {bebidas.map((bebida, index) => <Produto imgProduto = {bebida.imgBebida} titulo = {bebida.titulo} descricao = {bebida.descricao} valor = {bebida.valor} selecionado = {bebida.selecionado} key = {index}/>)}
        </ul>
    );
}