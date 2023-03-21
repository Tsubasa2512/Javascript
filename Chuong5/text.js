// function getNextYear() {
//     var year = new Date();
//     var getNextYear = year.getFullYear() + 1;
//     return getNextYear;
// }
// console.log(getNextYear());



//đối tượng Math

// Math.PI trả về số Pi : 3,14

//Math.round() làm tròn số : ưu tiên là làm tròn lên , 1,5 thì lên 2
//1.49 thì 1


//Math.abs() giá trị tuyệt đối 

// Math.ceil() làm tròn trên ví dụ 4,000001 = 5
//Math.floor() làm trò dưới ví dụ 4,9 = 4

//Math.random() tạo số thập phân ngẫu nhiêu

//ví dụ console.log(Math.floor(Math.random()*100))

var random = Math.floor(Math.random()*5);

var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];
console.log(bonus[random]);


// random tỉ lệ

var tiLe = Math.floor(Math.random()*100);

if( tiLe<5){
    console.log('Đập thành công');
}
else{
    console.log('Đập thất bại');
}


//Math.min() -- Math.max()

// var mang=[1,2,3,4,5,6,7,8,100,-999];

console.log(Math.min(1,2,3,4,5,6,7,8,9,-99,1000));
console.log(Math.max(1,2,3,4,5,6,7,8,9,-99,1000));


//lấy phần tử ngẫu nhiên của mảng
function getRandomItem (x){
    var doDai = x.length-1;
     var soNgauNhien= Math.floor(Math.random()*doDai);
     return x[soNgauNhien];
    
}

var mang = [1,2,3,4,5,6,7];

console.log(getRandomItem(mang));