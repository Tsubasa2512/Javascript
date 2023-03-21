//khai báo biến 
 var a = prompt('Nhập vào số A : ');
var tong = 0 ;

 a=Number(a);


 //xử lí 

 for ( var i =1; i<a;i++){

    if( a%i ==0){
        tong = tong +i;
        console.log(tong); 
    }   
 }
 if (tong == a ){
    console.log(' Đây là số hoàn hảo ');

 }
 else{
    console.log('Đây không phải là số hoàn hảo');
 }