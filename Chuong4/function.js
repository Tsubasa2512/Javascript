function writeLog() {
    var myString = ' ';

    //giải thích dòng for 
    // lấy value từ arguments( đọc các giá trị được truyền vào, nhập vào) chuyền vào layGiaTri
    for (var layGiaTri of arguments) {
        myString += `${layGiaTri} - `;
    }
    console.log(myString);
}

writeLog('Day la gia tri 1', 'Day la gia tri 2', ' Day la gia tri 3');