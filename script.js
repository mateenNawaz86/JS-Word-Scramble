const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

let play = false;
let newWords = "";
let tempWords = "";
let sourceWords = ['html', 'css', 'c++', 'javascript', 'java', 'nodejs', 'reactjs', 'vuejs', 'tenserflow', 'electronjs', 'python', 'django', 'php', 'c#', 'assemblylanguage', 'machinelearning', 'deeplearning', 'contumcomputing'];


btn.addEventListener('click', function() {
    if (!play) {
        play = true;
        console.log('Game start!');
        btn.innerHTML = 'Guess';
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        tempWords = scrambleWords(newWords.split("")).join("");
        msg.innerHTML = `Guess the word: ${tempWords}`;
    } else {
        let inpVal = guess.value;
        if (inpVal === newWords) {
            play = false;
            msg.innerHTML = `Good! It's correct. It is ${newWords}`;
            guess.classList.toggle('hidden');
            btn.innerHTML = 'Play Again';
            guess.value = "";
        } else {
            msg.innerHTML = `OOPS! It's Incorrect. Please try again ${newWords}`;
        }
    }
});

const createNewWords = () => {
    const ranWords = Math.floor(Math.random() * sourceWords.length);
    let wordsTemp = sourceWords[ranWords];
    return wordsTemp;
}

const scrambleWords = (arg) => {
    for (let i = arg.length - 1; i > 0; i--) {
        let temp = arg[i];
        let j = Math.floor(Math.random() * (i + 1));
        arg[i] = arg[j];
        arg[j] = temp;
    }
    return arg;
}