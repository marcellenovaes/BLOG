// let botoes = getElementById('btn');
// botoes.addEventListener("click", () => Cadastrar());


pessoas_cadastradas= JSON.parse(localStorage.getItem('banco_de_dados')) || []
   
  function Cadastrar(){
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("tel").value
    const senha = document.getElementById("senha").value

    pessoas_cadastradas.push({ nome, email, telefone, senha });
    
    console.log(nome);
    console.log(email);
    console.log(telefone);
    console.log(senha);
    console.log("Cadastro realizado com sucesso!");

    }

    
    
  // function login()
  //  


