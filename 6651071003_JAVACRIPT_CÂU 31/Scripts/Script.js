

// Hàm xử lý khi người dùng chọn một giá trị trong dropdown list rồi nhấn nút "Select and Remove" để xóa[cite: 14]
function removecolor() {
    // Lấy phần tử select thông qua id "colorSelect"[cite: 14]
    let selectElement = document.getElementById("colorSelect");

    // Kiểm tra xem danh sách còn phần tử nào để xóa hay không
    if (selectElement.options.length === 0) {
        alert("Danh sách đã trống!");
        return;
    }

    // Lấy vị trí (index) của option đang được chọn
    let selectedIndex = selectElement.selectedIndex;
    let removedText = selectElement.options[selectedIndex].text;

    // Xóa option tại vị trí đang chọn khỏi dropdown list
    selectElement.remove(selectedIndex);

    // Xuất thông báo kiểm tra qua Console
    console.log(`Đã xóa thành công mục: ${removedText}`);
}