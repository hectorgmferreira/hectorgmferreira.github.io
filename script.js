function converteTexto() {
  input = document.getElementById("texto").value;
  input = input.toLowerCase();
  input = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  input = input.replace(/a/g, "ai");
  input = input.replace(/e/g, "enter");
  input = input.replace(/i/g, "imes");
  input = input.replace(/o/g, "ober");
  input = input.replace(/u/g, "ufat");
}

function desconverteTexto() {
  input = document.getElementById("texto").value;
  input = input.toLowerCase();
  input = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  input = input.replace(/ufat/g, "u");
  input = input.replace(/ober/g, "o");
  input = input.replace(/imes/g, "i");
  input = input.replace(/enter/g, "e");
  input = input.replace(/ai/g, "a");
}

function processando() {
  document.querySelector("h2").style.display = "none";
  document.querySelector("#imagem").style.display = "none";
  document.querySelector("#frase").style.display = "none";
  document.querySelector("#msgencriptada").innerHTML = input;
  document.getElementById("msgencriptada").style.display = "block";
  document.querySelector("#resultado").style.padding = "0px";
  document.querySelector("#resultado").style.alignContent = "space-between";
  document.getElementById("botao3").style.display = "block";
}

function converter() {
  input = document.getElementById("texto").value;
  if (input != "") {
    converteTexto();
    processando();
  } else {
    document.querySelector("h2").style.display = "block";
    document.querySelector("#imagem").style.display = "block";
    document.querySelector("#frase").style.display = "block";
    document.getElementById("msgencriptada").style.display = "none";
    document.getElementById("botao3").style.display = "none";
    document.querySelector("#resultado").style.alignContent = "center";
  }
}

function desconverter() {
  input = document.getElementById("texto").value;
  if (input != "") {
    desconverteTexto();
    processando();
  } else {
    document.querySelector("h2").style.display = "block";
    document.querySelector("#imagem").style.display = "block";
    document.querySelector("#frase").style.display = "block";
    document.getElementById("msgencriptada").style.display = "none";
    document.getElementById("botao3").style.display = "none";
    document.querySelector("#resultado").style.alignContent = "center";
  }
}

function copiar() {
  var copyText = document.getElementById("msgencriptada");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  document.querySelector("#msgencriptada").innerHTML = "";
  document.querySelector("#texto").value = "";
}

/* 
A letra "e" ?? convertida para "enter"
A letra "i" ?? convertida para "imes"
A letra "a" ?? convertida para "ai"
A letra "o" ?? convertida para "ober"
A letra "u" ?? convertida para "ufat"
*/
