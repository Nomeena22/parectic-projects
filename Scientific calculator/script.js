
function sq() {
    var square = document.getElementById("dis").value;
    document.getElementById("dis").value = Math.pow(square, 2);
}

function radic() {
    var raqical = document.getElementById("dis").value;
    document.getElementById("dis").value = Math.sqrt(redical);
}

function sin() {
    var sinf = document.getElementById("dis").value;
    document.getElementById("dis").value = Math.sin(sinf);
}

function cos() {
    var cosf = document.getElementById("dis").value;
    document.getElementById("dis").value = Math.cos(cosf);
}

function tan() {
    var tanf = document.getElementById("dis").value;
    document.getElementById("dis").value = Math.tan(tanf);
}

function sinh() {
    var sinh = document.getElementById("dis").value;
    document.getElementById("dis").value = Math.sinh(sinh);
}

function cosh() {
    var cosh = document.getElementById("dis").value;
    document.getElementById("dis").value = Math.cosh(cosh);
}

function tanh() {
    var tanh = document.getElementById("dis").value;
    document.getElementById("dis").value = Math.tanh(tanh);
}

function power() {
    var power = document.getElementById("dis").value;
    document.getElementById("dis").value = Math.pow(power, 3);
}



function pi() {
    document.getElementById("dis").value = Math.PI;
}



function reciproc() {
    var reci = document.getElementById("dis").value;
    document.getElementById("dis").value = Math.round(1 / reci);
}


function round() {
    var roundOf = document.getElementById("dis").value;
    document.getElementById("dis").value = Math.round(roundOf);
}

function log() {
    var logerthim = document.getElementById("dis").value;
    document.getElementById("dis").value = Math.log(logerthim);
}

function backspace() {
    var remove = document.getElementById("dis").value;
    document.getElementById("dis").value =
        remove.substring(0, remove.length - 1);
}

