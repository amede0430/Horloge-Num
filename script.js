function f() {
    setTimeout("f()", 1000);
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    if (s % 2 == 0)
        sep = ":";
    else
        sep = " ";
    if (h < 10)
        h = "0" + h;
    if (m < 10)
        m = "0" + m;
    if (s < 10)
        s = "0" + s;

    document.fo.horloge.value = h + sep + m + sep + s;

}