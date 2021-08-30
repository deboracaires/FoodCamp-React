import Comida from "../assets/comida.png";
import Produto from "../Produto/Produto";

export default function Pratos(){
    const pratos = [
        {imgPrato: Comida, titulo: "Frango Yin Yang",  
        descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 14,90", selecionado: false}, 
        {imgPrato: Comida, titulo: "Ixtrofonofe",
        descricao: "Um pouco de salada, um pouco de batata", valor: "R$ 10,90", selecionado: false}, 
        {imgPrato: Comida, titulo: "Batatão",
        descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 5,90", selecionado: false}, 
        {imgPrato: Comida, titulo: "Frango Yin Yang",
        descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 14,90", selecionado: false}, 
        {imgPrato: Comida, titulo: "Frango Yin Yang",
        descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 14,90", selecionado: false}, 
        {imgPrato: Comida, titulo: "Frango Yin Yang",
        descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 14,90", selecionado: false}, 
        {imgPrato: Comida, titulo: "Frango Yin Yang",
        descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 14,90", selecionado: false}, 
        {imgPrato: Comida, titulo: "Frango Yin Yang",
        descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 14,90", selecionado: false}

    ];
    //setInterval(()=> console.log(pratos), 4000);
    
    return (
        <ul className="pratos-conteiner">
           {pratos.map((prato, index) => <Produto key={index} imgProduto = {prato.imgPrato} titulo = {prato.titulo} descricao = {prato.descricao} selecionado = {prato.selecionado} valor = {prato.valor} /> )}
        </ul>
    );
}

