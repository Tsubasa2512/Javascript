const students = [
    {
        id: 1,
        name: "Dinh",
        address: "hue"
    },
    {
        id: 2,
        name: "Nam",
        address: "quang nam"
    },
    {
        id: 3,
        name: "Tan",
        address: "da nang"
    },
    {
        id: 4,
        name: "Hung",
        address: "hue"
    },
    {
        id: 5,
        name: "Tri",
        address: "quang tri"
    },
    {
        id: 6,
        name: "Anh",
        address: "hue"
    },
    {
        id: 7,
        name: "Binh",
        address: "da nang"
    }
];
//khai báo biến
var getName = document.getElementById('name');
console.log(getName.innerText);
var getAddress = document.getElementById('address');
var getbtn = document.getElementById('them');

function addArray(arr) {
    var lengthArray = arr.length;
    var arrT = [];
    getbtn.onclick = function () {

        if (getName.value != "" || getAddress.value != "") {

            // console.log(getName.value);
            arrT.id = lengthArray + 1;
            arrT.name = getName.value;
            arrT.address = getAddress.value;
            arr.unshift(arrT);
            console.log(arr);
            render(arr);
            //sau khi thêm mới xoá giá trị ở 2 ô input
            getName.value = "";
            getAddress.value = "";
            // alert('Đã thêm mới thành công');
        }
        else {
            alert('Không được để trống ');
          
        }

    };
};

function updateArray(id) {

    var st = students.find(function (el) {
        return el.id == id;
    })
    getName.value = st.name;
    getAddress.value = st.address;
    getbtn.innerText = `Sửa`;
    getbtn.onclick = function () {
        console.log(st);
        st.name = getName.value;
        st.address = getAddress.value;
        //log ra coi thử
        console.log(st);
        render(students);
        //sau khi thêm mới xoá giá trị ở 2 ô input
        getName.value = "";
        getAddress.value = "";
        // alert('Đã cập nhật thành công');
    }

};

function deleteArray(id) {
    var st = students.findIndex(function (e) {
        return e.id == id;
    });
    // console.log(st);
    var YN = confirm(`Bạn có chắc muốn xoá người tên [ ${students[st].name} ] này ? `);
    if (YN == true) {
        students.splice(st, 1);
        //in ra để coi thử
        console.log(students);
        render(students);
    };
};

function render(arr) {
    var ulElement = document.querySelector('#list-students');
    //làm mới mảng
    ulElement.innerHTML = '';
    arr.forEach(function (list) {
        var liElement = document.createElement('li');
        liElement.innerHTML =
            `
                <h1> Name :${list.name} </h1>
                <p>Address :${list.address}</p>
                <button onclick="updateArray(${list.id})">Sửa</button>
                <button onclick="deleteArray(${list.id})">Xoá</button>
            `;

        ulElement.appendChild(liElement);
    });


};
 //bắt ô input name
 var nullName = document.querySelector('input[name="name"]');
 //bắt ô input address
 var nullAddress = document.querySelector('input[name="address"]');
 
function xuLyError(error){
   var errorMess = error.parentElement.querySelector('.message');
   error.onblur= function(){
    if(error.value===''){
        errorMess.setAttribute('style','display :block; color : yellow;background-color:blue; border-radius:5%; width:160px; font-style : italic');
        errorMess.innerText='Không được để trống !!!';
    }
    else{
        errorMess.setAttribute('style','display:none');
    }
   }


}

// xuất ra màn hình
render(students);
// thêm vào Aray
addArray(students);

xuLyError(nullName);
xuLyError(nullAddress)