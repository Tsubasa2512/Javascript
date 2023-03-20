// Tạo danh sách số ngẫu nhiên
// Cập nhật tháng 4 năm 2022

// Để vượt qua thử thách này, bạn cần kết hợp nhiều kiến thức đã học như: làm việc với array, đối tượng Math và loop.

// 👉 Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.

// Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.



// Làm bài
function getRandNumbers(min, max, length) {
    var mang = [];
    for (var i = 0; i < length; i++) {
        mang[i] = Math.random() * (max - min) + min;
    }
    return mang;
}

getRandNumbers();

/**
 * Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
 * luôn có điểm dừng, trình duyệt của bạn sẽ bị treo
 * nếu vòng lặp không có điểm dừng.
 * 
 * VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
 * VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
 * là 2 vòng lặp không có điểm dừng (lặp vô hạn)
 * 
 * => Treo trình duyệt!!!
 */



//Tính tổng các số trong dãy số
function getTotal(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Expected results
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17


//tính tổng giá khoá học

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(orders) {
    var ordersLength = orders.length;
    var total = 0;
    for (var i = 0; i < ordersLength; i++) {
        total = total + orders[i].price;
    } return total;

}


// Expected results:
getTotal(orders) // Output: 8700000




//sử dụng hàm for in 
function run(object) {
    var mang = [];
    for (var key in object) {
        mang.push(`Thuộc tính ${key} có giá trị  ${object[key]}`);
    }
    return mang;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]