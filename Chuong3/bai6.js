// khai báo biến
var check = true;
var chieuDai = prompt("Nhập chiều dài: ");

//kiểm tra nhập chiều dài
if (chieuDai === '' || chieuDai === null) {
    console.log("Vui lòng nhập chiều dài!");
    check = false;

}

//isNam kiểm tra dữ liệu vào có phải là số không
else if (isNaN(chieuDai)) {
    console.log("Nhập chiều dài không đúng định dạng số!");
    check = false;

}

//kiểm tra chiều dài >0 , không âm
else if (chieuDai <= 0) {
    console.log('Chiều dài phải lớn hơn 0');
    check = false;
}

//định dạng sang số
else {
    chieuDai = Number(chieuDai);
}
//khai báo chiều rộng
var chieuRong = prompt("Nhập chiều rộng: ");

//kiểm tra nhập chiều rộng
if (chieuRong === '' || chieuRong === null) {
    console.log("Vui lòng nhập chiều rộng!");
    check = false;
}
//isNan kiểm tra dữ liệu có phải là số không
else if (isNaN(chieuRong)) {
    console.log("Nhập chiều rộng không đúng định dạng số!");
    check = false;
}
//kiểm tra chiều rộng lớn hơn 0
else if (chieuRong <= 0) {
    console.log('Chiều rộng phải lớn hơn 0');
    check = false;
}
//định dạng số
else {
    chieuRong = Number(chieuRong);
}
//nếu check == true thì xử lí 
if (check) {

    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;

    console.log("Chu vi: " + chuVi);
    console.log("Dien tich: " + dienTich);
}