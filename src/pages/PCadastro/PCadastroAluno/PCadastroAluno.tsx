// Importa o componente de cabeçalho da aplicação
import Cabecalho from "../../../components/Cabecalho/Cabecalho";
import FormAluno from "../../../components/Formularios/FormAluno/FormAluno";


// Importa o componente de rodapé da aplicação
import Rodape from "../../../components/Rodape/Rodape";

// Componente funcional que representa a página de login
function PCadastroAluno() {
    return (
        <div className="pagina-grid">
            {/* Renderiza o cabeçalho da página */}
            <Cabecalho />

            {/* Renderiza o formulário do aluno */}
            <FormAluno />

            {/* Renderiza o rodapé da página */}
            <Rodape />
        </div>
    );
}

// Exporta o componente para que possa ser usado em outras partes da aplicação
export default PCadastroAluno;
