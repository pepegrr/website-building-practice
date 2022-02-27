'use strict';

const form = document.querySelector('.form');
const firstName = document.querySelector('.firstName');
const tel = document.querySelector('.tel');
let warning = document.createElement('p');
warning.style.color = 'red';
warning.style.paddingTop = '20px';
warning.style.fontSize = '12px';
let degustationText = document.querySelector('.degustation__text');
function showWarning() {
    degustationText.appendChild(warning);
}

form.addEventListener('submit', function(e) {
    if (!firstName.value && !tel.value) {
    e.preventDefault();
    showWarning();
    warning.textContent = 'Укажите контактные данные';    
  } else if (firstName.value && !tel.value) {
    e.preventDefault();
    showWarning();
    warning.textContent = 'Укажите контактный телефон';      
  } else if (!firstName.value && tel.value) {
    e.preventDefault();
    showWarning();
    warning.textContent = 'Укажите имя';      
  }
})
