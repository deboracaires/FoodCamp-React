export default function Bebida(props){
    return (
        <li class="bebida-conteiner">
                <button class="bebida produto roboto" onclick="selecionarBebida(this); verificaBebida(this);">
                <div class="imagem-produto">
                    <img src={props.imgBebida}/>
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