

function addToInput(value) {
    document.getElementById("result").value += value;
  }

  function calculateResult() {
    const input = document.getElementById("result").value;
    if (input === "") {
        window.alert("Digite uma expressão antes de calcular.");
      } else {
    const result = eval(input);
    document.getElementById("result").value = result;
      }
  }

  function clearInput() {
    document.getElementById("result").value = "";
  }
