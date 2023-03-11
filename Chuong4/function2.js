// đặt trung tên function  thì function cùng tên sau đè lên function trước
// có thể khai báo biến, hàm trong hàm
//những gì trong hàm có tính chất private( riêng tư) 

function myFunction() {

    var a = 'Đây là khai báo biến trong hàm';
    console.log(a);

    function myFunction2() {
        console.log('Đây là hàm trong hàm');
    }
    myFunction2();
}

myFunction();



/// các loại Function 

//Declaration function

function showMessage() {
    console.log('đây là Declaration Function');
}

showMessage();

var showMessage2 = function () {
    console.log('Đây là Expression function');



}
showMessage2()