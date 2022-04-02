function sendToPage(){
    var input = document.getElementById("search").value;
     //alert(input);
     if (input == "Dalhousie"){
        location.href = "dhalousy.html";
        return false;
    }
    else if (input == "Amsterdam"){
        location.href = "amsterdam.html";
        return false;
    }

    else if (input == "Ooty"){
        location.href = "ooty.html";
        return false;
    }
     else if (input == "London"){
        location.href = "london.html";
        return false;
    }
    else {
        alert('Invalid Input.');
    }
        }


function myFunction() {
  alert("Our executive we reach you out within 10 minutes.Please stay tuned!!");
}
function myFunction2() {
    alert("Your Bucket List Is Ready and Downloaded!!Happy Journey....");
  }