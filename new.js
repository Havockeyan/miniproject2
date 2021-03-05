function generate() {
    var s1, s2, s3, s4;
    var a1, a2, a3, a4, rollno, workc;

    var temp = first;
    console.log("temp:" + temp);

    rollno = first;
    console.log(rollno);
    var database = firebase.database();
    var ref = database.ref('student/');
    ref.on("value", gotdata, errordata);
    var k;

    function gotdata(data) {
        //console.log(data.val());
        var dat = data.val();
        var keys = Object.keys(dat);
        //console.log(keys);
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] == rollno) {
                console.log(keys[i]);
                k = keys[i];
                s1 = dat[k].subject_1;
                s2 = dat[k].subject_2;
                s3 = dat[k].subject_3;
                s4 = dat[k].subject_4;
                a1 = dat[k].at_1;
                a2 = dat[k].at_2;
                a3 = dat[k].at_3;
                a4 = dat[k].at_4;
                workc = dat[k].Work;
                console.log(typeof(a1));
            }
        }
        if (workc == "student") {
            fun();
        }
    }

    function errordata(err) {
        console.log("error");
    }

    function fun() {
        document.getElementById("ss1").innerHTML = s1;
        document.getElementById("att1").innerHTML = a1;
        document.getElementById("ss2").innerHTML = s2;
        document.getElementById("att2").innerHTML = a2;
        document.getElementById("ss3").innerHTML = s3;
        document.getElementById("att3").innerHTML = a3;
        document.getElementById("ss4").innerHTML = s4;
        document.getElementById("att4").innerHTML = a4;
    }
}