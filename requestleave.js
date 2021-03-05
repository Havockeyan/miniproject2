function submit() {
    rollno = document.getElementById("rollno").value;
    namec = document.getElementById("name").value;
    purpose = document.getElementById("purpose").value;
    frdate = document.getElementById("fr_date").value;
    todate = document.getElementById("to_date").value;
    k = "no", q = "no", ro = getRandomArbitrary(1, 1000), r = document.getElementById("rollno").value;
    console.log("pre");
    var database = firebase.database();
    var ref = database.ref('leave/' + r);
    ref.set({
        Roll_no: rollno,
        name: namec,
        purpose: purpose,
        frdate: frdate,
        todate: todate,
        requestid: ro,
        Warden_status: k,
        Staff_status: q
    });
    console.log("insert");
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}