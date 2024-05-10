document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.calculator button');
    let currentInput = '';
    
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const value = button.getAttribute('value');
        
        if (value === '=') {
          try {
            currentInput = eval(currentInput);
            display.value = currentInput;
          } catch (error) {
            display.value = 'Error';
            currentInput = '';
          }
        } else if (value === 'clear') {
          currentInput = '';
          display.value = '';
        } else {
          currentInput += value;
          display.value = currentInput;
        }
      });
    });
  });
