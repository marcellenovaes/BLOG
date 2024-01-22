// Obtém referências aos elementos HTML
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('myModal');

// Adiciona um ouvinte de eventos para abrir o modal
openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Adiciona um ouvinte de eventos para fechar o modal
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Fecha o modal se o usuário clicar fora do conteúdo do modal
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
openModalBtn.addEventListener('click', function() {
  // Faz uma solicitação à API (substitua 'URL_DA_SUA_API' pela URL real da sua API)

fetch('https://www.googleapis.com/books/v1/volumes') 
      .then(response => response.json())
      .then(data => {
          // Atualiza o conteúdo do modal com os dados da API
          renderApiContent(data);
          modal.style.display = 'block';
      })
      .catch(error => console.error('Erro ao buscar dados da API:', error));
});

closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
      modal.style.display = 'none';
  }
});

function renderApiContent(data) {
  // Atualiza o conteúdo do modal com os dados da API
  apiContentContainer.innerHTML = '<p>Dados da API:</p>' +
                                 '<p>Exemplo: ' + data.exemplo + '</p>';
  // Adicione mais linhas conforme necessário, dependendo da estrutura dos dados da sua API
}















































//Function // Função para fazer uma requisição HTTP//function fazerRequisicao(https://apikeys.googleapis.com, callback) {
//const 




  //var xhr = new XMLHttpRequest();
  //xhr.onreadystatechange = function() {
    //if (xhr.readyState == 4 && xhr.status == 200) {
      // Chamando a função de callback com os dados da resposta
      //callback(JSON.parse(xhr.responseText));
   // }
  //};
 // xhr.open("GET", url, true);
  //xhr.send();
//}

// Função para buscar livros na API do Google Books
//function buscarLivros(query) {
  // Substitua 'SUA_CHAVE_DE_API' pela sua chave de API do Google Books
  //var apiKey = 'SUA_CHAVE_DE_API';
  //var url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;

  //fazerRequisicao(url, function(data) {
    // Manipular os dados da resposta aqui
    //console.log(data);
  //});
//}

// Exemplo de uso
//buscarLivros('mulheres na literatura');