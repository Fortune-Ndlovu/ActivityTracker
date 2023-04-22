let sessions = []; //declaring an empty array that will store the objects

document.getElementById("theSubmitButton").onclick = function () {
  //when theSubmitButton is clicked, we pass anonymous function
  let session = {}; //declaring an empty object that will store the user input values

  //assigning user input values to our created property that is a property of our object
  session.theDateActivity = document.getElementById("theDateActivity").value;
  session.theActivityType = document.getElementById("theActivityType").value;
  session.theDistance = document.getElementById("theDistance").value;
  session.theStartTime = document.getElementById("theStartTime").value;
  session.theEndTime = document.getElementById("theEndTime").value;

  sessions.push(session); //pushing our object into our array
  console.log("Our sessions globally: ", sessions);

  generateTable(); //calling the generateTable function
};

function generateTable() {
  //creating a function that will generate table rows when theSubmitButton is clicked
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
    cel2.innerHTML = calculateDuration(
      sessions[i].theStartTime,
      sessions[i].theEndTime
    );
    cel3.innerHTML = sessions[i].theActivityType;
    cel4.innerHTML = sessions[i].theDistance;
    cel5.innerHTML =
      "<button id='deleteButton' class='btn btn-outline-primary';>&#215;</button>";
  }
}

/**
 * The function creates two Date objects with the same date (January 1st, 1970) but different times based on the parameters.
 * Then it calculates the difference between the two Date objects in milliseconds and converts it to minutes.
 * The function returns the duration in minutes as a number. For example, if startTime is “10:00” and endTime is “11:15”, the function will return 75.
 */
function calculateDuration(startTime, endTime) {
  let startDate = new Date("1970-01-01T" + startTime + ":00");
  let endDate = new Date("1970-01-01T" + endTime + ":00");
  let durationInMinutes = (endDate - startDate) / (1000 * 60);
  return durationInMinutes;
}

//When our deleteButton is clicked remove our row
document
  .getElementById("theTableBody")
  .addEventListener("click", function (evnt) {
    if (evnt.target.className == "btn btn-outline-primary") {
      const rowToDelete = evnt.target.parentNode.parentNode;
      const rowIndex = rowToDelete.rowIndex - 1; // subtract 1 to account for table header
      sessions.splice(rowIndex, 1); // remove corresponding object from sessions array
      rowToDelete.parentNode.removeChild(rowToDelete);
      generateTable();
    }
  });

// add event listener for delete button when the page loads
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("theTableBody")
    .addEventListener("click", function (evnt) {
      if (evnt.target.className == "btn btn-outline-primary") {
        //console.log(evnt.target);
        evnt.target.parentNode.parentNode.parentNode.removeChild(
          evnt.target.parentNode.parentNode
        );
      }
    });
});

document.getElementById("theActivity").addEventListener("click", function () {
  //when the activity is clicked pass an anonymous function to it
  sessions.sort(sortByActivity);
  generateTable();
});

function sortByActivity(a, b) {
  //sorting our activity
  let nameA = a.theActivityType.toLowerCase();
  let nameB = b.theActivityType.toLowerCase();
  if (nameA < nameB) {
    //sort string ascending
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0; //default return value (no sorting)
  }
}

document
  .getElementById("theDistanceRange")
  .addEventListener("click", function () {
    //when theDistanceRange is clicked pass an anonymous function to it
    sessions.sort(sortByDistance);
    generateTable();
  });
function sortByDistance(a, b) {
  //sorting our distance
  return a.theDistance - b.theDistance;
}

document
  .getElementById("theSessionDate")
  .addEventListener("click", function () {
    //when theSessionDate is clicked pass an anonymous function to it
    sessions.sort(sortByDate);
    generateTable();
  });
function sortByDate(a, b) {
  //sorting our date
  var c = new Date(a.theDateActivity);
  var d = new Date(b.theDateActivity);
  return c - d;
}

document.getElementById("theDuration").addEventListener("click", function () {
  //when theDuration is clicked pass an anonymous function to it
  sessions.sort(sortByDuration);
  generateTable();
});

// calculating the duration for each session using the calculateDuration function and then sorting the sessions by that value
function sortByDuration(a, b) {
  let durationA = calculateDuration(a.theStartTime, a.theEndTime);
  let durationB = calculateDuration(b.theStartTime, b.theEndTime);
  return durationA - durationB;
}
