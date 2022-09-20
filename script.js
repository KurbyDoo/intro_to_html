const test_button = document.querySelector("button.test__button");
const body = document.body;
// alert("TEST");
console.log("TEST");

apply_span(document.querySelector("p.span__paragraph"));

document.getElementById('location__button').onclick = function() {
    console_log("Your general location is:");
    console_log(geoplugin_continentCode());
    console_log(geoplugin_countryName());
    console_log(geoplugin_region());
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
    document.querySelector("p.testing__paragraph").style.animationPlayState = "running";
};

function apply_span(object) {
    text = object.innerHTML;
    var text_array = text.split("");
    console_log(text_array)
    for (i = 0; i < text.length; i++) {
        if (text_array[i] == " ") {
            text_array[i] = "&nbsp;";
        };
        text_array[i] = `<span style="${change_color(i)} ${change_size(i, text.length)}">${text_array[i]}</span>`;
    };
    object.innerHTML =  text_array.join('');
};

function change_color(i) {
    var color = Math.floor((i/text.length) * 255);
    return `color: rgb(${color}, ${0}, ${255 - color});`;
};

function change_size(i, max) {
    var size = (Math.sin(i/2) + 6) * 4;
    return `font-size: ${size}px;`;
};