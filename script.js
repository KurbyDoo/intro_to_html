const test_button = document.getElementById("test__button");
const body = document.body
// alert("TEST");
console.log("TEST");

document.getElementById('button').onclick = function() {
    alert("button was clicked");
};

function console_log(data) {
    var old = document.querySelector("p.testing__paragraph").innerHTML;
    document.querySelector("p.testing__paragraph").innerHTML = old + "<br>" + data;
};

test_button.onclick = function() {
    if (body.style.backgroundColor != "blue") {
        body.style.backgroundColor = "blue";
    } else {
        body.style.backgroundColor = "green";
    }
    document.querySelector("h1.testing__header").innerHTML = "New test header"; // query selecter returns the first element matching
    document.querySelector("div.testing__section").style.backgroundColor = "green"; // get first item by class name
    console_log(geoplugin_city());
    document.querySelector("p.testing__paragraph").style.animationPlayState = "running";
};


// if(document.getElementById('button').clicked == true)
// {
//    alert("button was clicked");
// }