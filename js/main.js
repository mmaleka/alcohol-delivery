
user_geolocation();
var elem = document.getElementById('form_received');
elem.style.display = 'none';

async function submitOrder() {
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
    // NOW PUSH THE DATA TO DATABASE AND NOTIFY USER
    BASE_URL = "https://vec4ziu7mc.execute-api.us-west-2.amazonaws.com/dev/api-alcoholdelivery/alcohol_delivery_post/"
    let payload = {
        name: userName,
        cellphone: cellphone,
        address: address,
        age: age,
        sel1: sel1,
        qty1: qty1,
        sel2: sel2,
        qty2: qty2,
        sel3: sel3,
        qty3: qty3,
        comments: comments
    };

    let res = await axios.post(BASE_URL, payload);
    console.log(res.status);

    if (res.status == 201) {
        var form_elem = document.getElementById('order_form1');
        var intro_stuff = document.getElementById('intro_stuff');
        form_elem.style.display = 'none'
        intro_stuff.style.display = 'none'
        elem.style.display = 'block';
    } else {
        alert("invalid form data")
    }

}




function user_geolocation() {
    let apiKey = 'bdc_ca918fe3bff4410fa17b5d1efe4c5208';
    user_action_url = 'https://vec4ziu7mc.execute-api.us-west-2.amazonaws.com/dev/api-analytics/AnalyticsList/';

    params = {
        key: apiKey
    }
    axios.get('https://api.bigdatacloud.net/data/ip-geolocation?key=' + apiKey).then(resp => {
        updateUserAction(resp);
    });
}



async function updateUserAction(resp) {

    let payload = {
        page_visited: "alcohol delivery system",
        user_action: resp.data.ip + "-" + resp.data.location.city + "-" + resp.data.location.localityName,
    };

    let res = await axios.post(user_action_url, payload);
    console.log(res);

}