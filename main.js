const clearBtn = document.querySelector('#clear-btn');
const resultField = document.querySelector('#result-field');
clearBtn.addEventListener('click', () => resultField.value="");

const buttons = document.querySelectorAll('.button')

for (const button of buttons) {
  button.addEventListener('click', () => {
    resultField.value += button.value;
  });
}

const calculateBtn = document.querySelector('#calculate-btn');

calculateBtn.addEventListener('click', () => {
  const expression = resultField.value;
  const resultValue = eval(expression);
  resultField.value = resultValue;
});