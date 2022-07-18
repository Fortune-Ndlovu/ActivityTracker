
let sessions = [];  //declaring an empty array that will store the objects 

document.getElementById("theSubmitButton").onclick = function () { //when theSubmitButton is clicked, we pass anonymous function
    let session = {}; //declaring an empty object that will store the user input values

    let theEndTime = document.getElementById("theEndTime").value //returning the users input within the document while assigning it to a variable we are also declaring
    let theStartTime = document.getElementById("theStartTime").value

    let date0 = new Date('01-01-1970 ' + theEndTime + ':00'); //creating a new date object, within its parenthesis respresenting milliseconds since,
    let date1 = new Date('01-01-1970 ' + theStartTime + ':00'); //...january 1970 UTC plus user input plus ':00'

    let theTotalTime = Math.abs(date0 - date1); //returning the absolute value of the number assigning to variable we are also declaring...
    let theFinalTime = theTotalTime / 1000 / 60; //...dividing that by 1000 milliseconds and 60 minutes while assigning to a variable we are also declaring 
    let theTime = theFinalTime; //assigning to a variable we are also declaring 

    //assigning user input values to our created property that is a property of our object
    session.theDateActivity = document.getElementById("theDateActivity").value;
    session.theTime = theTime;
    session.theActivityType = document.getElementById("theActivityType").value;
    session.theDistance = document.getElementById("theDistance").value
    
    sessions.push(session);//pushing our object into our array
    console.log("Our sessions globally: ", sessions);

    //When our deleteButton is clicked remove our row                   
    document.getElementById("theTableBody").addEventListener('click', function (evnt) {
        if (evnt.target.className == "btn btn-outline-primary") {
            //console.log(evnt.target);
            evnt.target.parentNode.parentNode.parentNode.removeChild(evnt.target.parentNode.parentNode);
        }
    });
    generateTable(); //calling the generateTable function

}

function generateTable() { //creating a function that will generate table rows when theSubmitButton is clicked 
    let tableBody = document.getElementById("theTableBody"); //get theTableBody
    tableBody.innerHTML = ""; //clearing its existing by assigning an empty string

    for (let i = 0; i < sessions.length; i++) {
        //0 = in the top
        //table.rows.length = the end
        let newRow = tableBody.insertRow(tableBody.rows.length);
        //inserting cells in our row
        let cel1 = newRow.insertCell(0);
        let cel2 = newRow.insertCell(1);
        let cel3 = newRow.insertCell(2);
        let cel4 = newRow.insertCell(3);
        let cel5 = newRow.insertCell(4);
        //adding values to our cells
        cel1.innerHTML = sessions[i].theDateActivity;
        cel2.innerHTML = sessions[i].theTime;
        cel3.innerHTML = sessions[i].theActivityType;
        cel4.innerHTML = sessions[i].theDistance;
        cel5.innerHTML = "<button id='deleteButton' class='btn btn-outline-primary';>&#215;</button>";
    }
}

document.getElementById("theActivity").addEventListener('click', function () {  //when the activity is clicked pass an anonymous function to it
    sessions.sort(sortByActivity);
    generateTable();
});
function sortByActivity(a, b) { //sorting our activity
    let nameA = a.theActivityType.toLowerCase();
    let nameB = b.theActivityType.toLowerCase();
    if (nameA < nameB) { //sort string ascending    
        return -1
    }
    else if (nameA > nameB) {
        return 1
    }
    else {
        return 0 //default return value (no sorting)
    }
}

document.getElementById("theDistanceRange").addEventListener('click', function () {  //when theDistanceRange is clicked pass an anonymous function to it
    sessions.sort(sortByDistance);
    generateTable();
});
function sortByDistance(a, b) {  //sorting our distance
    return a.theDistance - b.theDistance;
}

document.getElementById("theSessionDate").addEventListener('click', function () {  //when theSessionDate is clicked pass an anonymous function to it
    sessions.sort(sortByDate);
    generateTable();
});
function sortByDate(a, b) {  //sorting our date
    var c = new Date(a.theDateActivity);
    var d = new Date(b.theDateActivity);
    return c - d;
}

document.getElementById("theDuration").addEventListener('click', function () { //when theDuration is clicked pass an anonymous function to it
    sessions.sort(sortByDuration);
    generateTable();

});
function sortByDuration(a, b) {//sorting our Duration
    return a.theTime - b.theTime;
}
