//khai bao biến

var a = prompt('Nhập vào số a :');
var b = prompt('nhập vào số b :');
var x = '';
// định dạng sang kiểu số
a = Number(a);
b = Number(b);
x = Number(x);



console.log('Phương trình bạn vừa nhập là ' + a + 'x + ' + b + ' = 0');

// xử lý 

if (a == 0) {

    if (b != 0) {
        console.log('Phương trình vô nghiệm.');
    } else {
        console.log('Phương trình có vô số nghiệm');
    }
} else {
    x = -b / a;
    // làm tròn 2 chữ số thập phân 
    x = Math.round((x + Number.EPSILON) * 100) / 100;
    console.log('Phương trình có 1 nghiệm duy nhất là X = ' + x);

}