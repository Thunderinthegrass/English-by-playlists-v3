const wordRusText = document.querySelectorAll('.word__rus-text');
const wordRus = document.querySelectorAll('.word-rus');

const wordEngMask5__1 = document.querySelectorAll('.word-eng__mask');

let lesson5__1Rus = [
  "Я хочу это",
  "У него есть доллары",
  "Я понимаю тебя",
  "Я хочу больше практики",
  "Она видит эту ошибку",
  "Ты знаешь это",
  "Она действительно помнит это",
  "У этой компании есть деньги",
  "Я вижу эту ошибку",
  "Она помнит это",
  "Она говорит по-английски очень хорошо",
  "Моя сестра учится там",
  "Я вижу эти ошибки",
  "Он помогает мне",
  "У меня есть брат",
  "У неё есть машина",
  "Моя сестра живёт в этом месте",
  "Это помогает мне",
  "Твои уроки реально помогают",
  "Ты очень хорошо говоришь по-английски",
  "Мы хотим это",
  "Мой друг думает так же",
  "Он скучает по тебе",
  "У него есть собака",
  "Она читает английские книги",
  "Мы живём здесь",
  "Это выглядит странным",
  "У него есть дом",
  "Я учусь там",
  "Я вижу её успех",
  "Я учусь здесь",
  "Он живёт в этом доме",
  "Они всё знают",
  "Я знаю это",
  "У меня есть брат",
  "Она пытается выучить английский",
  "Мы живём в этой стране",
  "Мы живём в России",
  "Ты помогаешь мне",
  "Я живу в этом городе",
  "Они иногда играют в компьютерные игры",
  "Я понимаю того человека",
  "Он пытается помочь мне",
  "Я хожу на работу",
  "у меня есть машина",
  "Это предложение кажется действительно стрынным",
  "Он преподаёт английский очень хорошо",
  "Мы часто делаем это",
  "Я очень хорошо тебя понимаю",
  "Она живёт в том городе",
  "Он знает это",
  "У неё есть кот",
  "Это предложени кажется интересным",
  "Они идут в школу",
  "Он читает на английском",
  "Мы думаем так",
  "Она чувствует себя счастливой",
  "Я вижу это",
  "Я знаю это очень хорошо",
  "У меня есть идея",
  "Она пытается понять это",
];

const wordEngText = document.querySelectorAll('.word__eng-text');
let lesson5__1Eng = [
  "i want it",
  "he has dollars",
  "i understand you",
  "i want more practice",
  "she sees this mistake",
  "you know it",
  "she really remembers it",
  "this company has money",
  "i see this mistake",
  "she remembers it",
  "she speaks english very well",
  "my sister studies there",
  "i see these mistakes",
  "he helps me",
  "i have a brother",
  "she has a car",
  "my sister leaves in this place",
  "it help me",
  "your lessons really help",
  "you speak english very well",
  "we want it",
  "my friend thinks the same",
  "he misses you",
  "he has a dog",
  "she reads english books",
  "we leave here",
  "it looks strange",
  "he has a house",
  "i study there",
  "i see its success",
  "i study here",
  "he leaves in this house",
  "they know ewerything",
  "i know it",
  "i have a brother",
  "she tryes to learn English",
  "we leave in this country",
  "we leave in russia",
  "you help me",
  "i leave in this city",
  "they sometimes play computer games",
  "i understand that person",
  "he tries to help me",
  "i go to work",
  "i have a car",
  "this offer seems really strange",
  "he teaches english",
  "we often do it",
  "i understand you very well",
  "she leaves in that city",
  "he knows it",
  "she has a cat",
  "this offer looks interesting",
  "they go to school",
  "he reads in english",
  "we think so",
  "she feels happy",
  "i see it",
  "i know it very well",
  "i have an idea",
  "she tryes to understand it",
];

let lesson5__1EngMask = [];
//переводит первую букву массива lesson5__1Eng в верхний регистр
lesson5__1Eng.forEach(elem => {
  let z = elem[0].toUpperCase();
  elem[0] = z;
  lesson5__1EngMask.push(z + elem.slice(1));
})




for (let i = 0; i < wordRusText.length; i++) {
  wordRusText[i].textContent = lesson5__1Rus[i];
  wordEngMask5__1[i].textContent = lesson5__1EngMask[i];

//если много букв в строке, уменьшает line-height
  if(lesson5__1Rus[i].length > 43) {
    // console.log(lesson5__1Rus[i].length);
    // console.log(i);
    // console.log(wordRusText[i].textContent);
    wordRus[i].classList.add('lh-min');
  }
}


//ввод перевода
document.querySelector('.result-btn').onclick = () => {
    let inpEng = document.querySelectorAll('.inp-eng');

    for (let k = 0; k < lesson5__1Eng.length; k++) {
        let val = inpEng[k].value;
        val = val.toLowerCase();
        val = val.trim();

        if (val == lesson5__1Eng[k]) {
            inpEng[k].classList.remove('mistake');
            inpEng[k].classList.add('correctly');
        }
        else {
            inpEng[k].classList.remove('correctly');
            inpEng[k].classList.add('mistake');
        }
    }
}


