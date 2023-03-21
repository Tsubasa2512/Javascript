
function soFibonacci(x) {

    var n1 = 0, n2 = 1, nextTerm;
    for (var i = 1; i <= x; i++) {
        //in ra dãy số Fibonacci 
        //console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;

    } if (x == n1) {
        console.log('Số vừa nhập ( ' + x + ' ) là số fibonacci');

    } else {
        console.log('Số vừa nhập ( ' + x + ' ) không phải là số fibonacci');
    }
}

var a = prompt('Nhập số cần kiểm tra : ');
soFibonacci(a);