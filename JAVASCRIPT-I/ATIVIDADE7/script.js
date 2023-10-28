import { lista } from "./lista.js";

const body = document.querySelector('body');
const head = document.querySelector('head');

const h1 = document.createElement('h1');
h1.innerHTML = 'Lista de produtos';
h1.id ='titulo';
body.appendChild(h1);

const link = document.createElement('link');
link.innerHTML = ``;
link.rel = 'stylesheet';
link.href = 'style.css';
head.appendChild(link);

for (let i = 0; i< lista.length; i++) {

    const div = document.createElement('div');
    div.innerHTML = `
    
      
    <article>
        <h2>Produto${lista[i].ID}</h2>
        <p>Nome: ${lista[i].Nome}</p>
        <p>Descrição: ${lista[i].Descricao}</p>
        <strong>
            <p>Valor: ${lista[i].Valor}</p>
        </strong> 
    </article>
    <img src="${lista[i].Imagem}">


    `
    body.appendChild(div);
};



