export default function Sobremesa (props){
    return (
        <li class="sobremesa-conteiner">
                <button class="sobremesa produto roboto" onclick="selecionarSobremesa(this); verificaSobremesa(this);">
                <div class="imagem-produto">
                    <img src={props.imgSobremesa}/>
                </div>
                <p class="titulo-produto">
                    {props.titulo}
                </p>
                <p class="descricao-produto">
                    {props.descricao}
                </p>
                <p class="valor-produto">
                    {props.valor}
                </p>
                </button>
        </li>
    );
}