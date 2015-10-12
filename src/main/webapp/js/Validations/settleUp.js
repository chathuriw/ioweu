    count = 0;
    function addAnotherParticipantHelper(){
     // alert('came here');
     var divElement = document.createElement("DIV");
     divElement.setAttribute("CLASS","col-sm-8");
     var newTF1 = document.createElement("INPUT");
     newTF1.setAttribute("TYPE","email");
     newTF1.setAttribute("class","form-control");
     newTF1.setAttribute("placeholder","Enter Participant Email");
     newTF1.setAttribute("required","required");
     newTF1.setAttribute("style","margin-top:2px");
     divElement.setAttribute("id",'Settle_email'+count++);
     divElement.appendChild(newTF1);
     document.getElementById("addAnotherParticipant").appendChild(divElement);
    }
    
    function generateSimplifiedReport(){
    var divElement = document.createElement("div");
    divElement.setAttribute("CLASS","col-sm-8");
    var newTF1 = document.createElement("input");
    newTF1.setAttribute("TYPE","text");
    newTF1.setAttribute("value","You owe");
    divElement.appendChild(newTF1);
    document.getElementById("simplifiedReport").appendChild(divElement);
    }
