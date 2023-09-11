// -----------------queries---------------------
let previousValue = document.querySelector('.previous-value');
let currentValue = document.querySelector('.current-value');
let numbers = document.querySelectorAll('.numbers');
let operator = document.querySelectorAll('.operator');
let clear = document.querySelector('.clear');
let del = document.querySelector('.del');
let decimal = document.querySelector('.decimal');
let equals = document.querySelector('.equals');
// ---------------------------------------
let currentValueContent = ''
let previousValueContent = ''
let operatorContent = ''

numbers.forEach(num => {
  num.addEventListener('click', e => {
    currentValueContent += e.target.textContent; 
    currentValue.textContent = currentValueContent;
  })
})

operator.forEach(o => {
  o.addEventListener('click', e => {
    operatorContent = e.target.textContent;
    previousValueContent = currentValueContent;
    currentValueContent = ''; 
    currentValue.textContent = currentValueContent;
    previousValue.textContent = previousValueContent + operatorContent;
  })
})

clear.addEventListener('click', e => {
  currentValueContent = '';
  previousValueContent = '';
  operatorContent = '';
  previousValue.textContent = previousValueContent;
  currentValue.textContent = 0;
})

del.addEventListener('click', e => {
  currentValueContent = currentValueContent.substring(1);
  currentValue.textContent = currentValueContent;
})



