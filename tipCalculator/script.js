const btn = document.getElementById('calculate');

function myfunction(){


    const bill = document.getElementById("billAmount").value;
    const percentTip = document.getElementById("serviceQuality").value;
    let numPeople = document.getElementById("totalPeople").value;

    if(bill == "" || percentTip == 0){
        alert("Please Enter the Value");
        return;
    }

    if(numPeople == "" || numPeople <= 1){
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    }

    else{
        document.getElementById("each").style.display = "Block";
    }
    
    let tipAmount = (bill * percentTip) / numPeople;
    tipAmount = tipAmount.toFixed(2);

    document.getElementById("totaldiv").style.display = "block";
    document.getElementById("tip").innerHTML = tipAmount;
    document.getElementById("tip").style.color = "rgb(83,40,39)";

}

//hide the tip amount on load


btn.addEventListener("click",myfunction);

