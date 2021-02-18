var botaAdicionar = document.querySelector("#adicionar-paciente");

botaAdicionar.addEventListener("click", function(event){ //com função anônima
  event.preventDefault(); //previne comportamento default, senão a cada click de adicionar, faria com que a pagina recarregasse e o form voltaria a ficar em branco, sem ter tempo de ver o console.log
  //console.log("Oi");
  var form = document.querySelector("#form-adiciona");

  //Extraindo informacoes do form
  var paciente = obtemPacienteDoFormulario(form);

  //para validar paciente
  var erros = validaPaciente(paciente);

  if(erros.length > 0){
    exibeMensagensDeErro(erros);
    return; //return vazio = sai imediatamente da função
  }

  adicionaPacienteNaTabela(paciente);

  form.reset(); //limpa os campos depois de colocar um paciente
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = ""; //para limpar a mensagem de erro remanescente que aparece depois de concertar os erros e adicionar o paciente
});

function adicionaPacienteNaTabela(paciente){
  //criar tr e td paciente
  var pacienteTr = montaTr(paciente);

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = ""; //para limpar as mensagens de erro depois de clicar em adicionar o paciente

  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li); //para colocar a li dentro da ul
  });
}

function obtemPacienteDoFormulario(form){
  var paciente = { //usando paciente como objeto
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;

  //extraindo informações do paciente do form
  /*var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;*/
}

function montaTr(paciente){
//criar tr e td paciente
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente"); //para adicionar à classe tr paciente

  /*var pesoTd = document.createElement("td");
  pesoTd.classList.add("info-peso");

  var nomeTd = document.createElement("td");
  nomeTd.classList.add("info-nome");
  nomeTd.textContent = paciente.nome;

  var alturaTd = document.createElement("td");
  alturaId.classList
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = paciente.nome; //para o objeto
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;*/ //de forma melhor escrita abaixo

  var nomeTd = montaTd(paciente.nome, "info-nome");
  var pesoTd = montaTd(paciente.peso, "info-peso");
  var alturaTd = montaTd(paciente.altura, "info-altura");
  var gorduraTd = montaTd(paciente.gordura, "info-gorduraTd");
  var imcTd = montaTd(paciente.imc, "info-imc");

  pacienteTr.appendChild(nomeTd); //para colocar como filho
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente){
  var erros = [];

  if(paciente.nome.length == 0){
    erros.push("O nome não pode ser em branco");
  }

  if(!validaPeso(paciente.peso)){
    erros.push("Peso é inválido"); //para adicionar o erro ao array de erros
  }

  if(!validaAltura(paciente.altura)) erros.push("Altura é inválida"); //if simples pode ficar na mesma linha

  if(paciente.gordura.length == 0){
    erros.push("A gordura não pode ser em branco");
  }

  if(paciente.peso.length == 0){
    erros.push("O peso não pode ser em branco");
  }

  if(paciente.altura.length == 0){
    erros.push("A altura não pode ser em branco");
  }

  return erros;
}
