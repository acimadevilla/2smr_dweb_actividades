/**
 * Antes de nada meter en variables los elementos a los que le vamos a introducir un manejador de eventos
 */

let form = document.getElementById("formularioIMC");

//Añadimos un manejador de evento clic
form.addEventListener('submit', () => {

  event.preventDefault();
  //Calcular la fórmula peso / (alutura^2)
  //necesitamos recuperar los datos que haya en esos campos
  //Cómo?
  let peso =  document.getElementById("peso").value.trim();
  let altura = document.getElementById("altura").value.trim();
  let resultado = document.getElementById("resultado");

  console.log("Comprobando peso y altura" + peso + "-" + altura);
  if (peso === "" || altura === "") {
    //Muestro un mensaje de error
    resultado.textContent = "Debes introducir peso y altura."
    resultado.classList.add("resultadoERROR");
    resultado.classList.remove("resultadoOK");
  } else if (isNaN(peso) || isNaN(altura)) {
    console.log("No es un número!!");
    //si no ha introducido valores numéricos se informa al usuario
    resultado.textContent = "Debes introducir valores numéricos."
    resultado.classList.add("resultadoERROR");
    resultado.classList.remove("resultadoOK");
  } else {
      console.log("Son NÚMEROS: peso-->"+peso);
      console.log("Son NÚMEROS: altura-->"+altura);

   
    
    resultado.textContent = "Tu IMC es "+parseFloat(peso / (altura * altura)).toFixed(2);

    resultado.classList.add("resultadoOK");
    resultado.classList.remove("resultadoERROR");
  }
});