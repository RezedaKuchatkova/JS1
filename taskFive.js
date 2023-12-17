function btnClick(){
    var time = Math.floor(Math.random() * (2592000000 - 86400000)) + 86400000 ;
    var day = Math.floor(time / 86400000),
        res = time % 86400000;
    var hour = Math.floor(res / 3600000),
        res = res % 3600000;
    var min = Math.floor(res / 60000),
        res = res % 60000;
        sec = Math.floor(res / 1000);
        ms = res % 1000;
    var output = "Всего: " + time +  "\n Суток: " + day + "\n Часов: " + hour + "\n Минут: " + min + "\n Секунд: " + sec + "\n Милисекунд: " + ms
    document.getElementById("output").innerText = output;
    console.log(output);
}