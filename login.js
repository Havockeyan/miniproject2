function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
var usernamec, workc = "student",
    passwordc, rollnov = document.getElementById("name").value;
localStorage.setItem("name", rollnov);


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
    console.log(rollnov);
    var database = firebase.database();
    var ref = database.ref('student/' + rollnov);
    ref.on("value", gotdata, errordata);
}
var k;

function gotdata(data) {

    var dat = data.val();
    var keys = Object.keys(dat);

    for (var i = 0; i < keys.length; i++) {
        if (keys[i] == usernamec) {
            k = keys[i];
            if (dat[k].pasword == passwordc && dat[k].Work == workc) {
                var newwin = window.open("homepagestd.html");
                newwin.onload = function() {
                    this.first = usernamec;
                };
            }
        }
    }
}

function errordata(err) {
    console.log("error");
}