/* Lưu các file javascript (.js) */

// Hàm áp dụng DOM để thêm 1 hàng vào table đã tồn tại khi người dùng nhấn nút "Insert Row"[cite: 13]
function insert_Row() {
    // Lấy phần tử table thông qua id "sampleTable"[cite: 13]
    let table = document.getElementById("sampleTable");

    // Chèn một hàng (tr) mới vào cuối bảng (vị trí index = -1)
    let newRow = table.insertRow(-1);

    // Chèn 2 ô (td) mới vào hàng vừa tạo
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Đếm số lượng hàng hiện tại trong bảng để điền nội dung tự động tương ứng
    let rowCount = table.rows.length;

    cell1.innerHTML = `Row${rowCount} cell1`;
    cell2.innerHTML = `Row${rowCount} cell2`;

    // Xuất thông báo kiểm tra qua Console
    console.log(`Đã thêm thành công hàng thứ ${rowCount} vào bảng!`);
}