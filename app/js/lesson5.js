const wordRusText = document.querySelectorAll('.word__rus-text');
const wordRus = document.querySelectorAll('.word-rus');

let lesson5Rus = [
  "У меня есть семья",
  "Мы часто делаем это",
  "Ты часто говоришь это",
  "Мы часто ходим в кино",
  "Он знает эту вещь",
  "Она видит эту ошибку",
  "Это выглядит таким интересным",
  "Это",
  "Я вижу эту ошибку",
  "Эти",
  "Я вижу эти ошибки",
  "Тот, та",
  "Я понимаю того человека",
  "Те",
  "Я понимаю тех людей",
  "Он ходит в школу",
  "Она всегда делает это очень хорошо",
  "У него есть идея",
  "Я вижу эту ошибку",
  "Я вижу эти ошибки",
  "Мой друг думает так",
  "Мой друг думает так же",
  "Мы",
  "Наш",
  "Наш босс знает это",
  "Ты",
  "Твой",
  "Все твои идеи кажутся очень интересными",
  "Они",
  "Их",
  "Их предложения кажутся действительно странными",
  "Он",
  "Его",
  "Его идея кажется очень интересной",
  "Она",
  "Её",
  "Её слова кажутся странными",
  "Я вижу её(компании) успех",
];

const wordEngText = document.querySelectorAll('.word__eng-text');
let lesson5Eng = [
  "I have a family",
  "We often do it",
  "You often say it",
  "We often go to the cinema",
  "He knows this thing",
  "She sees this mistake",
  "It looks so interesting",
  "This",
  "I see this mistake",
  "These",
  "I see these mistakes",
  "That",
  "I understand that person",
  "Those",
  "I understand those people",
  "He goes to school",
  "He always does it very well",
  "He has an idea",
  "I see this mistake",
  "I see these mistakes",
  "My friend thinks so",
  "Me friend thinks the same",
  "We",
  "Our",
  "Our boss knows it",
  "You",
  "Your",
  "All your ideas seem really interesting",
  "They",
  "Their",
  "Their offers seem really strange",
  "He",
  "His",
  "His idea seems very interesting",
  "She",
  "Her",
  "Her words seem strange",
  "I see its sussess",
];


for (let i = 0; i < wordRusText.length; i++) {
  wordRusText[i].textContent = lesson5Rus[i];
  wordEngText[i].textContent = lesson5Eng[i];

  if(lesson5Rus[i].length > 43) {
    // console.log(lesson6Rus[i].length);
    // console.log(i);
    // console.log(wordRusText[i].textContent);
    wordRus[i].classList.remove('word-rus');
    wordRus[i].classList.add('lh-min');
  }
}