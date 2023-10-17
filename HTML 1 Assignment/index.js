const res = document.getElementById("result");

function clearResult() {
  res.value = "";
}

function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "Can't divide 0 by 0";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
  }
}

function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

// Adding an event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

// Function to handle keyboard inputs
function keyboardInputHandler(e) {
  e.preventDefault();

  // Numbers
  if (e.key >= "0" && e.key <= "9") {
    res.value += e.key;
  }

  // Operators
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    res.value += e.key;
  }

  // Decimal key
  if (e.key === ".") {
    res.value += ".";
  }

  // Press Enter to see the result
  if (e.key === "Enter") {
    calculate(res.value);
  }

  // Backspace for removing the last input
  if (e.key === "Backspace") {
    const resultInput = res.value;
    // Remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}
