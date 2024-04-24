const lista = document.getElementById("lista-municipios");

const dataEstados = fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/{uf}/municipios');

dataEstados.then((response) => response.json()).then((data) => {
    const estados = Object.values(data);

    for (let municipio of estados) {
        adicionarEstadosNaLista(municipio.nome, municipio.sigla);
    }
})

function adicionarEstadosNaLista(text, uf) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = text;
    a.href = `./municipios/index.html?uf=${uf}`
    li.appendChild(a);
    lista.appendChild(li);
}