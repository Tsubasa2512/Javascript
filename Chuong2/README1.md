## Bài 1: Viết chương trình nhập chiều dài a, chiều rộng b của hình chữ nhật. Tính chu vi và diện tích của hình chữ nhật đó.

## Bài 2: Viết chương trình nhập bán kính R của hình tròn. Tính chu vi và diện tích của hình tròn đó.

## Bài 3: Viết chương trình nhập 2 số a, b. Tính tổng, hiệu, tích, thương (chia lấy số thập phân, lấy phần dư).

## Bài 4: Viết chương trình giải phương trình bậc 1: ax + b = 0 (xét tất cả các trường hợp, làm tròn kết quả 2 số thập phân).

## Bài 5: Viết chương trình giải phương trình bậc 2: ax^2 + bx + c = 0 (xét tất cả các trường hợp, làm tròn kết quả 2 số thập phân).

## Bài 6: Chạy đoạn chương trình sau và ghi chép những gì đã học được

```js
var check = true;
var chieuDai = prompt("Nhập chiều dài: ");

if (chieuDai === '' || chieuDai === null) {
    console.log("Vui lòng nhập chiều dài!");
    check = false;
} else if (isNaN(chieuDai)) {
    console.log("Nhập chiều dài không đúng định dạng số!");
    check = false;
} else if (chieuDai <= 0) {
    console.log('Chiều dài phải lớn hơn 0');
    check = false;
} else {
    chieuDai = Number(chieuDai);
}

var chieuRong = prompt("Nhập chiều rộng: ");

if (chieuRong === '' || chieuRong === null) {
    console.log("Vui lòng nhập chiều rộng!");
    check = false;
} else if (isNaN(chieuRong)) {
    console.log("Nhập chiều rộng không đúng định dạng số!");
    check = false;
} else if (chieuRong <= 0) {
    console.log('Chiều rộng phải lớn hơn 0');
    check = false;
} else {
    chieuRong = Number(chieuRong);
}

if (check) {

    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;

    console.log("Chu vi: " + chuVi);
    console.log("Dien tich: " + dienTich);
}
```

## Bài 7: Viết chương trình nhập vào 3 số a, b, c. Kiểm tra xem 3 số đó có lập thành 1 tam giác không? Đó là tam giác gì?

## Bài 8: Viết chương trình nhập 1 số và kiểm tra có phải số nguyên tố không?
## Bài 9: Viết chương trình nhập 1 số và kiểm tra có phải số hoàn hảo không?
## Bài 10: Viết chương trình nhập 1 số và kiểm tra có phải số fibonacci không?
## Bài 11: Viết chương trình nhập 1 số và kiểm tra có phải số đối xứng không?