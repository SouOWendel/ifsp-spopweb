


async function api(url) {
    return await fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        return json;
      });
}

export function exibirInicio() {
    return `
		<h1>Bem-vindo</h1>
		<p>Esta é a página inicial do nosso SPA</p>
	`;
}

export function exibirSobre() {
    return `
		<h1>Sobre</h1>
		<p>Esta é nossa aula de Programação Dinâmica para Web e estamos aprendendo sobre SPAs</p>
	`;
}

export function exibirContato() {
    return `
		<h1>Contato</h1>
		<p>Entre em contato conosco: (11) 0000-0000</p>
	`;
}

export async function exibirUsuarios() {
    const api_data = await api('https://jsonplaceholder.typicode.com/users?_limit=10')
    console.log("Dados da página de usuários: " + api_data);
    return `
		<h1>Usuarios</h1>
        ${api_data.map(user => `
            <p>Nome: ${user.name}</p>
            <p>E-mail: ${user.email}</p>
            `)}
	`;
}

export async function exibirPosts() {
    const api_data = await api('https://jsonplaceholder.typicode.com/posts?_limit=10')
    console.log("Dados da página de posts: " + api_data);
    return `
		<h1>Postagens</h1>
        ${api_data.map(posts => `
            <p>Título: ${posts.title}</p>
            <p>Conteúdo: ${posts.body}</p>
            `)}
	`;
}

export async function exibirFotos() {
    const api_data = await api('https://jsonplaceholder.typicode.com/photos?_limit=10');
    return `
		<h1>Fotos</h1>
        ${api_data.map(foto => `
            <p>ID do Álbum: ${foto.albumId}</p>
            <p>ID: ${foto.id}</p>
            <p>Imagem: <img src="${foto.thumbnailUrl}"></p>
            <p>Título: ${foto.title}</p>
            <p>url: ${foto.url}</p>
            `).join('')}
	`;
}