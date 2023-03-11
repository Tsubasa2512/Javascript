var arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//in  theo thứ tự index A -Z
function indexAZ(array) {

    return array.slice(0);

}

//in theo thứ tự indez Z- A
function indexZA(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }

}

// xoá phẩn thử cuối cùng của mảng

function xoaCuoi(array) {
    return array.pop();
}

//xoá phần thử đầu tiên
function xoaDau(array) {
    return array.shift();
}
//thêm phần tử vào cuối mảng
function themCuoi(array) {
    return array.push(0);
}

//thêm phần tử vào đầu mảng

function themDau(array) {
    return array.unshift(0);
}

//cắt phần tử đầu tiên đến phần tử thứ 5 thành 1 mảng mới

function catThemMang(array) {
    var arr = [];
    return arr = array.splice(0, 4);
}
//chèn số 100 vào phần tử thứ 5
function chenPT(array) {

    return array.splice(4, 0, 100);

}
// thay thế phần thử thứ 5 bằng 101
function thayThePT(array) {
    return array.splice(4, 1, 101);
}

//copy mảng thành 1 mảng mới từ phần tử 5 đến hết

function copyMang(array) {
    var arr = [];
    return arr = array.slice(4);

}


// copy mảng thành 1 mảng mới từ phần tử 1 đến 5

function copyMang2(array) {
    var arr = [];
    return arr = array.slice(0, 4);
}


// nối mảng 

function noiMang(array) {
    var arrNumber2 = [11, 22, 33, 44, 55];
    return array.concat(arrNumber2);
}

console.log('Mảng in theo thứ tự index tăng dần :');
console.log(indexAZ(arrNumber));

console.log('Mảng in theo thứ tự index giảm dần :');
console.log(indexZA(arrNumber));

console.log('xoá phần tử cuối :');
console.log(xoaCuoi(arrNumber));
console.log('Mảng còn lại :');
console.log(indexAZ(arrNumber));

console.log(' xoá phần tử đầu :');
console.log(xoaDau(arrNumber));
console.log('Mảng còn lại:');
console.log(indexAZ(arrNumber));

console.log(' Độ dài mảng sau khi thêm :');
console.log(themCuoi(arrNumber));
console.log('Mảng sau khi thêm phần tử cuối :');
console.log(indexAZ(arrNumber));

console.log('Độ dài mảng sau khi thêm :');
console.log(themDau(arrNumber));
console.log('Mảng sau khi thêm phần tử đầu:');
console.log(indexAZ(arrNumber));

console.log('Mảng mới tạo :');
console.log(catThemMang(arrNumber));
console.log('Mảng sau khi bị cắt');
console.log(indexAZ(arrNumber));

chenPT(arrNumber);
console.log('Mảng sau khi chèn');
console.log(indexAZ(arrNumber));

thayThePT(arrNumber);
console.log('Mảng sau khi thay thế');
console.log(indexAZ(arrNumber));


console.log('Mảng mới copy được ');
console.log(copyMang(arrNumber));
console.log('Mảng sau khi copy ');
console.log(indexAZ(arrNumber));

console.log('Mảng mới copy được ');
console.log(copyMang2(arrNumber));
console.log('Mảng sau khi copy ');
console.log(indexAZ(arrNumber));

console.log('Mảng sau khi nối ');
console.log(noiMang(arrNumber));


