 //если после прилагательного существительное, ставим артикль а
 const wordRusText = document.querySelectorAll('.word__rus-text');
 const wordRus = document.querySelectorAll('.word-rus');
 let lesson6Rus = [
  "Я хочу улучшить свою грамматику",
  "Я хочу пойти туда ещё один раз",
  "Она хочет жить в другом месте",
  "Она хочет сделать это",
  "Я хочу знать это",
  "Я хочу говорить по-английски без ошибок",
  "Она хочет увидеть тебя прямо сейчас",
  "Я хочу этот компьютер",
  "Я хочу это платье",
  "Я хочу хорошую машину",
  "Он хочет купить эту вещь",
  "Я хочу поехать туда снова",
  "Я хочу иметь хорошую работу",
  "Я хочу говорить по-английски свободно и правильно",
  "Я действительно хочу этого",
  "Я хочу делать это",
  "Я хочу быть счастливым",
  "Я хочу поблагодарить тебя",
  "Я хочу знать английский лучше",
  "Я действительно хочу это знать",
  "Я хочу новый компьютер",
  "Я хочу говорить по-английски лучше",
  "Я хочу говорить по-английски правильно",
  "Мои родители хотят жить в другом месте",
  "Я хочу улучшить свой английский",
  "Я хочу поехать в другое место",
  "Я хочу новую квартиру",
  "Я хочу купить новую квартиру",
  "Мой друг хочет жить за границей",
  "Она хочет сделать это прямо сеёчас",
  "Мой друг хочет проверить это ещё один раз",
  "Я хочу это",
  "Я хочу поехать за границу",
  "Я хочу эту вещь",
  "Я хочу хорошую машину",
  "Я хочу выучить английский быстро",
  "Мы хотим знать английский",
];

const wordEngText = document.querySelectorAll('.word__eng-text');
let lesson6Eng = [
  "I want to improve my grammar",
  "I want to go there one more time",
  "She wants to live in another place",
  "She wants to do it",
  "I want to know it",
  "I want to speak English without mistakes",
  "She wants to see you right now",
  "I want this computer",
  "I want this dress",
  "I want a good car",
  "He wants to buy this thing",
  "I have to go there again",
  "I want to have a good job",
  "I want to speak English fluently and correctly",
  "I really want it",
  "I want to do it",
  "I want to be happy",
  "I want to thank you",
  "I want to know English better",
  "I really want to know it",
  "I want a new computer",
  "I want to speak English better",
  "I want to speak English correctly",
  "My parents want to live in another place",
  "I have to improve my English",
  "I want to go to another place",
  "I want a new flat (apartment)",
  "I have to buy a new flat (apartment)",
  "My friend wants to live abroad",
  "She wants to do it right now",
  "My friend wants to check it one more time",
  "I want it",
  "I want to go abroad",
  "I want this thing",
  "I want to have a good car",
  "I want to learn English fast",
  "We wants to know English",
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