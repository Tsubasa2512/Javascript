var array1 = [];
var n;
n = prompt('Nhập số phần tử của mảng :');


function nhapMang(array, n) {
    for (var i = 0; i < n; i++) {
        i = Number(i);
        array[i] = prompt('Nhập phần tử thứ ' +(i + 1));
    }
    return array;
}

function xuatMang(array) {

    console.log(array);

}
function hoanVi(a,b){
    var temp = 0;
     temp=a;
     a=b;
     b=temp;
}
function daoMang(array,n) {
    var arrayTemp = [];
    var temp;
    for (var i = 0; i <=n; i++) {
        hoanVi(array[i],array[n-1]);
        console.log(array);
       
    }
    return (arrayTemp);
}


nhapMang(array1, n);
xuatMang(array1);
daoMang(array1,n);
// xuatMang(array1);
