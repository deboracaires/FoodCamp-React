import Pratos from "./Pratos/Pratos";
import Bebidas from "./Bebidas/Bebidas";
import Sobremesas from "./Sobremesas/Sobremesas";

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
            
            <Sobremesas />        
        </div>
    );
}