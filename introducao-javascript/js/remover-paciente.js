/*var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){
  paciente.addEventListener("dblclick", function(){
    this.remove(); //this para usar remove em quem acionou o evento, a quem o evento está atrelado
  }); //para apagar o registro quando clicar nele com o click duplo e chamar a função
});*/

//delega a função de vai escutar o evento para o pai da tabela, para todos os filhos escutarem o evento
//se fazer como o anterior, os novos pacientes adicionados não serão deletados
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(){ //nao pode usar o this, porque ele apagaria a tabela toda, porque trataria do pai
  //event.target.remove(); assim quem é removido é só o td, e não o tr
  var alvoEvento = event.target;
  var paiDoAlvo = alvoEvento.parentNode; //TR = paciente

  paiDoAlvo.classList.add("fadeOut"); //para adicionar a classe de fadeOut que faz o paciente ser removido de forma mais devagar, dando tempo para o usuário ver o que aconteceu

  setTimeout(function(){
    paiDoAlvo.remove();
  }, 500); //para esperar entre setar a classe de fadeOut, e deletar, para que a remoção seja com fadeOut
});
