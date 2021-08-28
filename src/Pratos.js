import Comida from "./assets/comida.png";
import Prato from "./Prato";

export default function Pratos(){
    const pratos = [
        {imgPrato: Comida, titulo: "Frango Yin Yang", 
        descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 14,90"}, 
        {imgPrato: Comida, titulo: "Ixtrofonofe", 
        descricao: "Um pouco de salada, um pouco de batata", valor: "R$ 10,90"}, 
        {imgPrato: Comida, titulo: "Batatão", 
        descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 5,90"}, 
        {imgPrato: Comida, titulo: "Frango Yin Yang", 
        descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 14,90"}, 
        {imgPrato: Comida, titulo: "Frango Yin Yang", 
        descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 14,90"}, 
        {imgPrato: Comida, titulo: "Frango Yin Yang", 
        descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 14,90"}, 
        {imgPrato: Comida, titulo: "Frango Yin Yang", 
        descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 14,90"}, 
        {imgPrato: Comida, titulo: "Frango Yin Yang", 
        descricao: "Um pouco de batata, um pouco de salada", valor: "R$ 14,90"}

    ];
    return (
        <ul class="pratos-conteiner">
           {pratos.map(prato => <Prato imgPrato = {prato.imgPrato} titulo = {prato.titulo} descricao = {prato.descricao} valor = {prato.valor}/> )}
        </ul>
    );
}

