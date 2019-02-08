console.log(document.querySelector(".titulo"));
var titulo = document.querySelector(".titulo");
titulo.textContent = "Itamar Rocha";


var paciente = document.querySelector("#primeiro-paciente");// dessa forma pegamos pelo id
console.log(paciente);
var tdPeso = paciente.querySelector(".info-peso");//dessa forma pegamos a classe
var peso = tdPeso.textContent;

console.log(tdPeso.textContent);

var tdAltura = paciente.querySelector(".info-altura");
var altura  = tdAltura.textContent;



var imc = peso / (altura  * altura); 
console.log('O valor do IMC é ' + imc );

var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;