

const character = prompt("Enter a character");

if (character.length === 1 && character >= 'a' && character <= 'z') {
    
    if (character === 'a' || character === 'i' || character === 'o' || character === 'u' || character === 'e') {
        console.log('Vowel!!');
    } else {
        console.log('Consonants');
    }

}
else {
    console.log("Invalid Input");
}