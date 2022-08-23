# Activity Tracker
An application that keep's track of user activity. 

## Interface Workings
After the user has entered, Date of Activity, Activity Type, Start Time & End Time, Distance Range and has clicked the submit button. The information is generated into a table format underneath the form. You will notice that each input information is underneath a heading. The user is able to sort various activities by clicking each heading. The user is also able to delete non preferred table row.

## Behind the Interface 
I used Bootstrap to make the interface look really nice and mostly because my main mission was the functionality using JavaScript. 

### HTML
The HTML is very simple I just have a form and an empty table underneath so when the user submits the form their input is generated into the table.

### CSS
There is very little CSS because my main mission was the functionality using JavaScript. 

### JavaScript
I have broken down the functionality into 3 simple stages.

#### Stage 1 
I declared an empty array named sessions for storing objects that will be named session.

Underneath, I then queried the form's submit button added an onclick event and assigned it an anonymous function.

Inside this anonymous function, I declare the session object empty at first but it will soon store the user input values.
With user input value's being said, I assigned the user inputs to variables that I was also declaring. 
After each input was stored in its own unique variable I then assigned those variables to the session object now the session object has all of the user inputs.

The session object stores the user input by property value, I pushed the session object into the sessions array. Now the sessions array has the session object that has each individual variable that stores the users input value.

Also inside the anonymous function is another anonymous function for removing individual rows that I will mention is stage 2

Lastly I am calling a generateTable function.

#### Stage 2
I created a generateTable function that is being assigned an object. 
Within this object I am tageting theTableBody and inserting new table rows using a for loop.
The for loop is adding a new row into the end of theTableBody one row at a time, this new row is based on the last session object in side the sessions array.

The for loop  works by: 
Inserting a new row at the end of theTableBody, inside the new row we create 4 cells counting form 0, each individual cell is assigned the user input from the last session object inside the sessions array. The 4th cell just includes a delete button which is used to delete the current row.

Note this generateTable function gets called in the anonymous function that is being assigned when theSubmitButton is clicked.

#### Stage 3
At this point when theSubmitButton is clicked valuable user inputs generate into theTableBody, to make things interesting when the user clicks the headings of table, the row will sort based on the heading being clicked. e.g if the user clicks Session button the rows will sort alphabetically or the Distance button the rows will sort numerically ect.
The sorting works pretty similar for all headings. When the heading button is clicked we assign as anonymous function which is sorting the sessions object using the sort() function, note: we are also calling the generateTable function inside this annoymous function as reference of the last row created.

### Conclusion
Every interesting thing happens when theSubmitButton is clicked. We assigned values to an object, push that object to an array, call a generateTable function that is generating a new row with cells that have their own unique user value. We are also sorting the all of the rows when the table headings are clicked.

##### This all happens just with one click of a button, I really like JavaScript becacuse it opens the door of anything is possible. 
