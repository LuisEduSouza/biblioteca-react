import { JSX } from "react";
import Cabecalho from "../../../components/Cabecalho/Cabecalho";
import FormEmprestimo from "../../../components/Formularios/FormEmprestimo/FormEmprestimo";
import Rodape from "../../../components/Rodape/Rodape";

function PCadastroEmprestimo(){
    return(
        <div className="pagina-grid">
            <Cabecalho></Cabecalho>
            <FormEmprestimo></FormEmprestimo>
            <Rodape></Rodape>
        </div>
    )
}

export default PCadastroEmprestimo;