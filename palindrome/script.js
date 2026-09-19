function palindrome(mystring) {
    var input = mystring.replace(/[^A-Z0-9]/ig,"").toLowerCase();

    var reversedInput = input.split('').reverse().join('');
    if(input === reversedInput) {
        document.getElementById("palindrome").innerHTML = mystring + "is a palindrome"
    }
    
    else {
        document.getElementById("palindrome").innerHTML  = mystring + "is not a palindrome"
    }
}
palindrome("racecar")