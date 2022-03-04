const wordRusText = document.querySelectorAll('.word__rus-text');
const wordEngMask1 = document.querySelectorAll('.word-eng__mask');

let lesson1Rus = [
	"Я работаю",
	"Мы работаем",
	"Они работают",
	"Ты работаешь",
	"Я работаю здесь",
	"Я учусь",
	"Я понимаю",
	"Я понимаю тебя",
	"Я знаю это",
	"Я знаю это очень хорошо",
	"Я живу в России",
	"Я говорю по-английски",
	"Я хожу в школу",
	"Я хожу на работу",
	"У меня есть брат",
	"У меня есть идея",
	"У меня есть сестра",
	"У меня есть машина",
	"Я думаю так",
	"Я вижу это",
	"Мне нужно это",
	"Я помню это",
	"Я помню это очень хорошо",
	"Мы понимаем тебя",
	"Мы говорим по-английски",
	"Ты знаешь это",
	"Ты видишь это",
	"Они помогают мне",
	"Они идут на работу",
	"Мы помним это",
	"Ты говоришь по-английски очень хорошо",
	"Мы живём здесь",
	"Я живу в этом городе",
	"Мы живём в этой стране",
]

const wordEngText = document.querySelectorAll('.word__eng-text');

let lesson1Eng = [
	"i work",
	"we work",
	"they work",
	"you work",
	"i work here",
	"i study",
	"i understand",
	"i understand you",
	"i know it",
	"i know it very well",
	"i live in russia",
	"i speak english",
	"i go to school",
	"i go to work",
	"i have a brother",
	"i have an idea",
	"i have a sister",
	"i have a car",
	"i think so",
	"i see it",
	"i want it",
	"i remember it",
	"i remember it very well",
	"we understand you",
	"we speak english",
	"you know it",
	"you see it",
	"they help me",
	"they go to work",
	"we remember it",
	"you speak english very well",
	"we leave here",
	"i leave in this city",
	"we leave in this country",
]

for (let i = 0; i < wordRusText.length; i++) {
	wordRusText[i].textContent = lesson1Rus[i];
	wordEngMask1[i].textContent = lesson1Eng[i];
}


let lesson1EngMask = [];
//переводит первую букву массива lesson5__1Eng в верхний регистр
lesson1Eng.forEach(elem => {
	let z = elem[0].toUpperCase();
	elem[0] = z;
	lesson1EngMask.push(z + elem.slice(1));
})




for (let i = 0; i < wordRusText.length; i++) {
	wordRusText[i].textContent = lesson1Rus[i];
	wordEngMask1[i].textContent = lesson1EngMask[i];

	//если много букв в строке, уменьшает line-height
	if (lesson1Rus[i].length > 43) {
		// console.log(lesson5__1Rus[i].length);
		// console.log(i);
		// console.log(wordRusText[i].textContent);
		wordRus[i].classList.add('lh-min');
	}
}


//ввод перевода
document.querySelector('.result-btn').onclick = () => {
	let inpEng = document.querySelectorAll('.inp-eng');
	let corrAnswer = 0;
	let numPhrases = inpEng.length;

	for (let k = 0; k < lesson1Eng.length; k++) {
		let val = inpEng[k].value;
		val = val.toLowerCase();
		val = val.trim();

		if (val == lesson1Eng[k]) {
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
	console.log(lesson1Eng[11]);
	let result = (100 / numPhrases) * corrAnswer;
	result = Math.round(result);
	console.log(`урок усвоен на ${result} %`);
	document.querySelector('.result').innerHTML = `Урок усвоен на ${result} %`;

	// document.querySelector('.result').style.color = `hsl(${result}, 85%, 50%);`;
	document.querySelector('.result').style.color = "#FE0100";
	console.log(`результат ${result}`);

	//получаем цвет элемента----------------------------------------------
	
	let resultCont = document.querySelector('.result');

	// let colorsContainer = document.querySelector('.colors-container');

	// //добавляем класс anim-result
	// colorsContainer.classList.add('anim-result');


	// let strColors = '';
	// let arrColors = [];
	// let z = 0;
	// let intColor = setInterval(function checkColor() {
	// 	let a = window.getComputedStyle(colorsContainer).backgroundColor;//получаем цвет элемента
	// 	z = z + 1;
	// 	strColors += a;
	// 	colorsContainer.innerHTML = strColors;
	// 	arrColors.push(a);
	// 	if (z > 99) {
	// 		clearInterval(intColor);
	// 		console.log(arrColors);
	// 	}
	// }, 100);
//----------------------------------------------------------------------
let colorsResult = ["rgb(238, 14, 12)", "rgb(236, 15, 12)", "rgb(234, 17, 12)", "rgb(232, 19, 12)", "rgb(230, 20, 12)", "rgb(228, 22, 12)", "rgb(226, 24, 12)", "rgb(224, 26, 12)", "rgb(222, 27, 12)", "rgb(219, 29, 12)", "rgb(217, 31, 12)", "rgb(215, 32, 12)", "rgb(213, 34, 12)", "rgb(211, 36, 12)", "rgb(209, 38, 12)", "rgb(207, 39, 12)", "rgb(205, 41, 12)", "rgb(203, 43, 12)", "rgb(201, 45, 12)", "rgb(199, 46, 12)", "rgb(197, 48, 12)", "rgb(195, 49, 12)", "rgb(193, 51, 12)", "rgb(191, 53, 12)", "rgb(189, 55, 12)", "rgb(187, 56, 12)", "rgb(185, 58, 12)", "rgb(182, 60, 13)", "rgb(180, 62, 13)", "rgb(178, 63, 13)", "rgb(176, 65, 13)", "rgb(174, 66, 13)", "rgb(172, 68, 13)", "rgb(170, 70, 13)", "rgb(168, 72, 13)", "rgb(166, 73, 13)", "rgb(164, 75, 13)", "rgb(162, 77, 13)", "rgb(160, 78, 13)", "rgb(158, 80, 13)", "rgb(156, 82, 13)", "rgb(154, 83, 13)", "rgb(152, 85, 13)", "rgb(150, 87, 13)", "rgb(148, 89, 13)", "rgb(145, 90, 13)", "rgb(143, 92, 13)", "rgb(141, 94, 13)", "rgb(139, 95, 13)", "rgb(137, 97, 13)", "rgb(135, 99, 13)", "rgb(133, 100, 13)", "rgb(131, 102, 13)", "rgb(129, 104, 13)", "rgb(127, 106, 13)", "rgb(125, 107, 13)", "rgb(123, 109, 13)", "rgb(121, 111, 13)", "rgb(119, 112, 13)", "rgb(117, 114, 13)", "rgb(115, 116, 13)", "rgb(113, 117, 13)", "rgb(111, 119, 13)", "rgb(109, 121, 13)", "rgb(106, 123, 13)", "rgb(104, 124, 13)", "rgb(102, 126, 13)", "rgb(100, 128, 13)", "rgb(98, 129, 13)", "rgb(96, 131, 13)", "rgb(94, 133, 13)", "rgb(92, 134, 13)", "rgb(90, 136, 13)", "rgb(88, 138, 13)", "rgb(86, 140, 13)", "rgb(84, 141, 13)", "rgb(82, 143, 13)", "rgb(80, 145, 13)", "rgb(78, 146, 13)", "rgb(76, 148, 13)", "rgb(74, 150, 13)", "rgb(72, 151, 13)", "rgb(69, 153, 14)", "rgb(67, 155, 14)", "rgb(65, 157, 14)", "rgb(63, 158, 14)", "rgb(61, 160, 14)", "rgb(59, 162, 14)", "rgb(57, 163, 14)", "rgb(55, 165, 14)", "rgb(53, 167, 14)", "rgb(51, 168, 14)", "rgb(49, 170, 14)", "rgb(47, 172, 14)", "rgb(45, 174, 14)", "rgb(43, 175, 14)", "rgb(41, 177, 14)", "rgb(39, 179, 14)", "rgb(37, 180, 14)", "rgb(35, 182, 14)"];

console.log(typeof result);

	resultCont.style.color = colorsResult[result];
	console.log(colorsResult[result]);
}




//FE0100
  //28A40
	// let zzz = 0xFE0100;
	// console.log(zzz.toString(16));

