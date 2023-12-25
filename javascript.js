$(document).ready(function () {
    // Event handler for input fields to clear the answer on change
    $("#calculatorForm input").on("input", function () {
        $("#answer").val("");
    });

    $("#calculatorForm").on("submit", function (e) {
        e.preventDefault(); // Prevent form submission
        var num1 = parseFloat($("#num1").val());
        var num2 = parseFloat($("#num2").val());
        var operator = $("#operator").val();
        var answer;

        switch (operator) {
            case "+":
                answer = num1 + num2;
                break;
            case "-":
                answer = num1 - num2;
                break;
            case "*":
                answer = num1 * num2;
                break;
            case "/":
                answer = num1 / num2;
                break;
            default:
                answer = "Invalid operator";
        }

        $("#answer").val(answer);
    });
});