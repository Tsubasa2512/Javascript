// khai báo biến 

var chieuDai = prompt(" Nhập chiều dài : ");
var chieuRong = prompt(" Nhập chiều rộng : ");
// chuyển kí tự thành số // định dạng số

chieuDai = Number(chieuDai);
chieuRong = Number(chieuRong);

var chuVi = (chieuDai + chieuRong) * 2;
var dienTich = (chieuDai * chieuRong);

//in ra màn hình
console.log('Chu vi HCN  là :' + chuVi);
console.log('Dien tich HCN la :' + dienTich);