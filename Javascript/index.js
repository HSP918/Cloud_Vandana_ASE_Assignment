function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
    }
function processData() {
    const inputSentence = document.getElementById("input-sentence").value;
    const reversedSentence = reverseWords(inputSentence);
    document.getElementById("reversed-sentence").textContent = reversedSentence;
    const inputArray = document.getElementById("input-array").value;
    const arrayToSort = inputArray.split(',').map(item => parseInt(item, 10));
    const sortedArrayDescending = arrayToSort.sort((a, b) => b - a);
    document.getElementById("sorted-array").textContent = sortedArrayDescending.join(', ');
    }
