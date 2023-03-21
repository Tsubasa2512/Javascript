const students = [
    {
        id: 1,
        name: "Dinh",
        address: "hue"
    },
    {
        id: 2,
        name: "Nam",
        address: "quang nam"
    },
    {
        id: 3,
        name: "Tan",
        address: "da nang"
    },
    {
        id: 4,
        name: "Hung",
        address: "hue"
    },
    {
        id: 5,
        name: "Tri",
        address: "quang tri"
    },
    {
        id: 6,
        name: "Anh",
        address: "hue"
    },
    {
        id: 7,
        name: "Binh",
        address: "da nang"
    }
];

// == QUẢN LÝ SINH VIÊN ==

//1 Xem danh sách sinh viên
// 2Thêm sinh viên
// 3Sửa sinh viên
//4 Xóa sinh viên
// var doDaiMang = students.length;
function inDSSV(arr) {
    var doDaiMang = arr.length;
    var mang = [];
    for (var i = 0; i < doDaiMang; i++) {
        console.log(mang = arr[i]);
    }
    return (mang);
}


function themSV(arr) {
    // var mang = [];
    var doDaiMang = arr.length;
    var id;
    var name = prompt('Nhập tên sv :');
    var address = prompt('Nhập địa chỉ :');
    if (name == null || name == '') {
        return 0;
    }

    for (var i = doDaiMang; i <= doDaiMang; i++) {
        id = i + 1;
    }
    arr.push({ id, name, address });
    return arr;

}
function suaSV(arr) {
    var doDaiMang = arr.length;
    do {
        var idd = prompt('Nhập id của sv muốn sửa');
        idd = Number(idd);

    } while (idd > doDaiMang);
    for (var i = 0; i <= doDaiMang; i++) {
        if (idd == arr[i].id) {
            var tenCu = arr[i].name;
            var diaChiCu = arr[i].address;
            var ten = prompt('Nhập tên sv : ', tenCu);
            var diachi = prompt('Nhập địa chỉ :', diaChiCu);
            arr[i].name = ten;
            arr[i].address = diachi;
            return arr;
        }
    }
}

function searchIndex(number, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == number) return i;
    }
    return -1;
}

function xoaSV(arr) {
    var doDaiMang = arr.length;
    do {
        var idd = prompt('Nhập id của sv muốn xoá');
        idd = Number(idd);

    } while (idd > doDaiMang);
    // for (var i = 0; i < doDaiMang; i++) {
    //     if (idd == arr[i].id) {
    //         delete arr[i];
    //         console.log(arr);
    //         return arr;
    //     }
    // }



    // idd=idd-1;
    var vitri = searchIndex(idd, arr);
    arr.splice(vitri, 1);
    // console.log(vitri);
}

function menu() {

    do {
        var soChon = prompt('Mời chọn số tương ứng chức năng : \n------Menu------\n-> [ 1 ] Xem danh sách sinh viên.\n -> [ 2 ] Thêm sinh viên.\n -> [ 3 ] Sửa thông tin sinh viên.\n-> [ 4 ] Xoá thông tin sinh viên.\n Bấm phím bất kỳ để thoát. !!!');

        console.log(" \n\n-----------------------------");
        soChon = Number(soChon);
        switch (soChon) {
            case 1:
                console.log("  \n\n\nDanh sách sinh viên : ");
                inDSSV(students);
                break;
            case 2:
                themSV(students);
                console.log("  \n\n\nDanh sách sinh viên  sau khi thêm: ");
                inDSSV(students);
                break;
            case 3:
                suaSV(students);
                console.log(" \n\n\nDanh sách sinh viên  sau khi sửa ");
                inDSSV(students);
                break;
            case 4:
                xoaSV(students);
                console.log(" \n\n\nDanh sách sinh viên  sau khi xoá: ");
                inDSSV(students);
                break;
            default:
                console.log("\n\n\n\t Good bye 😭 ");
                return;
        }
    } while (soChon != 1 || soChon != 2 || soChon != 3 || soChon != 4)
}

menu();






