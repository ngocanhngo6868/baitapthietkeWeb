/* Lưu các file javascript (.js) */

function tinhCanChi() {
    let yearInput = document.getElementById("txtYear").value.trim();
    let resultBox = document.getElementById("txtResult");

    // 1. Validate giá trị nhập vào (Kiểm tra rỗng, có phải là số nguyên dương hay không)
    if (yearInput === "" || isNaN(yearInput)) {
        alert("Vui lòng nhập vào một năm hợp lệ (phải là kiểu số)!");
        document.getElementById("txtYear").focus();
        return;
    }

    let year = parseInt(yearInput);

    if (year <= 0) {
        alert("Năm dương lịch phải là số nguyên dương lớn hơn 0!");
        document.getElementById("txtYear").focus();
        return;
    }

    // 2. Mảng chứa tên các Can và Chi
    const cans = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
    const chis = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];

    // 3. Công thức tính Can và Chi dựa theo năm dương lịch
    let canIndex = year % 10;
    let chiIndex = year % 12;

    let can = cans[canIndex];
    let chi = chis[chiIndex];

    let canChiResult = `${can} ${chi}`;

    // 4. Hiển thị kết quả ra TextField kết quả
    resultBox.value = canChiResult;

    // Xuất kiểm tra qua Console
    console.log(`Năm dương lịch ${year} tương ứng với Can Chi: ${canChiResult}`);
}