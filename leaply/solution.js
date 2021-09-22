/**
 * @param {string} s
 * @return {string}
 */

var s = "javascript";

function vowelsAndConsonants(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let array = s.split('')
    
    for (let i = 0; i < array.length; i++) {
        if(vowels.indexOf(array[i]) != -1){
            console.log(array[i]);
        }
    }
    for (let i = 0; i < array.length; i++) {
        if(vowels.indexOf(array[i]) == -1){
            console.log(array[i]);
        }
    }
}

vowelsAndConsonants(s);