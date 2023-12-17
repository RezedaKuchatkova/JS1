function btnClick(){
    let n1 = Math.floor(Math.random() * 256),
        n2 = Math.floor(Math.random() * 256),
        n3 = Math.floor(Math.random() * 256),
        n4 = Math.floor(Math.random() * 100) / 100;

   
        let color = "rgba(" + n1 + "," + n2 + "," + n3 + "," + n4 + ")";
   
        document.getElementById("444").style.background = color;
    document.getElementById("444").innerText = color;
    console.log(color);
}