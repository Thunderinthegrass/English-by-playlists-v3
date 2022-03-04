const wordRusText = document.querySelectorAll('.word__rus-text');
 const wordRus = document.querySelectorAll('.word-rus');
 let lesson6Rus = [
  "Я хочу это",
  "Я хочу эту вещь",
  "Я хочу этот компьютер",
  "Я хочу это платье",
  "Я хочу новый компьютер",
  "Я хочу хорошую машину",
  "Я хочу новую квартиру",
  "Я действительно это хочу",
  "Я хочу сделать это",
  "Она хочет сделать это",
  "Я хочу знать это",
  "Я реально хочу это знать",
  "Я хочу улучшить свой английский",
  "Я хочу говорить по-английски лучше",
  "Я хочу говорить по-английски без ошибок",
  "Я хочу улучшить свою грамматику",
  "Я хочу говорить по-английски правильно",
  "Я хочу выучить английский быстро",
  "Я хочу иметь хорошую работу",
  "Я хочу иметь хорошую машину",
  "Я хочу быть счастливым",
  "Она хочет сделать это прямо сейчас",
  "Он хочет купить эту вещь",
  "Я хочу говорить по-английски свободно и правильно",
  "Мой друг хочет проверить это ещё один раз",
  "Мой друг хочет жить за границей",
  "Я хочу поехать за границу",
  "Мои родители хотят жить в другом месте",
  "Я действительно хочу поблагодарить тебя",
];

const wordEngText = document.querySelectorAll('.word__eng-text');
let lesson6Eng = [
  "I want it",
  "I want this thing",
  "I want this computer",
  "I want this dress",
  "I want a new computer",
  "I want a good car",
  "I want a new flat(apartment)",
  "I really want it",
  "I want to do it",
  "She wants to do it",
  "I want to know it",
  "I really want to know it",
  "I want to improve my English",
  "I want to speak English better",
  "I want to speak English without mistakes",
  "I want to improve my grammar",
  "I want to speak English correctly",
  "I want to learn English fast",
  "I want to have a good job",
  "I want to have a good car",
  "I want to be happy",
  "She wants to do it right now",
  "He wants to buy this thing",
  "I want to speak English fluently and correctly",
  "My friend wants to check it one more time",
  "My friend wants to leave abroad",
  "I want to go abroad",
  "My parents wants to leave in another place",
  "I really want to thank you",
];


for (let i = 0; i < wordRusText.length; i++) {
  wordRusText[i].textContent = lesson6Rus[i];
  wordEngText[i].textContent = lesson6Eng[i];
//убирает строки с классом "new-word-hide", вместо них отрисовывается то, что в html
  if (wordRusText[i].classList.contains('new-word-hide')) {
    wordRusText[i].textContent = '';
  }
  if (wordEngText[i].classList.contains('new-word-hide')) {
    wordEngText[i].textContent = '';
  }

if(lesson6Rus[i].length > 43) {
  // console.log(lesson6Rus[i].length);
  // console.log(i);
  // console.log(wordRusText[i].textContent);
  wordRus[i].classList.remove('word-rus');
  wordRus[i].classList.add('lh-min');
}
}

const newWordsBtn = document.querySelector('.new-words-btn').onclick = viewNewWords;

function viewNewWords() {
  let newWord = document.querySelectorAll('.new-word');
  for (let i = 0; i < newWord.length; i++) {
    newWord[i].classList.add('new-word-active');
  }
}