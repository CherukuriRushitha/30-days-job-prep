// 1. Creating Strings
const name = "Sai";
const city = 'Hyderabad';
console.log(name);
console.log(city);

// =======================================================
// 2. String Length
const language = "JavaScript";
console.log(language.length);

// =======================================================
// 3. Access Characters
console.log(language[0]);
console.log(language[4]);
console.log(language[language.length - 1]);

// =======================================================
// 4. toUpperCase()
console.log(language.toUpperCase());

// =======================================================
// 5. toLowerCase()
console.log(language.toLowerCase());

// =======================================================
// 6. trim()
const username = "   Sai   ";
console.log(username);
console.log(username.trim());

// =======================================================
// 7. includes()
console.log(language.includes("Script"));
console.log(language.includes("Python"));

// =======================================================
// 8. startsWith()
console.log(language.startsWith("Java"));
console.log(language.startsWith("Script"));

// =======================================================
// 9. endsWith()
console.log(language.endsWith("Script"));
console.log(language.endsWith("Java"));

// =======================================================
// 10. slice()
console.log(language.slice(0, 4));
console.log(language.slice(4));
console.log(language.slice(-6));

// =======================================================
// 11. substring()
console.log(language.substring(0, 4));
console.log(language.substring(4));

// =======================================================
// 12. replace()
const sentence = "I love Java";
console.log(sentence.replace("Java", "JavaScript"));

// =======================================================
// 13. replaceAll()
const msg = "Hi Hi Hi";
console.log(msg.replaceAll("Hi", "Hello"));

// =======================================================
// 14. repeat()
console.log("JS ".repeat(3));

// =======================================================
// 15. split()
const text = "HTML CSS JavaScript React";
const words = text.split(" ");
console.log(words);

// =======================================================
// 16. join()
console.log(words.join("-"));
console.log(words.join(" "));

// =======================================================
// 17. Template Literals
const firstName = "Sai";
const age = 22;

console.log(`My name is ${firstName} and I am ${age} years old.`);

// =======================================================
// 18. Escape Characters
console.log("Hello\nWorld");
console.log("Hello\tWorld");
console.log("He said \"JavaScript is awesome\"");

// =======================================================
// 19. Character Loop
const word = "React";
for (const ch of word) {
    console.log(ch);
}

// =======================================================
// 20. Reverse String
const str = "JavaScript";
const reversed = str.split("").reverse().join("");
console.log(reversed);

// =======================================================
// 21. Palindrome
const palindrome = "madam";
const reversedPalindrome = palindrome.split("").reverse().join("");
console.log(palindrome === reversedPalindrome);

// =======================================================
// 22. Count Vowels
const input = "JavaScript";
let vowels = 0;
for (const ch of input.toLowerCase()) {
    if ("aeiou".includes(ch)) {
        vowels++;
    }
}
console.log(vowels);

// =======================================================
// 23. Count Words
const sentence2 = "I love learning JavaScript";
const count = sentence2.trim().split(" ").length;
console.log(count);

// =======================================================
// 24. Remove Spaces
const sentence3 = "I Love JavaScript";
console.log(sentence3.replaceAll(" ", ""));

// =======================================================
// 25. Capitalize First Letter
const name2 = "javascript";
const capitalized =
    name2.charAt(0).toUpperCase() +
    name2.slice(1);
console.log(capitalized);

// =======================================================
// 26. Character Frequency
const sample = "banana";
const freq = {};

for (const ch of sample) {
    freq[ch] = (freq[ch] || 0) + 1;
}
console.log(freq);

// =======================================================
// 27. Check Anagram
const s1 = "listen";
const s2 = "silent";

const result =
    s1.split("").sort().join("") ===
    s2.split("").sort().join("");

console.log(result);

// =======================================================
// 28. String to Array
const csv = "HTML,CSS,JS,React";
const tech = csv.split(",");
console.log(tech);

// =======================================================
// 29. Array to String
console.log(tech.join(" | "));

// =======================================================
// 30. Mini Practice
const email = "   example@gmail.com   ";
console.log(email.trim().toLowerCase());
