// Capturando os 4 elementos e adicionando conteúdos em cada de acordo com o pedido!
const elh1 = document.querySelector('#titulo');
elh1.innerText = 'Aqui está o conteúdo textual da tag H1';

const elul = document.querySelector('ul');
elul.innerHTML = `
  <p style="font-weight: bold;">
  Aqui está os três ítens da lista não ordenada
  </p>
    <li>1º ítem</li>
    <li>2º ítem</li>
    <li>3º ítem</li>
`;
const ela = document.querySelector('a');
ela.innerText = 'Conteúdo a tag <a> redirecionando para o site da proz';

const elol = document.querySelector('#lista-ordenada');
elol.innerHTML = `

  <p style="font-weight: bold;">
  Aqui está os três links da lista ordenada
  </p>
    <li>
      <a href="https://github.com/caicrangel/" target="_blank">Bem vindos ao meu github</a>
    </li>
    <li>
      <a href="https://devdocs.io/javascript/" target="_blank">Documetação JavaScript</a>
    </li>
    <li>
      <a href="https://devdocs.io/css/" target="_blank">Documentação CSS</a>
    </li>

`;