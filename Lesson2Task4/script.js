/*Implement a function with two string arguments, which returns true if the given strings are anagrams, and
false otherwise. Anagrams are the strings, which consist of the same symbols, but perhaps in a different
order. For example ‘melon’ and ‘lemon’ are anagrams, but ‘ball’ and ‘lab’ - no, because they have different
amounts of letter ‘l’.*/

var word1 = "melon";
var word2 = "lemon";

function isAnagram(str1, str2) {
	str1 = str1.split("");
	str1.sort();
	str1 = str1.join("");
	
	str2 = str2.split("");
	str2.sort();
	str2 = str2.join("");
	
	return str1 === str2;
}

console.log(word1);
console.log(word2);
console.log("Are these words an anagram?", isAnagram(word1, word2) ? "yes" : "no");