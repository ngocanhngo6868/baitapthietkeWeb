/* Lưu các file javascript (.js) */

// Hàm tính lương tháng dựa trên Lương * Hệ số lương[cite: 3]
function tinhLuong() {
    let luong = parseFloat(document.getElementById("luong").value);
    let heSoLuong = parseFloat(document.getElementById("heSoLuong").value);
    let luongThangInput = document.getElementById("luongThang");

    if (isNaN(luong) || isNaN(heSoLuong)) {
        alert("Vui lòng nhập đầy đủ giá trị lương và hệ số lương hợp lệ!");
        return;
    }

    // Tính tiền lương tháng
    let luongThang = luong * heSoLuong;

    // Gán kết quả vào ô Lương tháng
    luongThangInput.value = luongThang;

    // Xuất kiểm tra qua Console
    console.log("Lương tháng là: " + luongThang);
}