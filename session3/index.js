// todo Post-Session Practice Questions:
// todo Concatenate two strings.
function generateCheckerboard(size) {
    let board = '';
    for (let i = 0; i < size; i++) {
        board += (i % 2 === 0 ? ' *'.repeat(size / 2) : '* '.repeat(size / 2)) + '\n';
    }
    return board;
}

function concatenateStrings(str1, str2) {
    return str1 + str2;
}
console.log(concatenateStrings("Hello, ", "World!"));
//type2
function concatenateStrings(str1, str2) {
    return str1 + str2;
}


console.log(concatenateStrings("Hello, ", "World!")); 

// todo Find the frequency of each character in a string.
function characterFrequency(str) {
    const frequency = {};
    
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    
    return frequency;
}

const inputString = "hello world";
console.log(characterFrequency(inputString));

// todo Replace spaces in a string with %20.
function replaceSpaces(str) {
    return str.replace(/ /g, "%20");
}
console.log(replaceSpaces(inputString));
//type2
function replaceSpaces(str) {
    let result = "";
    for (let char of str) {
        result += (char === " ") ? "%20" : char;
    }
    return result;
}
console.log(replaceSpaces(inputString));


// todo Check if a string is an anagram of another.
function isAnagram(str1, str2) {
    const formatString = str => str.replace(/\s+/g, "").toLowerCase().split("").sort().join("");
    return formatString(str1) === formatString(str2);
}
console.log(isAnagram("listen", "silent"));

// todo Count the number of words in a sentence.
function countWords(sentence) {
    return sentence.trim().split(/\s+/).length;
}
console.log(countWords("This is a test sentence"));
//type2
function countWords(sentence) {
    let count = 0;
    let inWord = false;
    
    for (let char of sentence) {
        if (char.trim()) {
            if (!inWord) {
                count++;
                inWord = true;
            }
        } else {
            inWord = false;
        }
    }
    
    return count;
}
console.log(countWords("This is a test sentence"));

// todo Find the first non-repeating character in a string.
function firstNonRepeatingCharacter(str) {
    const frequency = characterFrequency(str);
    
    for (let char of str) {
        if (frequency[char] === 1) {
            return char;
        }
    }
    
    return null;
}
console.log(firstNonRepeatingCharacter("swiss"));

// todo Remove all vowels from a string.
function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, "");
}
console.log(removeVowels("hello world"));

// todo Find the shortest word in a sentence.
function findShortestWord(sentence) {
    return sentence.split(/\s+/).reduce((shortest, word) => 
        word.length < shortest.length ? word : shortest
    );
}
console.log(findShortestWord("This is a test sentence"));

// todo Count occurrences of a substring within a string.
function countSubstringOccurrences(str, sub) {
    return str.split(sub).length - 1;
}
console.log(countSubstringOccurrences("hello hello world", "hello"));


// type2
function countSubstringOccurrences(str, sub) {
    let count = 0;
    let index = 0;
    
    while ((index = str.indexOf(sub, index)) !== -1) {
        count++;
        index += sub.length;
    }
    
    return count;
}
console.log(countSubstringOccurrences("hello hello world", "hello"));


