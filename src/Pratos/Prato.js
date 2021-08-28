
export default function Prato(props){
    return (
        <li class="prato-conteiner">
            <button class="prato produto roboto" onclick="selecionarPrato(this); verificaPrato(this);">
                <div class="imagem-produto">
                    <img src={props.imgPrato}/>
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