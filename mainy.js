var guestlist = [""];

function record() {
    
    var g1 = document.getElementById("gname1").value;
    var g2 = document.getElementById("gname2").value;
    var g3 = document.getElementById("gname3").value;
    var g4 = document.getElementById("gname4").value;

    guestlist.push(g1);
    guestlist.push(g2);
    guestlist.push(g3);
    guestlist.push(g4);

    document.getElementById("glistlbl").innerHTML = guestlist;
    console.log(guestlist);    

}

function buy() {
    window("https://codepen.io/RPS-PJ-Studios/pen/poPZbzW");
}