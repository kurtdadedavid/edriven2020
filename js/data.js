var array = new Array();

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}
function togglePopup2() {

    document.getElementById("popup-2").classList.toggle("active");

}

function cal() {
    //parsing
    var uinp1 = parseInt(document.getElementById("price").value);
    var uinp11 = parseInt(document.getElementById("qty").value);

    var uinp2 = parseInt(document.getElementById("price1").value);
    var uinp22 = parseInt(document.getElementById("qty1").value);

    var uinp3 = parseInt(document.getElementById("price2").value);
    var uinp33 = parseInt(document.getElementById("qty2").value);

    var uinp4 = parseInt(document.getElementById("price3").value);
    var uinp44 = parseInt(document.getElementById("qty3").value);

    ////////////////////////
    var calc1 = uinp1 * uinp11;

    var calc2 = uinp2 * uinp22;

    var calc3 = uinp3 * uinp33;

    var calc4 = uinp4 * uinp44;

    ////////////////////////
    document.getElementById("subtotal").value = calc1.toFixed(2);
    document.getElementById("subtotal1").value = calc2.toFixed(2);
    document.getElementById("subtotal2").value = calc3.toFixed(2);
    document.getElementById("subtotal3").value = calc4.toFixed(2);

    var ret = parseInt(document.getElementById("subtotal").value);

    var add = calc1 + calc2 + calc3 + calc4;

    document.getElementById("totalhide").value = add;

}
function saveData() {
    getData();

    array.push({
        or: document.getElementById("ORNUMBER").value,
        cn: document.getElementById("Customername").value,


        p1: document.getElementById("price").value,
        q1: document.getElementById("qty").value,
        t1: document.getElementById("selects").value,
        s1: document.getElementById("subtotal").value,

        p2: document.getElementById("price1").value,
        q2: document.getElementById("qty1").value,
        t2: document.getElementById("selects2").value,
        s2: document.getElementById("subtotal1").value,

        p3: document.getElementById("price2").value,
        q3: document.getElementById("qty2").value,
        t3: document.getElementById("selects3").value,
        s3: document.getElementById("subtotal2").value,

        p4: document.getElementById("price3").value,
        q4: document.getElementById("qty3").value,
        t4: document.getElementById("selects4").value,
        s4: document.getElementById("subtotal3").value,

        th: document.getElementById("totalhide").value

    });

    localStorage.setItem("customer", JSON.stringify(array));
    showData();
}
function getData() {
    var str = localStorage.getItem("customer");
    if (str != null) {
        array = JSON.parse(str);
    }

}

function showData() {
    getData();
    var tbody = document.getElementById("tbldata");

    var x = tbody.rows.length;
    while (--x) {
        tbody.deleteRow(x);
    }

    for (i = 0; i < array.length; i++) {
        var r = tbody.insertRow();
        var cell1 = r.insertCell(0);
        var cell2 = r.insertCell(1);
        var cell3 = r.insertCell(2);
        var cell4 = r.insertCell(3);
        var cell5 = r.insertCell(4);

        cell1.innerHTML = i;
        cell2.innerText = array[i].or;
        cell3.innerText = array[i].cn;
        cell4.innerText = array[i].th;
        cell5.innerHTML = '<button style="width:160;height:40; background-color:#AECAFF  ;color:#000000 ;  border-radius: 8px;" id="viewpopup" onclick="togglePopup2()">View </button>';
    }

}
/*function saveData() {
    //getting elements or and cn
    var or = document.getElementById("ORNUMBER");
    var cn = document.getElementById("Customername");
    //setting elements or and cn
    localStorage.setItem("ornumber", or.value);
    localStorage.setItem("customername", cn.value);

    //getting and setting elements p qty selects and subtotal
    var p1 = document.getElementById("price");
    var q1 = document.getElementById("qty");
    var t1 = document.getElementById("selects");
    var s1 = document.getElementById("subtotal");
    localStorage.setItem("pric1", p1.value);
    localStorage.setItem("qty1", q1.value);
    localStorage.setItem("sele1", t1.value);
    localStorage.setItem("sub1", s1.value);

    var p2 = document.getElementById("price1");
    var q2 = document.getElementById("qty1");
    var t2 = document.getElementById("selects2");
    var s2 = document.getElementById("subtotal1");
    localStorage.setItem("pric2", p2.value);
    localStorage.setItem("qty2", q2.value);
    localStorage.setItem("sele2", t2.value);
    localStorage.setItem("sub2", s2.value);

    var p3 = document.getElementById("price2");
    var q3 = document.getElementById("qty2");
    var t3 = document.getElementById("selects3");
    var s3 = document.getElementById("subtotal2");
    localStorage.setItem("pric3", p3.value);
    localStorage.setItem("qty3", q3.value);
    localStorage.setItem("sele3", t3.value);
    localStorage.setItem("sub3", s3.value);

    var p4 = document.getElementById("price3");
    var q4 = document.getElementById("qty3");
    var t4 = document.getElementById("selects4");
    var s4 = document.getElementById("subtotal3");
    localStorage.setItem("pric4", p4.value);
    localStorage.setItem("qty4", q4.value);
    localStorage.setItem("sele4", t4.value);
    localStorage.setItem("sub4", s4.value);



    var total = parseFloat(plus);
    localStorage.setItem("totalpurchase", total);


}*/
