console.log(document.querySelector(".titulo"));
var titulo = document.querySelector(".titulo");
titulo.textContent = "Itamar Rocha";


//var paciente = document.querySelector("#primeiro-paciente");// dessa forma pegamos pelo id
//console.log(paciente);

var pacientes = document.querySelectorAll(".paciente");


for(var i = 0 ; i < pacientes.length; i++ ){

	paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");//dessa forma pegamos a classe
	var peso = tdPeso.textContent;

	console.log(tdPeso.textContent);

	var tdAltura = paciente.querySelector(".info-altura");
	var altura  = tdAltura.textContent;

	var pesoEhValido = true;
	var alturaEhValida = true;

	var tdImc = paciente.querySelector(".info-imc");

	if(peso <= 0 || peso >=1000 ){
		console.log("Peso Inválido");
		tdImc.textContent = "Peso inválida!";
		pesoEhValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if (altura < 0 || altura > 3.00) {
	    console.log("Altura inválida");
	    tdImc.textContent = "Altura inválida!";
	    alturaEhValida = false;
	    paciente.classList.add("paciente-invalido");
	}

	if(pesoEhValido && alturaEhValida){

		var imc = peso / (altura  * altura); 
		console.log('O valor do IMC é ' + imc );
		tdImc.textContent = imc.toFixed(2);
	}else{

		tdImc.textContent = "Altura ou peso que foram digitados estão invalidos";
	}
}