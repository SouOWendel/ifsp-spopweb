import gerenciarRota from "./routes.js";

// Ouvinte para o evento hashchange
window.addEventListener('hashchange', gerenciarRota);

window.addEventListener('load', async () => {
    gerenciarRota();
});