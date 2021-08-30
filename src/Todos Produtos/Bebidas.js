import ImgBebida from "../assets/bebida.png"; 
import Produto from "../Produto/Produto";

const bebidas = [
    {imgBebida: ImgBebida, titulo:  "Coca geladona", 
    descricao: "lata 350mL", valor: "R$ 4,90", classes: "produto roboto"},
    {imgBebida: ImgBebida, titulo:  "Coca geladinha", 
    descricao: "lata 350mL", valor: "R$ 8,90", classes: "produto roboto"},
    {imgBebida: ImgBebida, titulo:  "Coca geladona", 
    descricao: "lata 350mL", valor: "R$ 7,90", classes: "produto roboto"}, 
    {imgBebida: ImgBebida, titulo:  "Coca geladona", 
    descricao: "lata 350mL", valor: "R$ 14,90", classes: "produto roboto"}, 
    {imgBebida: ImgBebida, titulo:  "Coca geladona", 
    descricao: "lata 350mL", valor: "R$ 4,90", classes: "produto roboto"}, 
    {imgBebida: ImgBebida, titulo:  "Coca geladona", 
    descricao: "lata 350mL", valor: "R$ 4,90", classes: "produto roboto"}, 
    {imgBebida: ImgBebida, titulo:  "Coca geladona", 
    descricao: "lata 350mL", valor: "R$ 4,90", classes: "produto roboto"}, 
    {imgBebida: ImgBebida, titulo:  "Coca geladona", 
    descricao: "lata 350mL", valor: "R$ 4,90", classes: "produto roboto"}
];

export default function Bebidas(){
    
    

    function selecionarBebida(id){
        bebidas.filter(buscarSelecionado)
        bebidas[id].classes = "produto roboto selecionado";
        console.log(bebidas)
    }

    function buscarSelecionado(bebida){
       
        if(bebida.classes === "produto roboto selecionado"){
            bebida.classes = "produto roboto";
        }
    }

    return (

        
        <ul className="bebidas-conteiner">
            {bebidas.map((bebida, index) => <Produto id = {index} imgProduto = {bebida.imgBebida} selecionarProduto = {selecionarBebida} titulo = {bebida.titulo} descricao = {bebida.descricao} valor = {bebida.valor} key = {index}>{bebida.classes}</Produto>)}
        </ul>
    );
}