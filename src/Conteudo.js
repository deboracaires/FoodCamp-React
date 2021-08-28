import Pratos from "./Pratos";

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
        <ul class="bebidas-conteiner">
            <li class="bebida-conteiner">
                <button class="bebida produto roboto" onclick="selecionarBebida(this); verificaBebida(this);">
                <div class="imagem-produto">
                    <img src="/assets/bebida.png"/>
                </div>
                <p class="titulo-produto">
                    Coquinha gelada
                </p>
                <p class="descricao-produto">
                    Lata 350ml
                </p>
                <p class="valor-produto">
                    R$ 4,90
                </p>
                </button>
            </li>
            <li class="bebida-conteiner">
                <button class="bebida produto roboto" onclick="selecionarBebida(this); verificaBebida(this);">
                <div class="imagem-produto">
                    <img src="/assets/bebida.png"/>
                </div>
                <p class="titulo-produto">
                    Coquinha geladona
                </p>
                <p class="descricao-produto">
                    Garrafa 2L
                </p>
                <p class="valor-produto">
                    R$ 7,90
                </p>
                </button>
            </li>
            <li class="bebida-conteiner">
                <button class="bebida produto roboto" onclick="selecionarBebida(this); verificaBebida(this);">
                <div class="imagem-produto">
                    <img src="/assets/bebida.png"/>
                </div>
                <p class="titulo-produto">
                    Fanta Laranja
                </p>
                <p class="descricao-produto">
                    Lata 300mL
                </p>
                <p class="valor-produto">
                    R$ 2,90
                </p>
                </button>
            </li>
            <li class="bebida-conteiner">
                <button class="bebida produto roboto" onclick="selecionarBebida(this); verificaBebida(this);">
                <div class="imagem-produto">
                    <img src="/assets/bebida.png"/>
                </div>
                <p class="titulo-produto">
                    Coquinha gelada
                </p>
                <p class="descricao-produto">
                    Lata 350ml
                </p>
                <p class="valor-produto">
                    R$ 4,90
                </p>
                </button>
            </li>
            <li class="bebida-conteiner">
                <button class="bebida produto roboto" onclick="selecionarBebida(this); verificaBebida(this);">
                <div class="imagem-produto">
                    <img src="/assets/bebida.png"/>
                </div>
                <p class="titulo-produto">
                    Coquinha geladona
                </p>
                <p class="descricao-produto">
                    Garrafa 2L
                </p>
                <p class="valor-produto">
                    R$ 7,90
                </p>
                </button>
            </li>
            <li class="bebida-conteiner">
                <button class="bebida produto roboto" onclick="selecionarBebida(this); verificaBebida(this);">
                <div class="imagem-produto">
                    <img src="/assets/bebida.png"/>
                </div>
                <p class="titulo-produto">
                    Fanta Laranja
                </p>
                <p class="descricao-produto">
                    Lata 300mL
                </p>
                <p class="valor-produto">
                    R$ 2,90
                </p>
                </button>
            </li>
            <li class="bebida-conteiner">
                <button class="bebida produto roboto" onclick="selecionarBebida(this); verificaBebida(this);">
                <div class="imagem-produto">
                    <img src="/assets/bebida.png"/>
                </div>
                <p class="titulo-produto">
                    Coquinha gelada
                </p>
                <p class="descricao-produto">
                    Lata 350ml
                </p>
                <p class="valor-produto">
                    R$ 4,90
                </p>
                </button>
            </li>
            <li class="bebida-conteiner">
                <button class="bebida produto roboto" onclick="selecionarBebida(this); verificaBebida(this);">
                <div class="imagem-produto">
                    <img src="/assets/bebida.png"/>
                </div>
                <p class="titulo-produto">
                    Coquinha geladona
                </p>
                <p class="descricao-produto">
                    Garrafa 2L
                </p>
                <p class="valor-produto">
                    R$ 7,90
                </p>
                </button>
            </li>
            <li class="bebida-conteiner">
                <button class="bebida produto roboto" onclick="selecionarBebida(this); verificaBebida(this);">
                <div class="imagem-produto">
                    <img src="/assets/bebida.png"/>
                </div>
                <p class="titulo-produto">
                    Fanta Laranja
                </p>
                <p class="descricao-produto">
                    Lata 300mL
                </p>
                <p class="valor-produto">
                    R$ 2,90
                </p>
                </button>
            </li>
            <li class="bebida-conteiner">
                <button class="bebida produto roboto" onclick="selecionarBebida(this); verificaBebida(this);">
                <div class="imagem-produto">
                    <img src="/assets/bebida.png"/>
                </div>
                <p class="titulo-produto">
                    Coquinha gelada
                </p>
                <p class="descricao-produto">
                    Lata 350ml
                </p>
                <p class="valor-produto">
                    R$ 4,90
                </p>
                </button>
            </li>
            
        </ul>

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