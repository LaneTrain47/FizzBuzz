//CONTROLLER FUNCTION

function getValues() {

    //Get "Fizz" and "Buzz" values from the user via the fields on the app page.
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //Ensure that the input is limited to numbers (parse). 
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //Ensure that the numbers are interpreted as integers.
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        //LOGIC FUNCTION
        //Call the fizzBuzz function and write the values to the screen
        let fbArray = fizzBuzz(fizzValue, buzzValue)
        displayData(fbArray);
    } else {
        alert("You must use numbers")
    }
}

//Do FizzBuzz (aka call displayData and write the values to the table within the app)

function fizzBuzz(fizzValue, buzzValue) {

    //Initialize the returnArray
    let returnArray = [];

    //Write a loop from 1 to 100 and run 3 checks against the values within
    for (let i = 1; i <= 100; i++) {

        //Check 1: Divisible by BOTH 3 and 5? If so, push "FizzBuzz" into an array instead of a number
        if (i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push('FizzBuzz');

            //Check 2: Divisible by 3? If so, push "Fizz" into an array instead of a number
        } else if (i % fizzValue == 0) {
            returnArray.push('Fizz');

            //Check 3: Divisible by 5? If so, push "Buzz" into an array instead of a number
        } else if (i % buzzValue == 0) {
            returnArray.push('Buzz');

            //If none of the 3 checks above return a value of true, push a number into the array
        } else {
            returnArray.push(i);
        }
    }
    return returnArray;
}

//VIEW FUNCTION

//Loop over the array and create a table row for each item.

function displayData(fbArray) {

    //Get the table body element from the HTML
    let tableBody = document.getElementById("results");

    //Get the template row
    let templateRow = document.getElementById("fbTemplate");

    //Clear table
    tableBody.innerHTML = "";

    for (let i = 0; i < fbArray.length; i += 5) {

        let tableRow = document.importNode(templateRow.content, true)

        //Obtain data from table rows then put into an array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = fbArray[i];
        rowCols[1].textContent = fbArray[i + 1];
        rowCols[2].textContent = fbArray[i + 2];
        rowCols[3].textContent = fbArray[i + 3];
        rowCols[4].textContent = fbArray[i + 4];

        tableBody.appendChild(tableRow);
    }

    //Add all the rows to the table.

}