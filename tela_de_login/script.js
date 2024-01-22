function Login() {
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    console.log(nome , senha);

    let pessoas_cadastradas = JSON.parse(localStorage.getItem('banco_de_dados')) || [];

   
    const usuarioExistente = pessoas_cadastradas.find(elements => elements.nome === nome && elements.senha === senha);

    if (usuarioExistente) {
      console.log("Login bem-sucedido!");
    
    } else {
      console.log("Email ou senha incorretos. Tente novamente.");
    }
  }
