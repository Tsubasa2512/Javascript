/*
Lý Thuyết :
1. forEach()  duyệt qua  tất cả các phần tử
2. every() duyệt qua tất cả các phần tử kiểm tra thử có thoải điều kiện  không
    dừng lại ở vị trí  đầu tiên khi điều kiện sai.
3. some()  kiểm tra phần tử trong mảng có thoã điều khiện không
            chỉ cần 1 phần tử  thoã mãn điều kiện là được
            (ngược lại vs every)
4. find()  tìm  phần từ trong mảng ( chỉ tìm được  1 đối tượng đầu tiên)

5.filter() tìm tất cả các phần tử

6.map()  muốn chỉnh sửa thay đổi  một ojecbt của mảng
        không thay đổi số lượng ojecbt của mảng

7.reduce() duyệt qua các phần tử mảng và xử lý function bên trong reduce()
    2 tham số , thứ nhất là fuction, thứ 2 là giá trị khởi tạo lưu trữ
    có thể có hoặc không tham số thứ 2, nếu k có thì nó sẽ lấy giá trị đầu tiên của mảng
    ---------------------------------------------------------
  8.  includes() kiểm tra 1 từ có trong chuỗi,array // trả về true false
  tham số dâud tiên là từ, có thể có tham số thứ 2. 
  tham số thứ 2 là vị trí bắt đầu tìm 
 vd  về chuỗi :
  var titke = "Resposive web design";
  console.log(title.includes("web"))
vd  về mảng :
    var courses =[" Javascripts", "PHP", "Dart"];
    console.log(courses.includes("Javascripts"))

*/
//mang
/*

var students = [
    {
        id: 1,
        name: "Dinh",
        address: "quang nam",
        coin: 200
    },
    {
        id: 2,
        name: "Nam",
        address: "quang nam",
        coin: 100
    },
    {
        id: 3,
        name: "Tan",
        address: "da nang",
        coin: 200
    },
    {
        id: 4,
        name: "Ninh",
        address: "hue",
        coin: 300
    },
    {
        id: 5,
        name: "Tan",
        address: "hue",
        coin: 500

    }
];
*/
//--1--
/*
students.forEach(Function(student,index){
    console.log(index,student);

});
*/
// --2--
/*

var isQN = students.every( function (student,index){
    console.log(index)
    return student.address === "quang nam";
});
console.log(isQN) //false
*/
//--3--
/*
var isDN = students.some( function (student,index){
    console.log(index) //vị trí tìm thấy, dừng
    return student.address ==="da nang";
});
console.log(isDN)   // true
*/
//--4--
/*
var isName = students.find( function (student,index){
    console.log(index) //vị trí tìm thấy, dừng
    return student.name ==="Tan";
});
console.log(isName)   // 2
                      // id: 3,
                         name: "Tan",
                         address: "da nang"
*/
//--5--
/*
var ktTen = students.filter( function (student,index){
    //console.log(index) //vị trí tìm thấy, dừng
    return student.name ==="Tan";
});
console.log(ktTen)   // (2) // tìm thấy 2 phần tử
                      // id: 3,
                         name: "Tan",
                         address: "da nang"
                         id: 5,
                         name: "Tan",
                         address: "hue"
*/
//--6--
/*
function changed(student){
    return {
        id: student.id,
        name : `Nguyen Van:${student.name} `,
        address: student.address,
        stt:`STT : ${student.id}`
    };
 }
var newStudents = students.map( student)
//(tham số thứ 2) có thể thêm index vào changed để xem vị trí ojecbt
// có thể thêm tham số thứ ba là originArray để xem mảng cũ
//hàm changed trả về cái gì thì newStudents trả về giá trị đó trong mảng
console.log(newStudents)

// output
    {
        id: 1,
        name: " Nguyen Van Dinh",
        address: "quang nam",
        stt: "STt :1"
    },
    {
        id: 2,
        name: " Nguyen Van Nam",
        address: "quang nam",
        stt: "STt :2"
    },
    {
        id: 3,
        name: "Nguyen Van Tan",
        address: "da nang",
        stt: "STt :3"
    },
    {
        id: 4,
        name: "Nguyen Van Ninh",
        address: "hue",
        stt: "STt :4"
    },
    {
        id: 5,
        name: "Nguyen Van Tan",
        address: "hue",
        stt: "STt :5"
*/
//7
/*


//0 là khởi tạo giá trị biến lưuu trữ chỉ chạy lần đầu tiên
var totalCoin = students.reduce(function (bienLuuTru,giaTriHienTai,viTriHienTai,mangHienTai){
return bienLuuTru +giaTriHienTai.coin;
},0)

*/




/*
bài tập 108
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
];
function getMostFavoriteSport(array) {
    var bigLike = array.filter(function (arr, index) {
        return arr.like > 5;
    });
    return bigLike;
}


// Kỳ vọng
console.log(getMostFavoriteSport(sports))
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]
*/
/*
bài 111

var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
function tinhHc(bienLT, giaTriHT) {
    return bienLT + giaTriHT.gold;
}
function getTotalGold(array) {
    return array.reduce(tinhHc, 0)

};

// Expected results:
console.log(getTotalGold(sports)) // Output: 23













*/