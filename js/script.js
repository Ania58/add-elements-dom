 // Aquí tu código


const addItems = document.getElementById('lista');
const clickToAdd = document.getElementById('agregar');

clickToAdd.addEventListener('click', function(){
    const newItem = prompt('Create your list');
    if (newItem !== null && newItem !== '') {
        const elementList = document.createElement('li');
        elementList.textContent = newItem;
        addItems.appendChild(elementList);
      }
})

console.log(addEventListener);