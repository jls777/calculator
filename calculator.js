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
//-------variables------------------------
let currentValueContent = ''
let previousValueContent = ''
let operatorContent = ''
//------------------------------------
//----------number---------------------------------
numbers.forEach(num => {
  num.addEventListener('click', e => {
    if (currentValueContent.length > 7) {
      currentValue.style['font-size'] = '50px';
    }
    currentValueContent += e.target.textContent; 
    currentValue.textContent = currentValueContent;
  })
})
//--------------------------------------
//------------operator----------------------
operator.forEach(o => {
  o.addEventListener('click', e => {
    operatorContent = e.target.textContent;
    if (currentValue.textContent !== '' && previousValue.textContent !== '') {
      operate();
      currentValueContent = '';
      currentValue.textContent = '';
      previousValue.textContent = previousValueContent + operatorContent;
    } else if (currentValueContent !== '') {
      previousValueContent = currentValueContent;
      currentValueContent = ''; 
      currentValue.textContent = '';
      previousValue.textContent = previousValueContent + operatorContent;
    } else if (currentValueContent === '') {
      previousValueContent = previousValueContent;
      currentValueContent = ''; 
      currentValue.textContent = '';
      previousValue.textContent = previousValueContent + operatorContent;
    } 
  })
})
//------------------------------------------------
//---------------clear-----------------------
clear.addEventListener('click', e => {
  currentValue.removeAttribute('style');
  currentValueContent = '';
  previousValueContent = '';
  operatorContent = '';
  previousValue.textContent = previousValueContent;
  currentValue.textContent = '0';
})
//--------------------------------------------------
//-----------------del----------------------
del.addEventListener('click', e => {
  if (currentValueContent.length <= 9) currentValue.removeAttribute('style');
  if (currentValueContent.length === 1 && currentValueContent === '0') return;
  if (currentValueContent === '') return;
  if (currentValueContent.length === 1) {
    currentValueContent = currentValueContent.substring(1);
    currentValue.textContent = '0';
    return;
  }
  currentValueContent = currentValueContent.substring(1);
  currentValue.textContent = currentValueContent;
})
//----------------------------------
//------------decimal----------------------
decimal.addEventListener('click', e => {
  if (currentValueContent.includes('.')) return;
  if (currentValueContent === '') {
    currentValueContent += '0' +e.target.textContent;
    currentValue.textContent = currentValueContent;
    return;
  }
  currentValueContent += e.target.textContent;
  currentValue.textContent = currentValueContent;
})
//--------------------------------------

equals.addEventListener('click', e => {
  operate();
  previousValue.textContent = '';
  currentValue.textContent = previousValueContent;
  currentValueContent = '';
})

function operate() {
  currentValueContent = Number(currentValueContent);
  previousValueContent = Number(previousValueContent);
  switch (operatorContent) {
    case 'x':
      previousValueContent *= currentValueContent;
      break;
    case '÷':
      previousValueContent /= currentValueContent;
      break;
    case '+':
      previousValueContent += currentValueContent;
      break;
    case '-':
      previousValueContent -= currentValueContent;
      
      break;
  }
  currentValueContent = currentValueContent.toString();
  previousValueContent = previousValueContent.toString();
 
}