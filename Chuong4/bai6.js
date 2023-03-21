
function soNgTo(x) {
    var temp = 0;
    for (var i = 1; i <= x; i++) {
        if (x % i == 0) {
            temp++;

        }

    }
    if (temp == 2) {
        console.log(' Số vừa nhập là số nguyên tố ');
    }
    else {
        console.log('Đây là không là số nguyên tố');
    }
}

var a = prompt('Nhập vào số cần kiểm tra :');
soNgTo(a);