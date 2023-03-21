// khai báo biến

var a = prompt('Nhập vào số A :');
var soChia = 0;
var temp = 0;
var soDaoNguoc = 0;

a = Number(a);
soChia = Number(soChia);
soDaoNguoc = Number(soDaoNguoc);
temp = Number(temp);
//xử lí
soChia = a;
while (a != 0) {
    temp = a % 10;
    soDaoNguoc = ((soDaoNguoc * 10 )+ temp);
    
    a = a / 10;
    //hàm làm tròn số nguyên làm tròn xuống  VD 1.5 = 1
    a = Math.floor(a);
    // console.log('số đảo :' + soDaoNguoc);
}
if (soChia == soDaoNguoc) {
    console.log('Số vừa nhập vào :' + soChia + 'là số đối xứng');
} else {
    console.log('Số vừa nhập vào ' + soChia + ' không phải là số đối xứng');
}
