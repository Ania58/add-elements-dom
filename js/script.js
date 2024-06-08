 // Aquí tu código

const list = prompt('Create your list');
const addItems = document.getElementById('lista');
const clickToAdd = document.getElementById('agregar');

clickToAdd.addEventListener('click', function(){
    const list = prompt('Create your list');
    if (list) {
        const elementList = document.createElement('li');
        elementList.textContent = list;
        addItems.appendChild(elementList);
      }
    agregar.innerText = 'Hola, crea tu propia lista de elementos ' + list + ' y agregala aqui.';
})
