/* Lưu các file javascript (.js) */

function tinhTien() {
    let selectedItemsList = document.getElementById("selectedItemsList");
    let totalAmountDiv = document.getElementById("totalAmount");
    
    // Xóa kết quả cũ
    selectedItemsList.innerHTML = "";
    
    let subTotal = 0;
    let items = [];

    // Lấy tất cả các món thức ăn được chọn
    let foodCheckboxes = document.querySelectorAll('input[name="food"]:checked');
    foodCheckboxes.forEach((checkbox) => {
        let name = checkbox.value;
        let price = parseInt(checkbox.getAttribute("data-price"));
        subTotal += price;
        items.push({ name: name, price: price });
    });

    // Lấy tất cả các món nước uống được chọn
    let drinkCheckboxes = document.querySelectorAll('input[name="drink"]:checked');
    drinkCheckboxes.forEach((checkbox) => {
        let name = checkbox.value;
        let price = parseInt(checkbox.getAttribute("data-price"));
        subTotal += price;
        items.push({ name: name, price: price });
    });

    if (items.length === 0) {
        selectedItemsList.innerHTML = "<li>Chưa chọn món nào!</li>";
        totalAmountDiv.innerText = "Tổng tiền: 0 đồng";
        return;
    }

    // Hiển thị danh sách món đã dùng và giá từng món
    items.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = `${item.name} - ${item.price.toLocaleString('vi-VN')} đồng`;
        selectedItemsList.appendChild(li);
    });

    // Kiểm tra thời điểm (Ban ngày hay Ban đêm)[cite: 3]
    let timeRadio = document.querySelector('input[name="time"]:checked');
    let finalTotal = subTotal;
    let timeNote = "";

    if (timeRadio && timeRadio.value === "night") {
        // Nếu dùng ban đêm thì tiền cần trả tăng thêm 10%[cite: 3]
        finalTotal = subTotal * 1.1;
        timeNote = " (Đã tính phụ thu ban đêm +10%)";
    }

    // Hiển thị tổng tiền
    totalAmountDiv.innerText = `Tổng tiền: ${finalTotal.toLocaleString('vi-VN')} đồng${timeNote}`;

    // Xuất kiểm tra qua Console
    console.log(`Tổng thanh toán: ${finalTotal} đồng`);
}