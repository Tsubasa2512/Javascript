
function soHoanHao(x) {
    var tong = 0;

    for (var i = 1; i < x; i++) {

        if (x % i == 0) {
            tong = tong + i;
            // console.log(tong);
        }
    }
    if (tong == x) {
        console.log('Số ' + x + ' là số hoàn hảo ');

    }
    else {
        console.log('Số ' + x + ' không phải là số hoàn hảo');
    }
}
var a = prompt('Nhập vào số cần kiểm tra :');
soHoanHao(a);