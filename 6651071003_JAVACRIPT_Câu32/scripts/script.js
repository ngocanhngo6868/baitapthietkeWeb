

// Danh sách các hình ảnh theo yêu cầu đề bài gồm URL, chiều rộng và chiều cao[cite: 14]
const imagesArray = [
    {
        url: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: "240",
        height: "160"
    },
    {
        url: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: "320",
        height: "195"
    },
    {
        url: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
    }
];

// Hàm hiển thị hình ảnh ngẫu nhiên khi nhấp vào nút "Show Image"[cite: 14]
function display_random_image() {
    // Chọn ngẫu nhiên một phần tử trong mảng imagesArray
    let randomIndex = Math.floor(Math.random() * imagesArray.length);
    let selectedImage = imagesArray[randomIndex];

    // Tạo thẻ img thông qua DOM
    let imgElement = document.createElement("img");
    imgElement.src = selectedImage.url;
    imgElement.width = selectedImage.width;
    imgElement.height = selectedImage.height;
    imgElement.alt = "Random Image";

    let container = document.getElementById("image-container");
    
    // Xóa ảnh cũ trước khi hiển thị ảnh mới (nếu có)
    container.innerHTML = "";
    
    // Thêm ảnh mới vào khung chứa trên giao diện
    container.appendChild(imgElement);

    // Xuất thông báo kiểm tra qua Console
    console.log(`Đã hiển thị ngẫu nhiên ảnh: ${selectedImage.url}`);
}