
//HTML DOM  : Documents Ojecbt Model

/**
 * Có 3 thành phần :
 * 
 * 1. Element ( thẻ)
 * 2. Attribute ( các thuộc tính của thẻ)
 * 3. Text ( Nội dung)
 * 
 */

//Node(điểm giao nhau) 



// ----------------------------------- 
// Javascript : Browser  | Server (NodeJS)

//API : Application programming interface

//Browser : HTML -> DOM -> WEB API

//--------------------
//.write()  ghi vào body
//  document.write("Helo mọi người")


//Get element methods

// 1. Element : ID , class,tag,CSS ReadableStreamDefaultController, HTML HTMLAllCollection;

/**
 * Sử dụng các biến đã cho sẵn dưới đây
 */
console.log("--------------BÀi 135---Thực hành get element")
var productsListElement = document.querySelector('.products-list');
var firstProductElement = document.querySelector('.product');
var buttonElements = document.querySelectorAll('button');

//2.  DOM Attribute

var headingElement = document.querySelector('h1');
//cách 1 là set thủ công 
// headingElement.title='Heading';

//thêm trực tiếp vào h1 bằng phương thức 
headingElement.setAttribute('class', 'heading-test');
headingElement.setAttribute('data', 'test-data');
//nếu đặt thuộc tính không hợp lệ tự đặt  thì dùng getAttribute
//lấy ra giá trị dùng getAttribute
console.log(headingElement.getAttribute('class'));
console.log(headingElement.getAttribute('data'));

//nếu đặt thuộc tính hợp lệ vs thẻ thì ta có thể dùng
headingElement.title = 'title test';
console.log(headingElement.setAttribute);


//bài tập
/**
 * Thêm thuộc tính title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
Thêm thuộc tính data-title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
Thêm thuộc tính href có giá trị "https://fullstack.edu.vn/" cho thẻ a.
Thêm thuộc tính target có giá trị "_blank" cho thẻ a.

var headingElement = document.querySelector('h1');
var headingElement1 = document.querySelector('a');

headingElement.title = ("F8 - Học lập trình để đi làm");
headingElement.setAttribute("data-title", "F8 - Học lập trình để đi làm");

headingElement1.href = ("https://fullstack.edu.vn/");
headingElement1.setAttribute("target", "_blank");
 */

//3 text
//innerText: lấy nội dung những gì mình nhìn thấy
//textContent: lấy ra nguyên bản  nội dung text node
var headingElement2 = document.querySelector('.heading-test');

//sử dụng innerText và textContent để lấy text
console.log(headingElement2.innerText);
console.log(headingElement2.textContent);

//chỉnh sửa
headingElement2.innerText = "New Heading";
headingElement2.textContent = 'New Heading text';
headingElement2.innerText = `

Hello world

`;

headingElement2.textContent = `

Goodbye 😭

`;


// thêm 1 element vào  trong element 

var boxElement = document.querySelector('.box');
//kiểm tra thử in đúng k
console.log(boxElement);

// thêm vào element 
//innerHTML
//outerHTML

boxElement.innerHTML = '<h1>Heading</h1>';
//  hiển thị ra 
console.log(document.querySelector('h1').innerText);

boxElement.innerHTML = '<h1 title ="Heading text>New Heading TEST</h1>';
console.log(boxElement.innerHTML);


//outerHTML

boxElement.outerHTML = '<span>Test</span>';
console.log(boxElement.innerHTML);

console.log("------------Bài 145-----");
/**
 *  var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var them = document.querySelector('ul');
    var arr = [];
    var dodai = courses.length;
    for (var i = 0; i < dodai; i++) {
        var setItem = `<li>${courses[i]}</li>`;
        arr.push(setItem);
    }
    them.innerHTML = arr.join("<br>");
    return them;

}

render(courses);

 */

//thêm style

//DOM style
// var boxEdit = document.querySelector('.box');


// cách 1. set từng cái 
boxElement.style.width = "100px";
boxElement.style.height = "100px";

boxElement.style.backgroundColor = "red";

//cách 2 thêm 1 lần nhiều thuộc tính
Object.assign(boxElement, {

    width: "200px",
    height: "100px",
    backgroundColor: "green"
});

//lấy ra kích thước để của style 
console.log(boxElement.style.width);
console.log(boxElement.style);


//ClassList property

//add :thêm classs vào element
//contains : kiểm tra  một classs có nằm trong element này hay k
//remove : xoá bỏ class
//toggle : nếu có class đó thì xoá, k có thì thêm vào 
var boxElement3 = document.querySelector(".box-2")

console.log(boxElement3.classList);
console.log(boxElement3.classList.length);
console.log(boxElement3.classList.value);
//thêm vào
boxElement3.classList.add('red', 'blue');
//kiểm tra tồn tại class trong element box k 
//contains
console.log(boxElement3.classList.contains('red'));
console.log(boxElement3.classList.contains('green'));

//xoá class
//  boxElement3.classList.remove('red');

//chạy để xem  // ở đây set 3s
//   setTimeout(()=>{
//  boxElement3.classList.remove('red');
//   },3000);

setInterval(() => {
    boxElement3.classList.toggle('red');
}, 500);
setInterval(() => {
    boxElement3.classList.toggle('blue');
}, 1000);

console.log("----bài 154---");
//      var themBox = document.querySelectorAll('div');
// themBox.forEach(function (item) {
//     item.classList.add('box');
// });


// DOM events 

// 1. Attribute events : bắt sự kiện ( làm bên html)
// 2. Assign event using the element node : gán vào

var h1Element = document.querySelector('h2');
h1Element.onclick = function () {
    console.log(h1Element);
}
var h2Elements = document.querySelectorAll('h2');
var dodai = h2Elements.length;
for (var i = 0; i < dodai; i++) {
    h2Elements[i].onclick = function (e) {
        console.log(e.target);
    };
};

// ví dụ 
//  1. Input / select 
//  2. key up /down 
//xử lý input
var inputElement = document.querySelector('input[type="text"]');
//chỉ khi thay đổi thì mới xử lý
inputElement.onchange = function (e) {
    console.log(e.target.value);
};

//ghi đến đâu đọc đến đó 
inputElement.oninput = function (e) {
    console.log(e.target.value);
};
//xử lý checked
var inputElement2 = document.querySelector('input[type="checkbox"]');
inputElement2.onchange = function (e) {
    console.log(e.target.checked);
}
//xử lý select
var inputElement2 = document.querySelector('select');
inputElement2.onchange = function (e) {
    console.log(e.target.value);
}

//  keyup là đọc tức thì
//  keydown là ấn phím thứ 2 ms đọc 
//  keypress là giữ phím 
var keyElement = document.querySelector('input[type="text"]');
keyElement.onkeyup = function (e) {
    // which là cái mã của bàn phím 
    console.log(e.which);

    switch (e.which) {
        case 27: //27 là esc
            console.log('Exit');
            break;

        case 37: //37 là <--
            console.log('Left');
            break;

        case 38: //38 là ^ phím lên trên
            console.log('Top');
            break;

        case 39: //39 là ->
            console.log('Right');
            break;

        case 40: //40 là xuống dưới
            console.log('Bottom');
            break;
    }
}

//cách 2
document.onkeydown = function (e) {
    switch (e.which) {
        case 27: console.log("Thoát chương trình");
            break;
    }
}


// DOM EVENTS 
// 1. prevenDefault loại bỏ hành vi mặc định của trình duyệt trên thẻ HTML
// 2. stopPropagation loại bỏ nổi bọt


// var aElement = document.querySelectorAll('a');
//  hoặc 
var aElement = document.links;
for (var i = 0; i < aElement.length; i++) {
    aElement[i].onclick = function (e) {
        //startsWith là bắt đầu bằng  ?
        if (!e.target.href.startsWith('https://f8.edu.vn')) {
            // nếu k bắt đầu bằng F8 thì  ko chuyển trang 
            //ngăn chặn  mặc định của thẻ a
            e.preventDefault();
        }
    }
}

// ví dụ 2 
//  dòng 74 bên html 

var ulElement = document.querySelector('ul');
ulElement.onmousedown = function (e) {
    e.preventDefault();
}

//ví dụ về stopPropagation dòng 89 

document.querySelector('div').onclick =
    function () {
        console.log('DIV');
    }

document.querySelector('button').onclick =
    function (e) {
        //bỏ trạng thái nổi bột
        e.stopPropagation();
        console.log('Click me !!!');
    }



