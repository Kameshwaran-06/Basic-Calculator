// Function to append numbers and operators to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  // Function to delete the last element
  function clearLastElement() {
    document.getElementById('display').value = display.value.slice(0,-1);
  }
  
  // Function to calculate the result
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      // Using eval to evaluate the expression entered in the display
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }
  