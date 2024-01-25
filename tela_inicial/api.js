const apiKey = 'AIzaSyAK47ZBQtmf9O-cjjfjPkXYnWqd3HpOsT8';
const apiUrl = 'https://www.googleapis.com/books/v1/volumes';


// https://www.googleapis.com/books/v1/volumes?q=isbn:9780345377449&key=AIzaSyAK47ZBQtmf9O-cjjfjPkXYnWqd3HpOsT8
// Função para buscar informações sobre um livro
function buscarLivro(isbn) {
  const url = `${apiUrl}?q=isbn:${isbn}&key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Verificar se há resultados
      if (data.totalItems > 0) {
        const livro = data.items[0].volumeInfo;

        // Exibir as informações desejadas
        console.log('Título:', livro.title);
        console.log('Autores:', livro.authors);
        console.log('Editora:', livro.publisher);
        console.log('Data de Publicação:', livro.publishedDate);
        console.log('Descrição:', livro.description);
      } else {
        console.log('Livro não encontrado.');
      }
    })
    .catch(error => {
      console.error('Erro ao buscar informações do livro:', error);
    });
}

// Exemplo de uso: buscar informações para um livro com ISBN específico
const isbnDoLivro = '9780345377449';
buscarLivro(isbnDoLivro);
