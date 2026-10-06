
function js_style() {
    let pElement = document.getElementById("text");

    // Thay đổi các thuộc tính style gồm: fontSize, fontFamily, color
    pElement.style.fontSize = "24px";
    pElement.style.fontFamily = "Comic Sans MS, cursive, sans-serif";
    pElement.style.color = "#e74c3c";

    // Xuất thông báo kiểm tra qua Console
    console.log("Đã thay đổi style của đoạn văn bản thành công qua DOM!");
}