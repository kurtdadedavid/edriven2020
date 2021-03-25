function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}
function cal() {
    //parsing
    var uinp = parseInt(document.getElementById("price").value);
    var uinp2 = parseInt(document.getElementById("qty").value);
    var calc = uinp * uinp2;
    document.getElementById("subtotal").value = calc.toFixed(2);
    console.log(calc)
}