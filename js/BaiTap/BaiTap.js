function HCN() {
    var m, n;
    m = parseFloat(prompt("Nhap chieu dai", "10"));
    n = parseFloat(prompt("Nhap chieu rong", "10"));
    var dt = m * n;
    var cv = (m + n) * 2;
    //document.write("Dien tich HCN:"+ dt);
    var str = "Dien tich HCN:" + dt + "<br> CHu vi HCN" + cv;

    document.getElementById("tthcn").innerHTML = str;
    alert("Sin : " + Math.sin((30 * Math.PI) / 180));
    // 180 -- > Pi`
    //30-- > (i * Pi) / 180

}