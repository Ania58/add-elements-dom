 // Aquí tu código

let userList = '';
const addItems = document.getElementById('lista');
const clickToAdd = document.getElementById('agregar');

clickToAdd.addEventListener('click', function(){
    const newItem = prompt('Create your list');
    if (newItem !== null && newItem !== '') {
        const elementList = document.createElement('li');
        elementList.textContent = newItem;
        addItems.appendChild(elementList);
        userList += newItem + '';
      }
    agregar.innerText = 'Hola, crea tu propia lista de elementos ' + userList + ' y agregala aqui.';
})

