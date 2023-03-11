//hàm làm tròn
function hamLamTron(nghiem) {
    return nghiem = Math.round((nghiem + Number.EPSILON) * 100) / 100;
}


//hàm giải Pt bậc 1

function giaiPT() {
    //khai báo biến
    var a1 = prompt(('Nhập vào số a :'));
    var b1 = prompt(('nhập vào số b :'));
    var x0;

    a1 = Number(a1);
    b1 = Number(b1);
    //xuất pt vừa nhập
    console.log('Phương trình  là ' + a1 + 'x + ' + b1 + ' = 0');
    //xử lý
    if (a1 == 0) {

        if (b1 != 0) {
            console.log('Phương trình vô nghiệm.');
        } else {
            console.log('Phương trình có vô số nghiệm');
        }
    } else {
        x0 = -b1 / a1;
        // làm tròn 2 chữ số thập phân 
        x0 = hamLamTron(x0);
        console.log('Phương trình có 1 nghiệm duy nhất là X = ' + x0);

    }

};
//hàm giải pt bậc 2
function giaiPTBac2() {
    //khai báo biến
    var a = prompt(('Nhập vào số A: '));
    var b = prompt(('Nhập vào số B: '));
    var c = prompt(('Nhập vào số C: '));

    var deta = b * b - 4 * a * c;
    var x1 = '';
    var x2 = '';
    var x = '';
    //xuất pt mới nhập
    console.log('Phương trình  là ' + a + 'X^2  + ' + b + "X + " + c + " = 0");
    //xử lý
    if (a == 0) {
        if (b != 0) {
            x1 = -c / b;
            console.log('PT có nghiệm :' + (x1 = hamLamTron(x1)));
        }
        else {
            console.log('PT không có nghiệm.');
        }
    }
    else if (b == 0) {
        if ((-c / a) > 0) {
            x1 = Math.sqrt(-c / a);
            console.log('PT có nghiệm X1= ' + (x1 = hamLamTron(x1)));
            x2 = -(Math.sqrt(-c / a));
            console.log('X2 :' + (x2 = hamLamTron(x2)));
        }
        else if (-c / a == 0) {
            console.log('PT có nghiệm X = 0 ');
        } else {
            console.log('PT vô nghiệm');
        }

    }
    else if (c == 0) {
        (x1 = -b / a);
        console.log('PT có nghiệm kép X = ' + (x1 = hamLamTron(x1)));
    } else {
        if (deta > 0) {
            (-b + (Math.sqrt(deta))) / (2 * a);
            console.log('PT có nghiệm X1 = ' + (x1 = hamLamTron(x1)));
            (-b - (Math.sqrt(deta))) / (2 * a);
            console.log('PT có nghiệm X2 = ' + (x2 = hamLamTron(x2)));
        }
        else if (deta == 0) {
            x1 = (-b / 2 * a);
            console.log('PT có nghiệm kép X = ' + (x1 = hamLamTron(x1)));;
        }
        else {
            console.log('PT vô nghiệm.')
        }
    }


};


// menu 

function menu() {

    var nhap = prompt('Nhập 1 để giải PT bậc 1 \n Nhập 2 để giải PT bậc 2\nNhập 3 để thoát');
    if (nhap == 1) {
        alert('Đây là chương trình giải PT bậc 1');
        giaiPT();
    }
    if (nhap == 2) {
        alert('Đây là chương trình giải PT bậc 2');
        giaiPTBac2();
    }
    if (nhap == 3) {
        alert('Good Bye');
    }
}
menu();