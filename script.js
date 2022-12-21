/* ---------- PALINDROME -----------*/

const poliValEl = document.getElementById("palindrome_input");
const poliResultValEl = document.getElementById("palindrome_result");

/* -------- REVERSE STRING --------*/

const inputValEl = document.getElementById("number_input");
const reverseValEl = document.getElementById("reverse_result");

/* ----- --- COUNT CHAR ----   ----*/

const inputStringValEl = document.getElementById("string_input");
const inputCharValEl = document.getElementById("char_input");
const outputCharValEl = document.getElementById("char_result");

function reverseString() {

    let reverse = [];

    reverse = inputValEl.value;

    if (!reverse.length)
                    return false;


    reverse = Array.from(reverse).reverse().join('');
    reverseValEl.innerHTML = reverse;

}


function isPalindrome() {

    let reverse = [];
    let isPalindrome = false;

    reverse = poliValEl.value.toLowerCase();

    if (!reverse)
                return false;


//  Testing string for palindrome match excluding spaces and punctuation signs
//  Example: Я - арка края
//  Example: Madam, I'm Adam

    reverse = reverse.replace(/[^a-zа-яё0-9]/gi,'');
    reverse = Array.from(reverse);
    let index = reverse.length-1;
    let loopNum = Math.floor(reverse.length/2);

    for (let i = 0; i < loopNum; i++ ) {

        if (reverse[index--] != reverse[i]) {
                            isPalindrome = false;
                            break;
        }
         else  isPalindrome = true;

    }

    if(isPalindrome) poliResultValEl.innerHTML = 'Palindrome';
            else  poliResultValEl.innerHTML = 'Not a Palindrome';

            return isPalindrome;
}
function CountChar() {

    let array = [];

    if (!inputStringValEl.value || !inputCharValEl.value) return 0;

    array = inputStringValEl.value;
    let count = array.split(inputCharValEl.value).length - 1;

    outputCharValEl.innerHTML = count.toString();

}





