var inputVekt = document.getElementById("Vektinput");
var inputVom = document.getElementById("Vom");
var inputProsentAvVekt = document.getElementById("ProsentAvVekt");
var inputAlder = document.getElementById("Alder");

inputVekt.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        AddNumber();
        event.target.blur();
    }
});

inputVom.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        AddNumber();
        event.target.blur();
    }
});

inputProsentAvVekt.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        AddNumber();
        event.target.blur();
    }
});

inputAlder.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        SettProsent();
        event.target.blur();
    }
});

window.onload = function () {
    var alder = Alder();
    var prosent = -0.000002 * alder ** 3 + 0.000158 * alder ** 2 - 0.004219 * alder + 0.061287;
    document.getElementById("Alder").value = Math.round((alder + Number.EPSILON) * 100) / 100;
    document.getElementById("ProsentAvVekt").value = Math.round((prosent * 100 + Number.EPSILON) * 100) / 100;
};

function SettProsent() {
    var alder = parseFloat(document.getElementById("Alder").value);
    var prosent = -0.000002 * alder ** 3 + 0.000158 * alder ** 2 - 0.004219 * alder + 0.061287;
    document.getElementById("ProsentAvVekt").value = Math.round((prosent * 100 + Number.EPSILON) * 100) / 100 + "%";
}

function Alder() {
    const date = +new Date();

    var myBirthDate = document.getElementById("fodselsDato").value;
    myBirthDate = myBirthDate.split("-");

    var myDate = new Date(myBirthDate[0], myBirthDate[1] - 1, myBirthDate[2]);
    var alder = ((date - myDate.getTime()) / (24 * 60 * 60 * 1000)) / (365 / 12);

    return alder;
}

function Prosent() {
    var alder = Alder();
    var prosent = -0.000002 * alder ** 3 + 0.000158 * alder ** 2 - 0.004219 * alder + 0.061287;
    return prosent;
}

function AddNumber() {
    var vekt = parseFloat(document.getElementById("Vektinput").value);
    var prosent = parseFloat(document.getElementById("ProsentAvVekt").value) / 100;
    var matMengde = vekt * prosent * 1000;
    var vom = parseFloat(document.getElementById("Vom").value);
    document.getElementById("Matmengde").value = Math.round(matMengde);
    document.getElementById("Torrfor").value = (Math.round(matMengde) - vom) / 2;

}