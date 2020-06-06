document.addEventListener("DOMContentLoaded", function() {
    var hienra = document.getElementsByClassName("chuatoitg")[0];
    var thongbao = document.getElementsByClassName("thongbao")[0];
    var today = new Date();
    // if ((today.getHours() == 20) & (today.getMinutes() >= 0) & (today.getMinutes() <= 30)) {
    hienra.classList.remove("chuatoitg");
    thongbao.classList.add("anthongbao");
    // } else {
    //     hienra.classList.add("chuatoitg");
    //     thongbao.classList.add("thongbao");
    // }
}, false)