import Pratos from "./Pratos/Pratos";
import Bebidas from "./Bebidas/Bebidas";

export default function Conteudo(){
    return (
        <div class="conteudo">
        
        <h3 class="texto-prato righteous">
            Primeiro, seu prato
        </h3>
        
        <Pratos />
        
        <h3 class="texto-bebida righteous">
            Agora, sua bebida 
        </h3>
        
        <Bebidas />

         <h3 class="texto-sobremesa righteous">
            Por fim, sua sobremesa
        </h3>
        <ul class="sobremesas-conteiner">
            <li class="sobremesa-conteiner">
                <button class="sobremesa produto roboto" onclick="selecionarSobremesa(this); verificaSobremesa(this);">
                <div class="imagem-produto">
                    <img src="/assets/sobremesa.png"/>
                </div>
                <p class="titulo-produto">
                    Pudim
                </p>
                <p class="descricao-produto">
                    Apenas pudim
                </p>
                <p class="valor-produto">
                    R$ 7,90
                </p>
                </button>
            </li>
            <li class="sobremesa-conteiner">
                <button class="sobremesa produto roboto" onclick="selecionarSobremesa(this); verificaSobremesa(this);">
                <div class="imagem-produto">
                    <img src="/assets/sobremesa.png"/>
                </div>
                <p class="titulo-produto">
                    Bolo
                </p>
                <p class="descricao-produto">
                    Apenas bolo
                </p>
                <p class="valor-produto">
                    R$ 8,90
                </p>
                </button>
            </li>
            <li class="sobremesa-conteiner">
                <button class="sobremesa produto roboto" onclick="selecionarSobremesa(this); verificaSobremesa(this);">
                <div class="imagem-produto">
                    <img src="/assets/sobremesa.png"/>
                </div>
                <p class="titulo-produto">
                    Sorvete
                </p>
                <p class="descricao-produto">
                    Apenas sorvete
                </p>
                <p class="valor-produto">
                    R$ 9,90
                </p>
                </button>
            </li>
            <li class="sobremesa-conteiner">
                <button class="sobremesa produto roboto" onclick="selecionarSobremesa(this); verificaSobremesa(this);">
                <div class="imagem-produto">
                    <img src="/assets/sobremesa.png"/>
                </div>
                <p class="titulo-produto">
                    Pudim
                </p>
                <p class="descricao-produto">
                    Apenas pudim
                </p>
                <p class="valor-produto">
                    R$ 7,90
                </p>
                </button>
            </li>
            <li class="sobremesa-conteiner">
                <button class="sobremesa produto roboto" onclick="selecionarSobremesa(this); verificaSobremesa(this);">
                <div class="imagem-produto">
                    <img src="/assets/sobremesa.png"/>
                </div>
                <p class="titulo-produto">
                    Bolo
                </p>
                <p class="descricao-produto">
                    Apenas bolo
                </p>
                <p class="valor-produto">
                    R$ 8,90
                </p>
                </button>
            </li>
            <li class="sobremesa-conteiner">
                <button class="sobremesa produto roboto" onclick="selecionarSobremesa(this); verificaSobremesa(this);">
                <div class="imagem-produto">
                    <img src="/assets/sobremesa.png"/>
                </div>
                <p class="titulo-produto">
                    Sorvete
                </p>
                <p class="descricao-produto">
                    Apenas sorvete
                </p>
                <p class="valor-produto">
                    R$ 9,90
                </p>
                </button>
            </li>
            <li class="sobremesa-conteiner">
                <button class="sobremesa produto roboto" onclick="selecionarSobremesa(this); verificaSobremesa(this);">
                <div class="imagem-produto">
                    <img src="/assets/sobremesa.png"/>
                </div>
                <p class="titulo-produto">
                    Pudim
                </p>
                <p class="descricao-produto">
                    Apenas pudim
                </p>
                <p class="valor-produto">
                    R$ 7,90
                </p>
                </button>
            </li>
            <li class="sobremesa-conteiner">
                <button class="sobremesa produto roboto" onclick="selecionarSobremesa(this); verificaSobremesa(this);">
                <div class="imagem-produto">
                    <img src="/assets/sobremesa.png"/>
                </div>
                <p class="titulo-produto">
                    Bolo
                </p>
                <p class="descricao-produto">
                    Apenas bolo
                </p>
                <p class="valor-produto">
                    R$ 8,90
                </p>
                </button>
            </li>
            <li class="sobremesa-conteiner">
                <button class="sobremesa produto roboto" onclick="selecionarSobremesa(this); verificaSobremesa(this);">
                <div class="imagem-produto">
                    <img src="/assets/sobremesa.png"/>
                </div>
                <p class="titulo-produto">
                    Sorvete
                </p>
                <p class="descricao-produto">
                    Apenas sorvete
                </p>
                <p class="valor-produto">
                    R$ 9,90
                </p>
                </button>
            </li> 
            <li class="sobremesa-conteiner">
                <button class="sobremesa produto roboto" onclick="selecionarSobremesa(this); verificaSobremesa(this);">
                <div class="imagem-produto">
                    <img src="/assets/sobremesa.png"/>
                </div>
                <p class="titulo-produto">
                    Pudim
                </p>
                <p class="descricao-produto">
                    Apenas pudim
                </p>
                <p class="valor-produto">
                    R$ 7,90
                </p>
                </button>
            </li>
            
        </ul>
        
    </div>
    );
}