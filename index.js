// Obtener todos los divs con la clase calification
const calification = document.querySelectorAll('.calification');

// Obtenemos el button con la clase btn y las dos cards
const btn = document.querySelector('.btn');
const card1 = document.querySelector('.card-container');
const card2 = document.querySelector('.submitSend-container');
const punctuation = document.querySelector('.punctuation')

// Agregar el evento click a cada div y llamar a la función changeColor
for (let i = 0; i < calification.length; i++) {
  calification[i].addEventListener('click', function () {
    changeColor (calification[i]);
  });
}

// Agregar el evento click a cada div y llamar a la función saveText
for (let i = 0; i < calification.length; i++) {
  calification[i].addEventListener('click', (event) => saveText(event)); // Con paréntesis y parámetro event
}

// Agregar el evento click a cada div y llamar a la función changeColor
btn.addEventListener('click', submitCalification)

// Definir una función que cambia el color de fondo de un div
function changeColor (div) {
  // Recorrer todos los divs y ponerlos de color gris oscuro y las letras a gris claro
  for (let i = 0; i < calification.length; i++) {
    calification[i].style.backgroundColor = '#262E38';
    calification[i].style.color = '#7C8798';
    
  }
  // Cambiar el color de fondo del div seleccionado a naranja
  div.style.backgroundColor = '#FC7614';
  div.style.color = '#FFF';
}

// Definir una variable global para guardar el texto del div seleccionado
let selectedText = "";

// Definir una función que guarda el texto del div en la variable global
function saveText(event) {
  // Obtener el texto del div usando event.target.textContent
  let text = event.target.textContent;
  // Asignar el texto a la variable global
  selectedText = text;
  // Mostrar el texto en la consola
  console.log(text);
}

function submitCalification() {
  card1.style.display = 'none';
  card2.style.display = 'flex';
  // Usar la variable global para mostrar el texto seleccionado
  punctuation.innerHTML = `You selected ${selectedText} out of 5`;
}