import Topo from "./Topo";
import Conteudo from "./Conteudo";
import Bottom from "./Bottom";
import "./css/reset.css";
import "./css/styles.css";

export default function App(){
    return (
        <div className="root">
            <Topo />
            <Conteudo />
            <Bottom />
        </div>
    );
}