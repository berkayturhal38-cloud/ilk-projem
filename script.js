const resultElement = document.querySelector("#result");
const historyElement = document.querySelector("#history");
const keysElement = document.querySelector(".keys");

const calculator = {
  displayValue: "0",
  firstOperand: null,
  operator: null,
  waitingForSecondOperand: false,
};

const operatorLabels = {
  "+": "+",
  "−": "−",
  "×": "×",
  "÷": "÷",
};

function formatNumber(value) {
  if (!Number.isFinite(value)) {
    return "Hata";
  }

  return new Intl.NumberFormat("tr-TR", {
    maximumFractionDigits: 10,
    useGrouping: false,
  }).format(value);
}

function parseDisplayValue() {
  return Number(calculator.displayValue.replace(",", "."));
}

function updateDisplay() {
  resultElement.value = calculator.displayValue;

  if (calculator.operator && calculator.firstOperand !== null) {
    historyElement.textContent = `${formatNumber(calculator.firstOperand)} ${operatorLabels[calculator.operator]}`;
  } else {
    historyElement.textContent = "";
  }
}

function inputDigit(digit) {
  if (calculator.displayValue === "Hata") {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
    return;
  }

  if (calculator.waitingForSecondOperand) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
    return;
  }

  calculator.displayValue = calculator.displayValue === "0" ? digit : calculator.displayValue + digit;
}

function inputDecimal() {
  if (calculator.waitingForSecondOperand) {
    calculator.displayValue = "0,";
    calculator.waitingForSecondOperand = false;
    return;
  }

  if (!calculator.displayValue.includes(",")) {
    calculator.displayValue += ",";
  }
}

function calculate(firstOperand, secondOperand, operator) {
  switch (operator) {
    case "+":
      return firstOperand + secondOperand;
    case "−":
      return firstOperand - secondOperand;
    case "×":
      return firstOperand * secondOperand;
    case "÷":
      return secondOperand === 0 ? NaN : firstOperand / secondOperand;
    default:
      return secondOperand;
  }
}

function handleOperator(nextOperator) {
  const inputValue = parseDisplayValue();

  if (calculator.operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }

  if (calculator.firstOperand === null) {
    calculator.firstOperand = inputValue;
  } else if (calculator.operator) {
    const result = calculate(calculator.firstOperand, inputValue, calculator.operator);

    calculator.displayValue = formatNumber(result);
    calculator.firstOperand = Number.isFinite(result) ? result : null;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

function resetCalculator() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.operator = null;
  calculator.waitingForSecondOperand = false;
}

function deleteLastDigit() {
  if (calculator.waitingForSecondOperand || calculator.displayValue.length === 1 || calculator.displayValue === "Hata") {
    calculator.displayValue = "0";
    calculator.waitingForSecondOperand = false;
    return;
  }

  calculator.displayValue = calculator.displayValue.slice(0, -1);
}

function applyPercent() {
  const value = parseDisplayValue() / 100;
  calculator.displayValue = formatNumber(value);
}

function performCalculation() {
  if (!calculator.operator || calculator.firstOperand === null) {
    return;
  }

  const secondOperand = parseDisplayValue();
  const result = calculate(calculator.firstOperand, secondOperand, calculator.operator);

  historyElement.textContent = `${formatNumber(calculator.firstOperand)} ${operatorLabels[calculator.operator]} ${formatNumber(secondOperand)} =`;
  calculator.displayValue = formatNumber(result);
  calculator.firstOperand = null;
  calculator.operator = null;
  calculator.waitingForSecondOperand = true;
  resultElement.value = calculator.displayValue;
}

keysElement.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) {
    return;
  }

  if (button.dataset.number !== undefined) {
    inputDigit(button.dataset.number);
  } else if (button.dataset.operator) {
    handleOperator(button.dataset.operator);
  } else if (button.dataset.action === "decimal") {
    inputDecimal();
  } else if (button.dataset.action === "clear") {
    resetCalculator();
  } else if (button.dataset.action === "delete") {
    deleteLastDigit();
  } else if (button.dataset.action === "percent") {
    applyPercent();
  } else if (button.dataset.action === "calculate") {
    performCalculation();
    return;
  }

  updateDisplay();
});

window.addEventListener("keydown", (event) => {
  const key = event.key;

  if (/^[0-9]$/.test(key)) {
    inputDigit(key);
  } else if (key === "," || key === ".") {
    inputDecimal();
  } else if (["+", "-", "*", "/"].includes(key)) {
    handleOperator({ "-": "−", "*": "×", "/": "÷", "+": "+" }[key]);
  } else if (key === "Enter" || key === "=") {
    event.preventDefault();
    performCalculation();
    return;
  } else if (key === "Backspace") {
    deleteLastDigit();
  } else if (key === "Escape") {
    resetCalculator();
  } else if (key === "%") {
    applyPercent();
  } else {
    return;
  }

  updateDisplay();
});

updateDisplay();
