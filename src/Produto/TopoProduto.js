export default function TopoPrato(props){
    return (
        <div>
            <div className="imagem-produto">
                <img src={props.imgProduto} alt=""/>
            </div>
            <p className="titulo-produto">
                {props.titulo}
            </p>
            <p className="descricao-produto">
                {props.descricao}
            </p>
        </div>
    );
}