let abc = 'abcdefghijklmnopqrstuvwxyz ';
let abcArr = [];
let word = [8, 26, 11, 14, 21, 4, 26, 6,0,1,1,24,26,18, 14, 26, 12, 20, 2, 7];
let words = '';
for(let i = 0; i < abc.length; i++){
    abcArr.push(abc[i]);
}

for (let x = 0; x < word.length; x++){
    words = words.concat(abcArr[word[x]])
}

console.log(words, ` <3`)