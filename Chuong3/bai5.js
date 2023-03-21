// khai báo biến

var a = prompt('Nhập vào số A: ');
var b = prompt(' Nhập vào số B: ');
var c = prompt('Nhập vào số C : ');
var deta = b * b - 4 * a * c;
var x1 = '';
var x2 = '';
var x = '';
// định dạng sang số 
a = Number(a);
b = Number(b);
c = Number(c);
deta = Number(deta);
x1 = Number(x1);
x2 = Number(x2);
x = Number(x);

console.log('Phương trình bạn vừa nhập là ' + a + 'X^2  + ' + b + "X + " + c + " = 0");


// xử lí
if (a == 0) {
    if (b != 0) {
        x1 = -c / b;
        console.log('PT có nghiệm :' + (x1 = Math.round((x1 + Number.EPSILON) * 100) / 100));
    }
    else {
        console.log('PT không có nghiệm.');
    }
}
else if (b == 0) {
    if (-c / a > 0) {
        x1 = Math.sqrt(-c / a);
        console.log('PT có nghiệm X1= ' + (x1 = Math.round((x1 + Number.EPSILON) * 100) / 100));
        x2 = -(Math.sqrt(-c / a));
        console.log('X2 :' + (x2 = Math.round((x2 + Number.EPSILON) * 100) / 100));
    }
    else if (-c / a == 0) {
        console.log('PT có nghiệm X = 0 ');
    } else {
        console.log('PT vô nghiệm');
    }

}
else if (c == 0) {
    (x1 = -b / a);
    console.log('PT có nghiệm kép X = ' + (x1 = Math.round((x1 + Number.EPSILON) * 100) / 100));
} else {
    if (deta > 0) {
        (-b + (Math.sqrt(deta))) / (2 * a);
        console.log('PT có nghiệm X1 = ' + (x1 = Math.round((x1 + Number.EPSILON) * 100) / 100));
        (-b - (Math.sqrt(deta))) / (2 * a);
        console.log('PT có nghiệm X2 = ' + (x2 = Math.round((x2 + Number.EPSILON) * 100) / 100));
    }
    else if (deta == 0) {
        x1 = (-b / 2 * a);
        console.log('PT có nghiệm kép X = ' + (x1 = Math.round((x1 + Number.EPSILON) * 100) / 100));;
    }
    else {
        console.log('PT vô nghiệm.')
    }
}

