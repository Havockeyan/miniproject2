function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
var usernamec, workc = "staff",
    passwordc, rollnov = document.getElementById("name").value;

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function check() {
    usernamec = document.getElementById("name").value;
    passwordc = document.getElementById("pas").value;
    var database = firebase.database();
    var ref = database.ref('student/' + rollnov);
    ref.on("value", gotdata, errordata);
}
var k;

function gotdata(data) {
    //console.log(data.val());
    var dat = data.val();
    var keys = Object.keys(dat);
    for (var i = 0; i < keys.length; i++) {
        if (keys[i] == usernamec) {
            k = keys[i];
            //console.log(k);
            if (dat[k].pasword == passwordc && dat[k].Work == workc) {
                console.log("kk");
                window.location.href = "staff/homepagestaff.html";
            }
        }
    }
}

function errordata(err) {
    console.log("error");
}