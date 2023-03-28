const tbElement = document.querySelector('#tbl');

// Tiêu đề
const tr1Element = document.createElement('tr');

const th1Element = document.createElement('th');
th1Element.innerText = 'ID';
tr1Element.appendChild(th1Element);
const th2Element = document.createElement('th');
th2Element.innerText = 'Tên hoa';
tr1Element.appendChild(th2Element);
const th3Element = document.createElement('th');
th3Element.innerText = 'Loại hoa';
tr1Element.appendChild(th3Element);
const th4Element = document.createElement('th');
th4Element.innerText = 'Hình ảnh';
tr1Element.appendChild(th4Element);
const th5Element = document.createElement('th');
th5Element.innerText = 'Chức năng';
tr1Element.appendChild(th5Element);
tbElement.appendChild(tr1Element);

const listHoa = [
    {
        id: 1,
        tenHoa: 'Hoa Phong Lan',
        loaiHoa: 'Khai trương',
        hinhAnh: 'images/tmp/hoa1.jpg'
    },
    {
        id: 2,
        tenHoa: 'Hoa tỷ muội',
        loaiHoa: 'Khai trương',
        hinhAnh: 'images/tmp/hoa2.jpg'
    },
    {
        id: 3,
        tenHoa: 'Hoa Violet',
        loaiHoa: 'Hoa kỷ niệm',
        hinhAnh: 'images/tmp/hoa3.jpg'
    },
    {
        id: 4,
        tenHoa: 'Hoa thủy tiên',
        loaiHoa: 'Hoa tình yêu',
        hinhAnh: 'images/tmp/hoa4.jpg'
    },
    {
        id: 5,
        tenHoa: 'Hoa cẩm chướng',
        loaiHoa: 'Hoa hạnh phúc',
        hinhAnh: 'images/tmp/hoa5.jpg'
    }
]

// Nội dung
listHoa.forEach(function (hoa) {
    const tr2Element = document.createElement('tr');
    const td1Element = document.createElement('td');
    td1Element.innerText = hoa.id;
    tr2Element.appendChild(td1Element);
    const td2Element = document.createElement('td');
    td2Element.innerText = hoa.tenHoa;
    tr2Element.appendChild(td2Element);
    const td3Element = document.createElement('td');
    td3Element.innerText = hoa.loaiHoa;
    tr2Element.appendChild(td3Element);
    const td4Element = document.createElement('td');
    const img1Element = document.createElement('img');
    img1Element.src = hoa.hinhAnh;
    img1Element.alt = hoa.hinhAnh;

    td4Element.appendChild(img1Element);
    tr2Element.appendChild(td4Element);

    const td5Element = document.createElement('td');
    const a1Element = document.createElement('a');
    a1Element.href = '#';
    a1Element.title = 'Sửa';
    a1Element.innerText = 'Sửa';
    const img2Element = document.createElement('img');
    img2Element.src = 'images/pencil.gif';
    img2Element.alt = 'images/pencil.gif';
    a1Element.appendChild(img2Element);
    td5Element.appendChild(a1Element);

    const a2Element = document.createElement('a');
    a2Element.href = '#';
    a2Element.title = 'Xóa';
    a2Element.innerText = 'Xóa';
    const img3Element = document.createElement('img');
    img3Element.src = 'images/bin.gif';
    img3Element.alt = 'images/bin.gif';
    a2Element.appendChild(img3Element);
    td5Element.appendChild(a2Element);

    tr2Element.appendChild(td5Element);

    tbElement.appendChild(tr2Element);

})