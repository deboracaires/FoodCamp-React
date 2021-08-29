import Pratos from "./Pratos/Pratos";
import Bebidas from "./Bebidas/Bebidas";
import Sobremesas from "./Sobremesas/Sobremesas";

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