function generate() {
    var database = firebase.database();
    var r = document.getElementById("rollno").value;
    var ref = database.ref('leave/');
    ref.on("value", gotdata, errordata);

    function gotdata(data) {
        var dat = data.val();
        //console.log(dat);
        var keys = Object.keys(dat);
        //console.log(keys);
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] == r) {
                //console.log(r);
                k = keys[i];
                document.getElementById("purpose").innerHTML = dat[k].purpose;
                document.getElementById("name").innerHTML = dat[k].name;
                document.getElementById("roll").innerHTML = dat[k].Roll_no;
                document.getElementById("fr").innerHTML = dat[k].frdate;
                document.getElementById("to").innerHTML = dat[k].todate;
            }
        }
    }

    function errordata(err) {
        console.log(err);
    }

}

function accept() {
    r = document.getElementById("rollno").value;
    const a = "yes";
    const fb = firebase.database().ref();
    Warden_status = a;
    data = { Warden_status }
    fb.child('leave/' + r).update(data);
}