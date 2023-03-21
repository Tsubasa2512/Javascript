
var array = [];
function nhapDuLieu(arr) {
    var n = prompt("Nhập số lượng phần tử : ");
    var id;
    id = Number(id);
    var tiengAnh;
    var english;
    var vietNamese
    var tiengViet;
    for (var i = 0; i < n; i++) {
        tiengAnh = prompt("Nhập vào từ tiếng Anh thứ " + (i + 1));
        tiengViet = prompt("Nhập vào từ tiếng Việt thứ " + (i + 1));
        var newWord = {
            id: i + 1,
            english: tiengAnh,
            vietNamese: tiengViet

        }
        arr.push(newWord);

    }
    // console.log(arr)
    return arr;
}

function xuatDuLieu(arr) {
    var dodai = arr.length;
    for (var i = 0; i < dodai; i++) {
        console.log(arr[i]);
    }

}


function dichTu(arr) {
    var tuKhoa = prompt("Nhập từ mà bạn muốn dịch");
    var dodai = arr.length;
    var dem = 0;
    console.log(" Từ khoá  : " + tuKhoa);
    for (var i = 0; i < dodai; i++) {
        if (tuKhoa == arr[i].english) {
            console.log("Nghĩa của từ khoá là : " + arr[i].vietNamese);
            dem++;
        };

    }
    if (dem == 0) {
        console.log("Không tìm thấy từ khoá");
    }
}

function menu() {

    do {
        var phimChon = prompt(` Mời chọn phím :
                                1.Nhập dữ liệu.
                                2.Xuất dữ liệu.
                                3.Dịch Từ.
                                4.Thoát`);
        phimChon = Number(phimChon);
        switch (phimChon) {
            case 1:
                nhapDuLieu(array);  
                break;
            case 2:
                xuatDuLieu(array);
                break;
            case 3: dichTu(array);
                break;
            case 4:
                return 0;
        }
    }
    while (phimChon != 1 || phimChon != 2 || phimChon != 3 || phimChon ==4);
}
menu();