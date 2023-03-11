// khai báo biến 

var a = prompt(' Nhập số a : ');
var b = prompt(' nhập số b : ');

// định dạng sang số
a = Number(a);
b = Number(b);

var tong = a + b;
var hieu = a - b;
var tich = a * b;
var thuong = a / b;
var thuongSoDu = a % b;

// in ra màn hình 
console.log(' Tổng hai số a & b là : ' + tong);
console.log(' Hieu hai số a & b là : ' + hieu);
console.log(' Tich hai số a & b là : ' + tich);
console.log(' Thuong hai số a & b là : ' + thuong);
console.log(' Thuong số dư hai số a & b là : ' + thuongSoDu);