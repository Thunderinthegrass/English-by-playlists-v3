const wordRusText = document.querySelectorAll('.word__rus-text');
const wordRus = document.querySelectorAll('.word-rus');

const wordEngMask5__2 = document.querySelectorAll('.word-eng__mask');

let lesson5__2Rus = [
  "Мой босс читает все документы",
  "Он пытается найти работу",
  "Они учатся очень усердно",
  "Эти уроки помогают мне",
  "У него есть деньги",
  "Я живу в россии",
  "Ты работаешь очень усердно",
  "Он иногда играет в компьютерные игры",
  "Её брат часто говорит это",
  "Мои родители знают это",
  "Мой босс обычно делает так",
  "У них есть деньги",
  "У неё есть эта информация",
  "Мои родители хотят сделать это",
  "Она иногда ходит в кино",
  "Она хочет больше практики", 
  "Я помню это очень хорошо",
  "Это кажется интересным",
  "Он чувствует себя счастливым", 
  "Она скучает по тебе",
  "У моего друга есть машина",
  "У его отца есть машина",
  "Я чувствую себя счастливым",
  "Мы хотит больше практики",
  "Это действительно случается",
  "Мы понимаем тебя",
  "Он часто ходит в кино",
  "Он также помнит это",
  "Он делает это каждый день",
  "Я помню это",
  "Мой босс всегда говорит это",
  "Он живет там",
  "Эти уроки реально помогают",
  "Я чувствую это",
  "Это случается",
  "Он также работает здесь",
  "Я хожу в школу",
  "Наша мать думает так же",
  "Наша мать также думает так",
  "Он действительно думает так",
  "Это действительно помогает мне",
  "Она также работает там",
  "Он хочет большего",
  "Он знает больше",
  "Он работает очень усердно",
  "Он думает так",
  "У него есть компания",
  "Эта польза кажется такой большой",
  "Мой босс знает всё",
  "Она хочет пойти туда",
  "Она читает на английском",
  "Мы говорим по-английски",
  "Ты видишь это",
  "Он хочет сделать это",
  "Она чувствует себя такой счастливой",
  "Я понимаю",
  "У меня есть сестра",
  "У него есть идея",
  "У неё есть интересные идеи",
  "Я вижу всё",
  "Она работает очень усердно",
  "Мой босс обычно проверяет всю информацию",
  "Я люблю тебя",
];

const wordEngText = document.querySelectorAll('.word__eng-text');
let lesson5__2Eng = [
  "my boss reeds all the documents",
  "he tryes to find the job",
  "they study very hard",
  "this lessons help me",
  "he has money",
  "i live in russia",
  "you work very hard",
  "he sometimes plays computer games",
  "her brother often says it",
  "my parents know it",
  "my boss usually does so",
  "they have money",
  "she has this information",
  "my parents want to do it",
  "she sometimes goes to the cinema",
  "she wants more practice",
  "i remember it very well",
  "it seems interesting",
  "he feels happy",
  "she misses you",
  "my friend has a car",
  "he father has a car",
  "a feel happy",
  "he wants more practice",
  "it really happens",
  "we understand you",
  "he often goes to the cinema",
  "he also remembers it",
  "he does it every day",
  "i remember it",
  "my boss always says it",
  "he lives there",
  "this lessons really help",
  "i feel it",
  "it happens",
  "he also works here",
  "i go to school",
  "our mother thinks the same",
  "our mother also thinks so",
  "he really thinks so",
  "it really helps me",
  "she also works there",
  "he wants more",
  "he knows more",
  "he works very hard",
  "he thinks so",
  "he has a company",
  "its profit seems so big",
  "my boss knows everythink",
  "she wants to go there",
  "she reeds in english",
  "we speak english",
  "you see it",
  "he wants to do it",
  "she feels so happy",
  "i understand",
  "i have a sister",
  "he has an idea",
  "she has interesting ideas",
  "i see everything",
  "she works very hard",
  "my boss usually checks all the information",
  "i love you",
];

let lesson5__2EngMask = [];
//переводит первую букву массива lesson5__1Eng в верхний регистр
lesson5__2Eng.forEach(elem => {
  let z = elem[0].toUpperCase();
  elem[0] = z;
  lesson5__2EngMask.push(z + elem.slice(1));
})




for (let i = 0; i < wordRusText.length; i++) {
  wordRusText[i].textContent = lesson5__2Rus[i];
  wordEngMask5__2[i].textContent = lesson5__2EngMask[i];

//если много букв в строке, уменьшает line-height
  if(lesson5__2Rus[i].length > 43) {
    // console.log(lesson5__1Rus[i].length);
    // console.log(i);
    // console.log(wordRusText[i].textContent);
    wordRus[i].classList.add('lh-min');
  }
}


//ввод перевода
document.querySelector('.result-btn').onclick = () => {
    let inpEng = document.querySelectorAll('.inp-eng');

    for (let k = 0; k < lesson5__2Eng.length; k++) {
        let val = inpEng[k].value;
        val = val.toLowerCase();
        val = val.trim();

        if (val == lesson5__2Eng[k]) {
            inpEng[k].classList.remove('mistake');
            inpEng[k].classList.add('correctly');
        }
        else {
            inpEng[k].classList.remove('correctly');
            inpEng[k].classList.add('mistake');
        }
    }
}


//ввод перевода
document.querySelector('.result-btn').onclick = () => {
	let inpEng = document.querySelectorAll('.inp-eng');
	let corrAnswer = 0;
	let numPhrases = inpEng.length;

	for (let k = 0; k < lesson5__2Eng.length; k++) {
		let val = inpEng[k].value;
		val = val.toLowerCase();
		val = val.trim();

		if (val == lesson5__2Eng[k]) {
			corrAnswer += 1;
			inpEng[k].classList.remove('mistake');
			inpEng[k].classList.add('correctly');
		}
		else {
			inpEng[k].classList.remove('correctly');
			inpEng[k].classList.add('mistake');
		}
	}
	console.log(numPhrases);
	console.log(corrAnswer);
	console.log(lesson5__2Eng[11]);
	let result = (100 / numPhrases) * corrAnswer;
	result = Math.round(result);
	console.log(`урок усвоен на ${result} %`);
	document.querySelector('.result').innerHTML = `Урок усвоен на ${result} %`;
}


