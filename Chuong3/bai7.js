//khai báo biến

var a = prompt('nhập vào số a :');
var b = prompt('Nhập vào số b :');
var c = prompt('Nhập vào số c : ');
var check = true;

//kiểm tra nhập 
//Trường hợp trống
if (a == '' || a == null) {
    console.log('Vui lòng nhập  a :');
    check = false;
    a = prompt('Nhập lại số a : ');

}
if (isNaN(a)) {
    console.log('Nhập sai định dạng !!');
    check = false;
    a = prompt('Nhập lại a :');

}
if (a < 0) {
    console.log('a phải lớn hơn 0');
    check = false;
    a = prompt('Nhập lại a');
}

//kiểm tra b
if (b == '' || b == null) {
    console.log('Vui lòng nhập  b :');
    check = false;
    b = prompt('Nhập lại số b : ');

}
 if (isNaN(b)) {
    console.log('Nhập sai định dạng !!');
    check = false;
    a = prompt('Nhập lại b :');

}
 if (b < 0) {
    console.log('b phải lớn hơn 0');
    check = false;
    b = prompt('Nhập lại b');
}

// kiểm tra c 

if (c == '' || c == null) {
    console.log('Vui lòng nhập  c :');
    check = false;
    c = prompt('Nhập lại số a : ');

}
 if (isNaN(c)) {
    console.log('Nhập sai định dạng !!');
    check = false;
    c = prompt('Nhập lại c :');

}
 if (c < 0) {
    console.log('c phải lớn hơn 0');
    check = false;
    c = prompt('Nhập lại c');
}


//định dạng sang số

a = Number(a);
b = Number(b);
c = Number(c);

//xử lí 
if (check == true) {
    if (a + b > c || a + c > b || b + c > a) {
        console.log('Đây là ba đỉnh của một tam giác');
        {
            if (a * a == (b * b + c * c) || b * b == (a * a + c * c) || c * c == a * a + b * b) {
                console.log('  Và đây là tam giác vuông');
            }
            else if (a == b && a == c) {
                console.log('Và đây là tam giác đều');
            }
            else if (a == b || a == c || b == c) {
                console.log('Và đây là tam giác cân');
            }


        }
    }
    else {
        console.log('Đây không phải là ba đỉnh của một tam giác');
    }
}
