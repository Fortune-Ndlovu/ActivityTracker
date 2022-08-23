# Activity Tracker
An application that keep's track of user activity. 

## Interface Workings
After the user has entered, Date of Activity, Activity Type, Start Time & End Time, Distance Range and has clicked the submit button. The information is generated into a table format underneath the form. You will notice that each input information is underneath a heading. The user is able to sort various activities by clicking each heading. The user is also able to delete non preferred table row.

## Behind the interface 
I used Bootstrap to make the interface look really nice and mostly because my main mission was the functionality using JavaScript. 

### HTML
The HTML is very simple I just have a form and a table underneath so when the user submits the form their input is generated into the table.

### CSS
There is very little CSS because my main mission was the functionality using JavaScript. 

### JavaScript
I have broken down the functionality into three simple stages.

#### Stage 1 
I declared an empty array named sessions for storing objects that will be named session.

Underneath, I then queried the form's submit button added an onclick event and assigned it an anonymous function.

Inside this anonymous function, I declare the session object empty at first but it will soon store the user input values.
With user input value's being said, I assigned the user inputs to variables that I was also declaring. 
After each input was stored in its own unique variable I then assigned those variables to the session object now the session object has all of the user inputs.

The session object stores the user input by property value, I pushed the session object into the sessions array. Now the sessions array has the session object that has each individual variable that stores the users input value.

Also inside the anonymous function is another anonymous function for removing individual rows that we will mention is stage 2

Lastly we are calling a generateTable function.

#### Stage 2
I created a generateTable function that is being assigned an object.  
