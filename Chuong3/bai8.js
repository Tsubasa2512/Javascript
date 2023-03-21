//khai báo biến

var a = prompt('Nhập vào số a ');
var temp=0;
a= Number(a);

//xử lí 

for( var i = 1; i<=a;i++){
     if( a%i==0){
        temp++;

     }
    //  return 0;

}
if (temp==2){
    console.log(' Số vừa nhập là số nguyên tố ');
}
else{
    console.log('Đây là không là số nguyên tố');
}