/* Lưu các file javascript (.js) */

// Hàm xử lý phép nhân (Multiply)
function multiplyNumbers() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultElement = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerText = "Vui lòng nhập đủ hai số!";
        return;
    }

    let product = num1 * num2;
    resultElement.innerText = product;
    
    // Xuất kiểm tra qua Console
    console.log("Multiply Result: " + product);
}

// Hàm xử lý phép chia (Divide)
function divideNumbers() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultElement = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerText = "Vui lòng nhập đủ hai số!";
        return;
    }

    if (num2 === 0) {
        resultElement.innerText = "Không thể chia cho 0!";
        return;
    }

    let quotient = num1 / num2;
    resultElement.innerText = quotient;
    
    // Xuất kiểm tra qua Console
    console.log("Divide Result: " + quotient);
}