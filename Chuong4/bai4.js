


function daySo() {
    var sum = 0, max = 0, min = 9999999999;

    console.log('Dãy số vừa nhập vào là :');

    for (var n of arguments) {
        n = Number(n);
        console.log('\t\t\t\t\t ->    ' + n);
        sum += n;
        if (n > max) {
            max = n;
        }


        if (n < min) {
            min = n;
        }
    }


    console.log('Tổng của dãy số = ' + sum);
    console.log('Max của dãy số = ' + max);
    console.log('Min của dãy số = ' + min);


}

daySo(3, 2, 6, 4, 8, 2, 1, 11, 34, 3);