
//dùm hàm có tham số, truyền tham số vào cố định

function giaiPT(a, b) {
    //khai báo biến
    var x;
    //xuất pt vừa nhập
    console.log('Phương trình  là ' + a + 'x + ' + b + ' = 0');
    //xử lý
    if (a == 0) {

        if (b != 0) {
            console.log('Phương trình vô nghiệm.');
        } else {
            console.log('Phương trình có vô số nghiệm');
        }
    } else {
        x = -b / a;
        var nghiem = x.toFixed(2);
        // làm tròn 2 chữ số thập phân 
        // x = Math.round((x + Number.EPSILON) * 100) / 100;
        console.log('Phương trình có 1 nghiệm duy nhất là X = ' + nghiem);

    }

}
var a = prompt('Nhập vào só A :');
var b = prompt('Nhập vào số B :');
a = Number(a);
b = Number(b);


giaiPT(a, b);