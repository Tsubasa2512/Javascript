// viết thông báo
// alert('Hello ')

var fullName='Lê Xuân Tạo';
var age =28;

// alert(fullName);
// alert(age);
/* Một số hàm built-in
Alert : hiện tb
Console:  Hiện tb
Confirm : Xác nhận
Prompt : xác nhận có hộp thoại
Set timeout : Thoi gian để đoạn code đc chạy sau khi bắt đầu ( chỉ chạy 1 lần)
Set interval : thời gian để đoạn code đc chạy sau khi bắt đầu ( liên tục)
 */

var Hello ='Viet Nam';
console.error(Hello);

// confirm('Xác nhận tuổi' );
prompt(' Bạn bao nhiêu tuổi');

setTimeout( function() {
    alert('Đã hết 1s')
},1000)

setInterval(function(){
    console.log('Đây là Interval ');
},1000);