/* Lưu các file javascript (.js) */

// Hàm xử lý xuất thứ trong tuần dựa trên ngày, tháng, năm nhập vào
function xuatThu() {
    let day = parseInt(document.getElementById("txtDay").value);
    let monthSelect = document.getElementById("selectMonth");
    let month = parseInt(monthSelect.value) - 1; // Trong JS, tháng tính từ 0 đến 11 (Tháng 1 là 0)
    let year = parseInt(document.getElementById("txtYear").value);
    let resultElement = document.getElementById("result");

    // Kiểm tra tính hợp lệ cơ bản
    if (isNaN(day) || isNaN(year)) {
        resultElement.innerText = "Vui lòng nhập đầy đủ ngày và năm hợp lệ!";
        return;
    }

    // Khởi tạo đối tượng Date với định dạng (year, month, day)
    let dateObj = new Date(year, month, day);

    // Kiểm tra xem ngày có thực sự tồn tại trong tháng/năm đó không (tránh trường hợp như 31/04)
    if (dateObj.getFullYear() !== year || dateObj.getMonth() !== month || dateObj.getDate() !== day) {
        resultElement.innerText = "Ngày tháng năm không hợp lệ trên lịch thực tế!";
        return;
    }

    // Lấy giá trị thứ (0: Chủ Nhật, 1: Thứ 2, ..., 6: Thứ 7)
    let dayOfWeek = dateObj.getDay();
    let thuStr = "";

    switch (dayOfWeek) {
        let:
        case 0:
            thuStr = "Chủ Nhật";
            break;
        case 1:
            thuStr = "Thứ 2";
            break;
        case 2:
            thuStr = "Thứ 3";
            break;
        case 3:
            thuStr = "Thứ 4";
            break;
        case 4:
            thuStr = "Thứ 5";
            break;
        case 5:
            thuStr = "Thứ 6";
            break;
        case 6:
            thuStr = "Thứ 7";
            break;
    }

    // Hiển thị kết quả đúng định dạng theo yêu cầu mẫu[cite: 3]
    let hienThiThang = month + 1;
    let finalResult = `${thuStr} Ngày ${day} tháng ${hienThiThang} năm ${year}`;
    resultElement.innerText = finalResult;

    // Xuất kiểm tra qua Console
    console.log(finalResult);
}