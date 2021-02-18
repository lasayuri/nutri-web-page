var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){ //para pegar o que está sendo escrito
  var pacientes = document.querySelectorAll(".paciente"); //para retornar array

  if(this.value.length > 0){
    for(var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
      var expressao = new RegExp(this.value, "i") //busca expressão regular e case insensitive

      if(!expressao.test(nome)){ //para usar a expressão regular
        paciente.classList.add("invisivel");
      }else{
        paciente.classList.remove("invisivel");
      }
    }
  }else{
    for(var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
});
