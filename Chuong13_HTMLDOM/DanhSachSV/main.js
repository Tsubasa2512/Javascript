const students = [
    {
        id: 1,
        name: 'Nguyen Van Teo',
        classId: 1
    },
    {
        id: 2,
        name: 'Nguyen Van Ti',
        classId: 2
    },
    {
        id: 3,
        name: 'Tran Van Tun',
        classId: 3
    },
    {
        id: 4,
        name: 'Nguyen Thi Heo',
        classId: 1
    },
    {
        id: 5,
        name: 'Le Thi Be',
        classId: 1
    }
];

const classList = [
    {
        id: 1,
        name: "CNTT"
    },
    {
        id: 2,
        name: 'DTVT'
    },
    {
        id: 3,
        name: 'THXD'
    },
    {
        id: 4,
        name: 'XDDD'
    }
];
//khái báo mảng mới
const listStudents = [];
//tìm  table
var tbl = document.querySelector('#tbl');
//tìm nút thêm
var btn = document.getElementById('addBtn');


//gộp 2 bảng thành 1 ( students  + classlist) = listStudents
students.forEach(function (student) {
    const classInfo = classList.find(function (el) {
        return el.id === student.classId;
    })
    const it = {
        id: student.id,
        studentName: student.name,
        classId: classInfo.id,
        className: classInfo.name
    }
    listStudents.push(it);
    return listStudents;
})
console.log(listStudents);
var idd = listStudents.length + 1;

//lấy giá trị id
function getClassNameById(id) {
    return classList.find(function (el) {
        return el.id === Number(id);
    }).name;
}

//render
function render(array) {
    tbl.innerHTML = '';
    //tạo thẻ tr trong bảng 
    var tr = document.createElement('tr');
    //add nội dung vào thẻ tr 
    tr.innerHTML = `
                    <th id = "idsv"> ID </th>
                    <th id = "namesv"> Tên sinh viên </th>
                    <th id = "nameclass"> Lớp </th>
                    <th id = "btn">  Chức năng </th>`;
    //cho thẻ tr là con của thẻ tbl
    tbl.appendChild(tr);
    //lọc qua mảng tìm tất cả phần tử
    array.forEach(function (el) {
        //in nội dung, kiểm tra thử 
        // console.log(el.studentName);
        var noiDung = `   
        <td> ${el.id}</td>
        <td>${el.studentName}</td>
        <td>${el.className}</td>
        
        <td>
            <button onclick="onUpdate(${el.id}, ${el.classId})">Sửa</button>
            <button onclick="onDelete(${el.id})">Xóa</button>
        </td>
        
        `;
        //add nội dung vào bảng 
        tbl.innerHTML += noiDung;
    });

}


//chọn lớp
function chonLop(array) {
    var htmlOptions = `<option value=''>-- Chọn lớp --</option>`;
    array.forEach(function (className) {
        htmlOptions += `
         <option value='${className.id}'>${className.name}</option>
     `;
        return htmlOptions;
    });
    var chon = document.querySelector('#class');

    chon.innerHTML = htmlOptions;
}





//add sv
function addStudent(array) {

    var getName = document.querySelector('input[name="name"]');
    var getClass = document.querySelector('select[name="class"]');


    idd = Number(idd);
    console.log(idd);

    var mangSV;
    var stName = document.querySelector('input[name="name"]');
    var classInfo = document.querySelector('select[name="class"]');
    render(array);
    btn.onclick = function (el) {
        el.preventDefault();
        var errorName = getName.parentElement.querySelector(' .form-message');
        var errorClass = getClass.parentElement.querySelector('.thongbao');

        if (stName.value == '' || classInfo.value == '') {

            if (stName.value == '') {

                errorName.setAttribute('style', 'display:block;color:red');
                errorName.innerText = 'Yêu lòng nhập tên SV';

            };
            if (classInfo.value == '') {
                errorClass.setAttribute('style', 'display:block;color:red');
                errorClass.innerText = 'Yêu lòng chọn lớp cho SV';

            };
        }
        else {
            //lấy id
            function layIDClass(id) {
                return classList.find(function (el) {
                    return el.id === Number(id);
                }).name;
            };

            var newArray = {
                id: idd,
                studentName: getName.value,
                classId: Number(getClass.value),
                className: layIDClass(getClass.value)
            }
            //chèn đầu
            array.push(newArray);
            mangSV = array;
            console.log(mangSV);
            stName.value = '';
            classInfo.value = '';
            errorName.innerText = '';
            errorClass.innerText = '';
            render(mangSV);
            return idd++;
        }
    }
}

//sửa thông tin
function onUpdate(id, classId) {
    // Tìm sinh viên muốn sửa
    var student = listStudents.find(function (st) {
        return st.id === id;
    })
    // var idx = student.id;
    var idx = listStudents.findIndex(function (student) {
        return student.id === id;
    })
    console.log(idx);
    console.log(student.id);
    //gắn giá trị vào ô input
    const stName = document.querySelector('input[name="name"]');
    const classInfo = document.querySelector('select[name="class"]');
    stName.value = student.studentName;
    classInfo.value = classId;
    //thay đổi nội dung btn thêm thành sửa
    var editBtnElement = document.createElement('button');
    editBtnElement.id = 'updateBtn';
    editBtnElement.innerText = 'Sửa';
    if (!document.getElementById('updateBtn')) {
        btn.parentElement.appendChild(editBtnElement);
        btn.remove();
    }

    //sự kiện click
    editBtnElement.onclick = function (el) {
        el.preventDefault();
        var edSt = {
            id,
            studentName: stName.value,
            classId: Number(classInfo.value),
            className: getClassNameById(classInfo.value)
        }
        console.log(edSt);
        listStudents.splice((idx), 1, edSt);
        editBtnElement.parentElement.appendChild(btn);
        editBtnElement.remove();
        stName.value = '';
        classInfo.value = '';
        render(listStudents);

        return idd;
    }

}

//hàm xoá
function onDelete(id) {
    if (confirm("Bạn có chắc muốn xóa?")) {
        var idx = listStudents.findIndex(function (student) {
            return student.id === id;
        })

        if (idx !== -1) {
            listStudents.splice(idx, 1);
        }
        var deleteElement = document.querySelector('.student-' + id);
        if (deleteElement) {
            deleteElement.remove();
        }
        addStudent(listStudents);
    }
    return idd;
}

// lấy giá trị ô input
var getName = document.querySelector('input[name="name"]');
// console.log(getName);
// lấy giá trị select class
var getClass = document.querySelector('select[name="class"]');
console.log(getClass);
// kiểm tra giá trị nhập vào 
function checkInput(input) {
    var errorElement = input.parentElement.querySelector('.form-message');
    input.onblur = function () {
        if (input.value === '') {
            errorElement.setAttribute('style', 'display:block;color:blue');
            // errorElement.setAttribute('style', 'display: block; color: red; font-style: italic;');
            errorElement.innerText = 'Không được để trống';
        } else {
            errorElement.setAttribute('style', 'display: none;');
        }
    }
}
function checkChoose(input) {
    var errorElement = input.parentElement.querySelector('.thongbao');
    input.onblur = function () {
        if (input.value === '') {
            errorElement.setAttribute('style', 'display:block;color:blue');
            errorElement.innerText = 'Yêu lòng chọn lớp cho SV';
        } else {
            errorElement.setAttribute('style', 'display: none;');
        }
    }
}


//gọi hàm

chonLop(classList);
addStudent(listStudents);
