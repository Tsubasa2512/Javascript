//1 Events Listener

var btn = document.getElementById('btn');
console.log(btn);

//1 xử lý nhiều việc khi 1 event xảy ra
//2 lắng nghe / huỷ bỏ lắng nghe  


//DOM Events

btn.onclick = function () {
    //việc 1
    console.log('Viec 1');

    //việc 2
    console.log('việc 2');

    //việc 3
    console.log('việc 3');
}

//Events  Listener

// 1 lắng nghe 
btn.addEventListener('click', function (e) {
    console.log('Event 1');
});

function viec2(){
    console.log('Event 2');
}
btn.addEventListener('click', viec2);

function viec3(){
    console.log('Event 3');
}
btn.addEventListener('click', viec3);

// 2 huỷ lắng nghe 

setTimeout(function(){
    btn.removeEventListener('click',viec3);
},3000)