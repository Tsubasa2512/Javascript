//khai báo mảng
var array = [];

//tạo mảng ngẫu nhiên
var dem = temp = 0;
function mangNgauNhien(arr) {
    //tạo mảng ngẫu nhiên từ 0 -> 99
    var n;
    for (var i = 0; i < 100; i++) {
        n = Math.floor(Math.random() * 100);
        arr.push(n);

        console.log(typeof arr);
    }
}

//xuất mảng
function xuatMang(arr) {
    console.log(arr);
}

function dem0(arr) {
    var dem = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            dem++
        }
    }
    console.log("Có " + dem + " số 0 trong mảng");
}

//kiêm tra số nguyên tố
function soNgTo(x) {
    var temp = 0;
    for (var i = 1; i <= x; i++) {
        if (x % i == 0) {
            temp++;
        }
    }
    if (temp == 2) {
        return true;
    }
    else {
        return false;
    }
}

//đếm số nguyên tố 
function demSoNgTo(arr) {
    var sumSoNgTo = 0;
    for (var i = 0; i < arr.length; i++) {
        if (soNgTo(arr[i]) == true) {
            sumSoNgTo++;
        }
    }
    console.log("Có " + sumSoNgTo + " số nguyên tố trong mảng");
}

// kiểm tra số hoàn hảo 
function soHoanHao(x) {
    var tong = 0;
    for (var i = 1; i < x; i++) {
        if (x % i == 0) {
            tong = tong + i;
            // console.log(tong);
        }
    }
    if (tong == x) {
        return true;
    }
    else {
        return false;
    }
}

//đếm số hoàn hảo 
function demSoHoanHao(arr) {
    var sumHH = 0;
    for (var i = 0; i < arr.length; i++) {
        if (soHoanHao(arr[i]) == true) {
            sumHH++
        }
    }
    console.log("Có " + sumHH + " số hoàn hảo trong mảng");
}

//kiểm tra số fibonacci
function soFibonacci(x) {
    var n1 = 0, n2 = 1, nextTerm;
    for (var i = 1; i <= x; i++) {
        //in ra dãy số Fibonacci 
        //console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    } if (x == n1) {
        return true;
    } else {
        return false;
    }
}

//đếm số Fibonacci
function demSoFi(arr) {
    var sumFi = 0;
    for (var i = 0; i < arr.length; i++) {
        if (soFibonacci(arr[i]) == true) {
            sumFi++;
        }
    }
    console.log("Có " + sumFi + " số  Fibonacci trong mảng ");
}

//kiểm tra số đối xứng
function soDoiXung(x) {
    var soChia = 0;
    var temp = 0;
    var soDaoNguoc = 0;
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
        return true;
    } else {
        return false;
    }
}


//đếm số đối xứng
function demSoDoiXung(arr) {
    var sumDX = 0;
    for (var i = 0; i < arr.length; i++) {
        if (soDoiXung(arr[i]) == true) {
            sumDX++;
        }
    }
    console.log("Có " + sumDX + " số đối xứng trong mảng");
}

//gọi đến hàm
mangNgauNhien(array);
xuatMang(array);
dem0(array);
demSoNgTo(array);
demSoHoanHao(array);
demSoFi(array);
demSoDoiXung(array);