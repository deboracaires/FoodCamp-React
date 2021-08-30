import Pratos from "./Todos Produtos/Pratos";
import Bebidas from "./Todos Produtos/Bebidas";
import Sobremesas from "./Todos Produtos/Sobremesas";

export default function Conteudo(){
    return (
        <div className = "conteudo">
        
            <h3 className = "texto-prato righteous">
            Primeiro, seu prato
            </h3>
        
            <Pratos />
        
            <h3 className = "texto-bebida righteous">
            Agora, sua bebida 
            </h3>
        
            <Bebidas />

            <h3 className = "texto-sobremesa righteous">
            Por fim, sua sobremesa
            </h3>
            
            <Sobremesas />        
        </div>
    );
}