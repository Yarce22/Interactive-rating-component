// Obtener todos los divs con la clase calification
const calification = document.querySelectorAll('.calification');

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

// Agregar el evento click a cada div y llamar a la función changeColor
for (let i = 0; i < calification.length; i++) {
  calification[i].addEventListener('click', function () {
    changeColor (calification[i]);
  });
}