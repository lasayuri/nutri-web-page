//alert("Hello World!")
console.log("Hello world!"); //aparece no console do navegador-->
//<!--console.log(document); selecionar o DOM inteiro-->
var titulo = document.querySelector(".titulo"); //<!--apenas busca o h1 do mundo html, .titulo porque é classe-->

titulo.textContent = "Aparecida Nutricionista"; //<!--muda o conteúdo dentro do h1-->

var pacientes = document.querySelectorAll(".paciente"); //# para indicar que é pelo id, querySelector sempre retorna apenas um elemento, por isso o querySelectorAll

for (var i = 0; i < pacientes.length; i++){
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEValido = validaPeso(peso);
  var alturaEValida = validaAltura(altura);

  if (!pesoEValido){
    console.log("Peso inválido");
    pesoEValido = false;
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("paciente-invalido"); //para pintar apenas as letras vermelho: paciente.style.color = "red"
    //adiciona e trabalha com a classe criada no css index para mudar a cor da linha
  }

  if (!alturaEValida){
    console.log("Altura inválida");
    alturaEValida = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }

  if (alturaEValida && pesoEValido){
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

/*titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
  console.log("Olá eu fui clicado!");
}*/

function validaPeso(peso){
  if(peso >= 0 && peso < 1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura >= 0 && altura <= 3.0){
    return true;
  }else{
    return false;
  }
}

function calculaImc(peso, altura){
  var imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2); //para só duas casas decimais no imc
}
