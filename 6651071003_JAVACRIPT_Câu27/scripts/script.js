/* Lưu các file javascript (.js) */

// Hàm xóa dòng tương ứng khi người dùng nhấn nút "Xóa"[cite: 3]
function deleteRow(button) {
    // Xác định thẻ tr (dòng) chứa nút bấm hiện tại
    let row = button.closest("tr");
    
    if (row) {
        // Lấy thông tin để kiểm tra qua console trước khi xóa
        let quantity = row.cells[0].innerText;
        let total = row.cells[2].innerText;
        
        // Xóa dòng khỏi bảng
        row.remove();

        // Xuất kiểm tra qua Console
        console.log(`Đã xóa dòng có số lượng: ${quantity}, tổng tiền: ${total}`);
    }
}