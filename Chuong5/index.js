// Làm việc vs chuỗi
var mystring = '      Đất Nước Việt Nam  V  Nước    ';
// .length -  đo độ dài chuỗi 

console.log(mystring.length);

// Find index  - tìm vị trí - chỉ trả về vị trí đầu tiên (1)
//- nếu muốn tìm giá trị ở sau thì thêm number - number phải là vị trí sau vị trí đầu tiên
//- nếu muốn tìm giá trị ở vị trí xuất hiện cuối cùng ta dùng lastIndexOf
// có thể dùng hàm Search để tìm vị trí, giống (1);
//nếu tìm không thấy giá trị thì sẽ trả về -1

console.log(mystring.indexOf('V'));
console.log(mystring.indexOf('V', 10));
console.log(mystring.lastIndexOf('V'));

//cut string - sử dụng slice
// .slice(a,b)  a là vị trí bắt đầu , b là vị trí kết thúc
//nếu k có b thì sẽ cắt hết từ vị trí a đến hết
// a = 0 thì sẽ cắt nguyên chuỗi
//nếu cắt từ phải sang trái thì a,b sẽ là âm

console.log(mystring.slice(4, 5));

// .replace thay thế từ 
// dùng /giátrij/g để tìm và thay thế tất cả các giá trị

console.log(mystring.replace('Nước', 'Ta'));;
console.log(mystring.replace(/Nước/g, 'Thuỷ'))

//viết hoa - viết thường
//uppercase() - lowercase()

console.log(mystring.toUpperCase());
console.log(mystring.toLowerCase());

//Trim - loại bỏ giá trị khoảng cách trống
console.log(mystring.length);
console.log(mystring.trim().length);

//split cắt từng phần tử của chuỗi thành mảng
//truyền vào nó điểm chung

var languages = 'JS, Java, PHP, Ruby, C#';
console.log(languages.split(', '));

//cắt từng phần tử ra  từ chuỗi 
var chuoi = 'Javascript';
console.log(chuoi.split(''));

//lấy phần tử từ chuỗi cho trước

var chuoi2 = 'Xuan Tao';
console.log(chuoi2.charAt(5));

//cách 2
console.log(chuoi2[5]);


//kiểu dữ liệu Number
//var number
/**
 * - Xác định xem giá trị đã cho có phải là số hữu hạn không. trả về boolean (true/false)
 *  number.isFinite() 
 * - xác định xem giá trị đã cho có phải là số nguyên không. trả về boolean(true/false)
 * number.isInteger()
 * - chuyển chuỗi sang số dấu phẩy động
 * number.parseFloat()
 * -chuyển chuỗi sang số nguyên
 * number.parseInt
 * - chuyển đổi và trả về số chữ số chính xác sau dấu thập phân
 * number.toFixed();
 * -chuyển số về chuỗi
 * number.toString
 * 
 * 
 */


/**
 * làm việc vs mảng
 * chuyển đổi  mảng sang chuỗi
 * .toString();
 * chuyển đổi mảng sang chuỗi
 * .join()
 * nếu truyền tham số vào là khoảng trống , dấu - , dấu phẩy thì sẽ là ngăn cách giữa các phần tử
 * .join('')   // .join('-') //.join(',' )
 * xoá phần tử cuối mảng và trả về phần tử cuối mảng
 * .pop()
 * nhân lên nhiều  lần thì sẽ xoá hết mảng // có thể dùng thêm lệnh for
 * xoá phần tử đầu mảng và trả về phần tử đầu mảng
 * .shift()
 * 
 * thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng
 * .push()
 * vd : var array = [
 *  'java',
 *  'C#',
 * 'javascript',
 * ];
 * 
 * console.log(array.push('PHP','Python'))
 * output:  ['java', 'C#','javascript','PHP','Python' ]
 *
 * thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng
 * .unshift()
 * vd : var array = [
 *  'java',
 *  'C#',
 * 'javascript',
 * ];
 * 
 * console.log(array.unshift('PHP','Python'))
 * output:  ['PHP','Python','java', 'C#','javascript' ]
 * 
 * xoá - chèn - cắt
 * .splice()       
 * vd array.splice( 1, 1,) tham số thử nhất là vị trí con trỏ, tham số thử hai là số phần tử xoá 
 * // nếu bằng 0 thì sẽ không xoá phần tử nào 
 * tham số thứ ba là sẽ chèn vào phần tử nếu tham số thứ 2 không bằng 0 thì nó sẽ thay thế phần tử ở vị trí đó 
 * nối hai mảng 
 * .concat()
 * vd array1 , array2
 *  array1.concat(array2)
 *  cắt phần tử
 * .slice() tham số thứ nhất là vị trí cắt, tham số thứ 2 là cắt tới vị trí nào
 * nếu tham số thứ nhất bằng 0 ( k có tham số thứ 2) thì sẽ là cắt toàn bộ mảng
 * nếu muốn lấy phần tử cuối của mảng thì ta dùng .slice(-1)
 * 
 */
