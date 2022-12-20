function submitOrder() {
    console.log("taking order");
    // USER PERSONAL DETAILS
    userName = document.getElementById("userName").value;
    cellphone = document.getElementById("cellphone").value;
    address = document.getElementById("address").value;
    age = document.getElementById("age").value;

    // FIRST SELECTION
    _sel1 = document.getElementById("sel1");
    sel1 = _sel1.options[_sel1.selectedIndex].text;
    qty1 = document.getElementById("qty1").value;

    // SECOND SELECTION
    _sel2 = document.getElementById("sel2");
    sel2 = _sel2.options[_sel2.selectedIndex].text;
    qty2 = document.getElementById("qty2").value;

    // THIRD SELECTION
    _sel3 = document.getElementById("sel3");
    sel3 = _sel3.options[_sel3.selectedIndex].text;
    qty3 = document.getElementById("qty3").value;

    // USER COMMNENTS, IF ANY
    comments = document.getElementById("comments").value;

    console.log(userName, cellphone, address, age, sel1, qty1, comments);
}