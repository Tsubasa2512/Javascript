

function soDoiXung(x) {

    var soChia = 0;
    var temp = 0;
    var soDaoNguoc = 0;


    // soChia = Number(soChia);
    // soDaoNguoc = Number(soDaoNguoc);
    // temp = Number(temp);
    //xử lí
    soChia = x;
    while (x != 0) {
        temp = x % 10;
        soDaoNguoc = ((soDaoNguoc * 10) + temp);

        x = x / 10;
        //hàm làm tròn số nguyên làm tròn xuống  VD 1.5 = 1
        x = Math.floor(x);
        // console.log('số đảo :' + soDaoNguoc);
    }
    if (soChia == soDaoNguoc) {
        console.log('Số vừa nhập vào :' + soChia + ' là số đối xứng');
    } else {
        console.log('Số vừa nhập vào ' + soChia + ' không phải là số đối xứng');
    }

}

var a = prompt('Nhập số cần kiểm tra :');
soDoiXung(a);