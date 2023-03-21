
function hoanVi(x, y) {
    console.log('Hai số nhập vào là X = ' + x + ' và Y = ' + y);
    var temp;
    temp = x;
    x = y;
    y = temp;
    console.log('Sau khi hoán vị, ta có  : ');
    console.log('X = ' + x + '\nY = ' + y);
}

var a = prompt('Nhập vào số thứ nhất :');
var b = prompt('Nhập vào số thứ hai :');


hoanVi(a, b);

console.log(a);
console.log(b);