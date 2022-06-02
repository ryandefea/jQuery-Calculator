// Business Logic

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// User interface logic

  $(document).ready(function() {
    $("form#add").submit(function(event) {
      event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
    });
    $("form#sub").submit(function(event) {
      event.preventDefault();
    const number1 = parseInt($("#sub1").val());
    const number2 = parseInt($("#sub2").val());
    const result = subtract(number1, number2);
    $("#output1").text(result);
    });
    $("form#multi").submit(function(event) {
      event.preventDefault();
    const number1 = parseInt($("#multi1").val());
    const number2 = parseInt($("#multi2").val());
    const result = multiply(number1, number2);
    $("#output2").text(result);
    });
    $("form#divide").submit(function(event) {
      event.preventDefault();
    const number1 = parseInt($("#divide1").val());
    const number2 = parseInt($("#divide2").val());
    const result = divide(number1, number2);
    $("#output3").text(result);
    });
});
