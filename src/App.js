import Topo from "./Topo";
import Conteudo from "./Conteudo";
import Bottom from "./Bottom";

export default function App(){
    return (
        <div className="root">
            <Topo />
            <Conteudo />
            <Bottom />
        </div>
    );
}