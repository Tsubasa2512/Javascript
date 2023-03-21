//hàm nhập số trực tiếp vào, dạng number.int
var number = Number(prompt('Nhập số N :'));
var n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

for (var i = 1; i <= number; i++) {
//in ra dãy số Fibonacci 
    //console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    
}if(number == n1){
        console.log('Số vừa nhập ( '+number+' ) là số fibonacci');
        
    }else{
        console.log('Số vừa nhập ( '+number+' ) không phải là số fibonacci');
    }