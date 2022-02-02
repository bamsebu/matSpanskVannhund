var inputVekt = document.getElementById("Vektinput");
var inputVom = document.getElementById("Vom");
inputVekt.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.key === 'Enter') {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("clickbtn").click();
    }
  });

inputVom.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.key === 'Enter') {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("clickbtn").click();
    }
  });


function add_number() {
    const date = +new Date();
    
    var myBirthDate = document.getElementById("fodselsDato").value;
    myBirthDate = myBirthDate.split("-");
    var myDate = new Date( myBirthDate[0], myBirthDate[1] - 1, myBirthDate[2]);
    var first_number = parseFloat(document.getElementById("Vektinput").value);
    var alder = ((date - myDate.getTime())/(24*60*60*1000))/(365/12);
    var prosent = -0.000002*alder**3 + 0.000158*alder**2 - 0.004219*alder+ 0.061287
    var matMengde = first_number * prosent*1000;
    var vom = parseFloat(document.getElementById("Vom").value);
    document.getElementById("Matmengde").value = Math.round(matMengde);
    document.getElementById("Torrfor").value = (Math.round(matMengde) - vom)/2;
    document.getElementById("Alder").value = Math.round((alder + Number.EPSILON) * 100) / 100;
  }

