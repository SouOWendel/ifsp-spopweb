import { 
    exibirInicio, exibirSobre, exibirContato,
    exibirUsuarios, exibirFotos, exibirPosts
 } from "./pages.js";

const rotas = () => {

    return {
        '#': exibirInicio,
        '#sobre': exibirSobre,
        '#contato': exibirContato,
        '#usuarios': exibirUsuarios,
        '#fotos': exibirFotos,
        '#posts': exibirPosts
}};

export default async function gerenciarRota() {
	// 1. Definimos como rota padrão, caso nenhuma definida
    let hash = window.location.hash || '#';
	
    const rota = rotas()[hash];

	// 2. Verificamos se existe rota mapeada para a hash, se sim, invocamos a função armazenada, senão retornamos página não encontrada
    let conteudo = rota ? await rota() : '<h1>Página não encontrada</h1>';

	// 3. Atualizamos o DOM para inserir o conteudo retornado (ou não) pela nossa função
	document.getElementById('app').innerHTML = conteudo;
}
