var array1 = [];
var n;
n = prompt('Nhập số phần tử của mảng :');


function nhapMang(array, n) {
    for (var i = 0; i < n; i++) {
        i = Number(i);
        array[i] = prompt('Nhập phần tử thứ ' + (i + 1));
    }
    return array;
}

function xuatMang(array) {

    console.log(array);

}
function hoanVi(a, b) {
    var temp = 0;
    temp = a;
    a = b;
    b = temp;
}
function daoMang(array) {
    //hàm đổi ngược mảng
    return array.reverse();
}
function sapXep(array){
    //hàm sort để sắp xếp mảng
    return array.sort();
}


nhapMang(array1, n);
console.log("Mảng vừa nhập là :");
xuatMang(array1);
daoMang(array1);
console.log("Mảng sau khi đảo ngược là :");
xuatMang(array1);
sapXep(array1);
console.log("Mảng sau khi sắp xếp là :");
xuatMang(array1);