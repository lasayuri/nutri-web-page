//buscar pacientes de outro servidor(AJAX) de modo assincrono
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
  //api é interface de programação que disponibiliza os dados para a gente
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //configurando requisição do tipo get para o endereço
  xhr.addEventListener("load", function(){
    var erroAjax = document.querySelector("#erro-ajax");

    if(xhr.status == 200){ //200: código para estar tudo bem
      erroAjax.classList.add("invisivel"); //para desaparecer o span do html que anuncia o erro
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta); //json para array

      pacientes.forEach(function(paciente){
        adicionaPacienteNaTabela(paciente);
      });
    }else{
      console.log(xhr.status);
      console.log(xhr.responseText);

      erroAjax.classList.remove("invisivel"); //para aparecer o span do html
    }
  }); //depois que carregar a resposta, vai executar a função
  xhr.send(); //envia requisição
});
