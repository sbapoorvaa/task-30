const display = document.getElementById('display');
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  if (body.classList.contains('light-mode')) {
    modeToggle.textContent = 'Light Mode';
  } else {
    modeToggle.textContent = 'Dark Mode';
  }
});

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
  display.value += value;
}

function calculate() {
  try {
    // Replace '^' with '**' for exponentiation
    let expression = display.value.replace(/\^/g, '**');
    // Evaluate the expression
    const result = eval(expression);
    display.value = result;
  } catch (e) {
    display.value = 'Error';
  }
}
