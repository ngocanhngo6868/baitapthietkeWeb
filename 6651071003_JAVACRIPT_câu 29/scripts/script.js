

// Hàm xử lý DOM lấy giá trị Họ và tên khi submit form[cite: 13]
function getFormvalue(event) {
    // Ngăn chặn hành vi load lại trang mặc định của form submit
    event.preventDefault();

    let form = document.getElementById("form1");
    
    // Lấy giá trị của các input thông qua thuộc tính name[cite: 13]
    let firstName = form.elements["fname"].value;
    let lastName = form.elements["lname"].value;

    let message = `Họ và tên: ${firstName} ${lastName}`;

    // Hiển thị kết quả ra giao diện web và console
    document.getElementById("result-text").innerText = message;
    console.log(message);
}