//function to check the length of last word
function lengthOfLastWord(str){ 
    const s = str.trim().split(' ').at(-1).length //split the word, find the last word and calculate length
    return s
}

console.log('Length of the entered last word is:' + (lengthOfLastWord('Hello World')));
console.log('Length of the entered last word is:' + (lengthOfLastWord(' fly me to the moon ')))

//function to check anagram
let isAnagram = (str1, str2) => {  
    let ProcessStr1 = str1.replace(/\s+/g, '').toLowerCase().split('').sort().join()
    let ProcessStr2 = str2.replace(/\s+/g, '').toLowerCase().split('').sort().join()
    return ProcessStr1 === ProcessStr2
}
console.log('The Entered strings form an Anagram: ' + isAnagram('listen', 'silent'));
console.log('The Entered string form an Anagram: ' + isAnagram('hello', 'world'));