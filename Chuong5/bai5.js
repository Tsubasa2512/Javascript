var arrayNumber = ['111', '222', '333', '444'];

//hàm xuất mảng

function xuatMang(array) {

    console.log(array);


}

// Hàm tìm chỉ số của một số trong mảng
function searchIndex(number, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == number) return i;
    }
    return -1;
}

//kiểm tra phần tử trong mảng
function xoaPT(array) {
    var vitri;
    vitri = searchIndex(222, array);
    if (vitri !== -1) {
        array.splice(vitri, 1);
    }
}

function searchViTri(number, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) return i;
    }
    return -1;
}

//thay thế 
function thayThe(array) {
    var xy;
    xy = searchViTri(444, array);
    if (xy !== -1) {
        array.splice(xy, 1, '555');
    }

}

function catMang(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(Number(array[i]));
    }
}




//gọi hàm
xuatMang(arrayNumber);
xoaPT(arrayNumber);
console.log("Mang sau khi xoá :");
xuatMang(arrayNumber);
thayThe(arrayNumber);
console.log("Mảng sau khi thay thế là :");
xuatMang(arrayNumber);
catMang(arrayNumber);