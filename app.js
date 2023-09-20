function countStr(str, letter) {
    let count = 0;

    //Loop String 
    for(let i = 0; i< str.length; i++){

        //Check chars at pos
        if (str.charAt(i) === letter){
            count += 1;
        }
    }
    return count;
}

//JS promt
const string = prompt("Enter a string: ");
const letterToCheck = prompt("Enter a letter to check: ");

const result = countStr(string, letterToCheck);

//display result
alert(result);