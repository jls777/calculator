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
numbers.forEach(num => {
  num.addEventListener('click', e => {
    currentValueContent += e.target.textContent; 
    currentValue.textContent = currentValueContent;
  })
})

operator.forEach(o => {
  o.addEventListener('click', e => {
  operator = e.target.textContent;
  console.log(operator);
  })
})