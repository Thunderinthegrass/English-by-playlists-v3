let tableCheckEng = document.querySelector('.table-check-eng');
let showTranslate = document.querySelectorAll('.show-translate');
// let showTranslateRus = document.querySelectorAll('.show-translate-rus');
let hideTranslateBg = document.querySelector('.hide-translate-bg');
let showTranslateBg = document.querySelector('.show-translate-bg');


tableCheckEng.onclick = function () {
	if (tableCheckEng.checked) {
		hideTranslateBg.style.transform = "translateX(0)";
		showTranslateBg.style.transform = "translateX(-100%)";
	}
	else {
		hideTranslateBg.style.transform = "translateX(100%)";
		showTranslateBg.style.transform = "translateX(0)";
	}
}

// tableCheckRus.onclick = function () {
// 	if (tableCheckRus.checked) {
// 		wordRusMask.forEach(element => {
// 			element.classList.toggle('mask');
// 		});
// 		hideTranslateBgRus.style.transform = "translateX(100%)";
// 		showTranslateBgRus.style.transform = "translateX(0)";
// 	}
// 	else {
// 		wordRusMask.forEach(element => {
// 			element.classList.remove('mask');
// 		});
// 		hideTranslateBgRus.style.transform = "translateX(0)";
// 		showTranslateBgRus.style.transform = "translateX(-100px)";
// 	}
// }


// Прокрутка номеров уроков
function scrBar() {

; (function () {
	'use strict';

	function ScrollBox(container, nameEvent) {
		// имя события прокрутки
		this.nameEvent = nameEvent;
		// родительский элемент в котором находится контент и скроллбар
		this.viewport = container.querySelector('.viewport');
		// элемент с контентом
		this.content = this.viewport.querySelector('.content');
		// высоты полученных элементов
		this.viewportHeight = this.viewport.offsetHeight;
		this.contentHeight = this.content.scrollHeight;
		// возможная максимальная прокрутка контента
		this.max = this.viewport.clientHeight - this.contentHeight;
		// соотношение между высотами вьюпорта и контента
		this.ratio = this.viewportHeight / this.contentHeight;
		// минимальная высота ползунка скроллбара
		this.scrollerHeightMin = 25;
		// шаг прокручивания контента при наступлении события 'wheel'
		// чем меньше шаг, тем медленнее и плавнее будет прокручиваться контент
		this.step = 20;
		// флаг нажатия на левую кнопку мыши
		this.pressed = false;
	}

	// для сокращения записи, создадим переменную, которая будет ссылаться
	// на прототип 'ScrollBox'
	const fn = ScrollBox.prototype;

	fn.init = function () {
		// если высота контента меньше или равна высоте вьюпорта,
		// выходим из функции
		if (this.viewportHeight >= this.contentHeight) return;
		// формируем полосу прокрутки и полунок
		this.createScrollbar();
		// устанавливаем обработчики событий
		this.registerEventsHandler();
	};

	fn.createScrollbar = function () {
		// создаём новые DOM-элементы DIV из которых будет
		// сформирован скроллбар
		let scrollbar = document.createElement('div'),
			scroller = document.createElement('div');

		// присваиваем созданным элементам соответствующие классы
		scrollbar.className = 'scrollbar';
		scroller.className = 'scroller';

		// вставляем созданные элементы в document
		scrollbar.appendChild(scroller);
		this.viewport.appendChild(scrollbar);

		// получаем DOM-объект ползунка полосы прокрутки, вычисляем и
		// устанавливаем его высоту
		this.scroller = this.viewport.querySelector('.scroller');
		this.scrollerHeight = parseInt(this.ratio * this.viewportHeight);
		this.scrollerHeight = (this.scrollerHeight < this.scrollerHeightMin) ? this.scrollerHeightMin : this.scrollerHeight;
		this.scroller.style.height = this.scrollerHeight + 'px';
		// вычисляем максимально возможное смещение ползунка от верхней границы вьюпорта
		// это смещение зависит от высоты вьюпорта и высоты самого ползунка
		this.scrollerMaxOffset = this.viewportHeight - this.scroller.offsetHeight;
	};

	// регистрация обработчиков событий
	fn.registerEventsHandler = function (e) {
		// вращение колёсика мыши
		if (this.nameEvent === 'wheel') {
			this.viewport.addEventListener('wheel', this.scroll.bind(this));
		} else {
			this.content.addEventListener('scroll', () => {
				this.scroller.style.top = (this.content.scrollTop * this.ratio) + 'px';
			});
		}

		// нажатие на левую кнопку мыши
		this.scroller.addEventListener('mousedown', e => {
			// координата по оси Y нажатия левой кнопки мыши
			this.start = e.clientY;
			// устанавливаем флаг, информирующий о нажатии левой кнопки мыши
			this.pressed = true;
		});

		// перемещение мыши
		document.addEventListener('mousemove', this.drop.bind(this));

		// отпускание левой кнопки мыши
		document.addEventListener('mouseup', () => this.pressed = false);
	};

	fn.scroll = function (e) {
		e.preventDefault();
		// направление вращения колёсика мыши
		let dir = -Math.sign(e.deltaY);
		// шаг прокручивания контента, в зависимости от прокручивания
		// колёсика мыши
		let step = (Math.abs(e.deltaY) >= 3) ? this.step * dir : 0;

		// управляем позиционированием контента
		this.content.style.top = (this.content.offsetTop + step) + 'px';
		// ограничиваем прокручивание контента вверх и вниз
		if (this.content.offsetTop > 0) this.content.style.top = '0px';
		if (this.content.offsetTop < this.max) this.content.style.top = this.max + 'px';

		// перемещаем ползунок пропорционально прокручиванию контента
		this.scroller.style.top = (-this.content.offsetTop * this.ratio) + 'px';
	};

	fn.drop = function (e) {
		e.preventDefault();
		// если кнопка мыши не нажата, прекращаем работу функции
		if (this.pressed === false) return;

		// величина перемещения мыши
		let shiftScroller = this.start - e.clientY;
		// изменяем положение бегунка на величину перемещения мыши
		this.scroller.style.top = (this.scroller.offsetTop - shiftScroller) + 'px';

		// ограничиваем перемещение ползунка по верхней границе вьюпорта
		if (this.scroller.offsetTop <= 0) this.scroller.style.top = '0px';
		// ограничиваем перемещение ползунка по нижней границе вьюпорта
		// сумма высоты ползунка и его текущего отступа от верхней границы вьюпорта
		let totalHeight = this.scroller.offsetHeight + this.scroller.offsetTop;
		if (totalHeight >= this.viewportHeight) this.scroller.style.top = this.scrollerMaxOffset + 'px';

		// расстояние, на которую должен переместиться контент
		// это расстояние пропорционально смещению ползунка
		let shiftContent = this.scroller.offsetTop / this.ratio;
		// прокручиваем контент по событию 'wheel'
		if (this.nameEvent === 'wheel') {
			// прокручиваем контент на величину пропорциональную перемещению ползунка,
			// она имеет обратный знак, т.к. ползунок и контент прокручиваются
			// в противоположных направлениях
			this.content.style.top = -shiftContent + 'px';
			// прокручиваем контент по событию 'scroll'
		} else {
			this.content.scrollTo(0, shiftContent);
		}
		// устанавливаем координату Y начала движения мыши равной текущей координате Y
		this.start = e.clientY;
	};

	// выбираем все блоки на странице, в которых может понадобиться
	// прокрутка контента
	const containers = document.querySelectorAll('[data-control]');
	// перебираем полученную коллекцию элементов
	for (const container of containers) {
		// имя события, используемого для прокручивания контента
		let nameEvent = container.getAttribute('data-control');
		// с помощью конструктора 'ScrollBox' создаём экземпляр объекта,
		// в котором будем прокручивать контент
		let scrollbox = new ScrollBox(container, nameEvent);
		// создание скроллбара, исходя из полученных в конструкторе высот
		// контента и вьюпорта текущего блока, регистрация обработчиков событий
		scrollbox.init();
	}
})();
}

scrBar();
// --------------------------

// --------кнопки показать-скрыть русские слова-------------
let buttonView = document.querySelectorAll('.button-view');
let wordRusMask = document.querySelectorAll('.word-rus__mask');

for (let k = 0; k < buttonView.length; k++) {
	buttonView[k].onclick = function () {
		wordRusMask[k].classList.toggle('hide');
		if (buttonView[k].classList.contains('bg-close')) {
			buttonView[k].classList.toggle('bg-check');
		}
		else if (buttonView[k].classList.contains('bg-check')) {
			buttonView[k].classList.remove('bg-check');
			buttonView[k].classList.toggle('bg-close');
		}
	}
}

// --------кнопки показать-скрыть английские слова-------------
let buttonViewEng = document.querySelectorAll('.button-view-eng');
let wordEngMask = document.querySelectorAll('.word-eng__mask');

for (let k = 0; k < buttonViewEng.length; k++) {
	buttonViewEng[k].onclick = function () {
		wordEngMask[k].classList.toggle('mask-eng');
		if (buttonViewEng[k].classList.contains('bg-close')) {
			buttonViewEng[k].classList.toggle('bg-check');
		}
		else if (buttonViewEng[k].classList.contains('bg-check')) {
			buttonViewEng[k].classList.remove('bg-check');
			buttonViewEng[k].classList.toggle('bg-close');
		}
	}
}


// table-check-button-rus-----------------
let tableCheckRus = document.querySelector('.table-check-rus');
let showTranslateBgRus = document.querySelector('.show-translate-bg-rus');
let hideTranslateBgRus = document.querySelector('.hide-translate-bg-rus');


tableCheckRus.onclick = function () {
	for (let k = 0; k < wordRusMask.length; k++) {
		if (tableCheckRus.checked){
			wordRusMask[k].classList.add('hide');
			hideTranslateBgRus.style.transform = "translateX(100%)";
			showTranslateBgRus.style.transform = "translateX(0)";

			if (buttonView[k].classList.contains('bg-close')) {
				buttonView[k].classList.remove('bg-close');
				buttonView[k].classList.add('bg-check');
			}
		}
		else {
			wordRusMask[k].classList.remove('hide');
			hideTranslateBgRus.style.transform = "translateX(0)";
			showTranslateBgRus.style.transform = "translateX(-100px)";
			if (buttonView[k].classList.contains('bg-check')) {
				buttonView[k].classList.remove('bg-check');
				buttonView[k].classList.add('bg-close');
			}
		}
	}
}

// table-check-button-eng-----------------
let showTranslateBgEng = document.querySelector('.show-translate-bg-eng');
let hideTranslateBgEng = document.querySelector('.hide-translate-bg-eng');


tableCheckEng.onclick = function () {
	for (let k = 0; k < wordEngMask.length; k++) {
		if (tableCheckEng.checked){
			wordEngMask[k].classList.add('mask-eng');
			hideTranslateBgEng.style.transform = "translateX(0)";
			showTranslateBgEng.style.transform = "translateX(-100px)";

			if (buttonViewEng[k].classList.contains('bg-close')) {
				buttonViewEng[k].classList.remove('bg-close');
				buttonViewEng[k].classList.add('bg-check');
			}
		}
		else {
			wordEngMask[k].classList.remove('mask-eng');
			hideTranslateBgEng.style.transform = "translateX(100%)";
			showTranslateBgEng.style.transform = "translateX(0)";
			if (buttonViewEng[k].classList.contains('bg-check')) {
				buttonViewEng[k].classList.remove('bg-check');
				buttonViewEng[k].classList.add('bg-close');
			}
		}
	}
}


// кнопки показать-скрыть английские слова------------------------------------------
// let buttonViewEng1 = document.querySelector('.button-view-eng-1');
// let buttonViewEng2 = document.querySelector('.button-view-eng-2');
// let buttonViewEng3 = document.querySelector('.button-view-eng-3');
// let buttonViewEng4 = document.querySelector('.button-view-eng-4');
// let buttonViewEng5 = document.querySelector('.button-view-eng-5');
// let buttonViewEng6 = document.querySelector('.button-view-eng-6');
// let buttonViewEng7 = document.querySelector('.button-view-eng-7');
// let buttonViewEng8 = document.querySelector('.button-view-eng-8');
// let buttonViewEng9 = document.querySelector('.button-view-eng-9');
// let buttonViewEng10 = document.querySelector('.button-view-eng-10');
// let buttonViewEng11 = document.querySelector('.button-view-eng-11');
// let buttonViewEng12 = document.querySelector('.button-view-eng-12');
// let buttonViewEng13 = document.querySelector('.button-view-eng-13');
// let buttonViewEng14 = document.querySelector('.button-view-eng-14');
// let buttonViewEng15 = document.querySelector('.button-view-eng-15');
// let buttonViewEng16 = document.querySelector('.button-view-eng-16');
// let buttonViewEng17 = document.querySelector('.button-view-eng-17');
// let buttonViewEng18 = document.querySelector('.button-view-eng-18');
// let buttonViewEng19 = document.querySelector('.button-view-eng-19');
// let buttonViewEng20 = document.querySelector('.button-view-eng-20');
// let buttonViewEng21 = document.querySelector('.button-view-eng-21');
// let buttonViewEng22 = document.querySelector('.button-view-eng-22');
// let buttonViewEng23 = document.querySelector('.button-view-eng-23');
// let buttonViewEng24 = document.querySelector('.button-view-eng-24');
// let buttonViewEng25 = document.querySelector('.button-view-eng-25');
// let buttonViewEng26 = document.querySelector('.button-view-eng-26');
// let buttonViewEng27 = document.querySelector('.button-view-eng-27');
// let buttonViewEng28 = document.querySelector('.button-view-eng-28');
// let buttonViewEng29 = document.querySelector('.button-view-eng-29');
// let buttonViewEng30 = document.querySelector('.button-view-eng-30');
// let buttonViewEng31 = document.querySelector('.button-view-eng-31');
// let buttonViewEng32 = document.querySelector('.button-view-eng-32');
// let buttonViewEng33 = document.querySelector('.button-view-eng-33');
// let buttonViewEng34 = document.querySelector('.button-view-eng-34');

// let wordEngMask1 = document.querySelector('.word-eng__mask-1');
// let wordEngMask2 = document.querySelector('.word-eng__mask-2');
// let wordEngMask3 = document.querySelector('.word-eng__mask-3');
// let wordEngMask4 = document.querySelector('.word-eng__mask-4');
// let wordEngMask5 = document.querySelector('.word-eng__mask-5');
// let wordEngMask6 = document.querySelector('.word-eng__mask-6');
// let wordEngMask7 = document.querySelector('.word-eng__mask-7');
// let wordEngMask8 = document.querySelector('.word-eng__mask-8');
// let wordEngMask9 = document.querySelector('.word-eng__mask-9');
// let wordEngMask10 = document.querySelector('.word-eng__mask-10');
// let wordEngMask11 = document.querySelector('.word-eng__mask-11');
// let wordEngMask12 = document.querySelector('.word-eng__mask-12');
// let wordEngMask13 = document.querySelector('.word-eng__mask-13');
// let wordEngMask14 = document.querySelector('.word-eng__mask-14');
// let wordEngMask15 = document.querySelector('.word-eng__mask-15');
// let wordEngMask16 = document.querySelector('.word-eng__mask-16');
// let wordEngMask17 = document.querySelector('.word-eng__mask-17');
// let wordEngMask18 = document.querySelector('.word-eng__mask-18');
// let wordEngMask19 = document.querySelector('.word-eng__mask-19');
// let wordEngMask20 = document.querySelector('.word-eng__mask-20');
// let wordEngMask21 = document.querySelector('.word-eng__mask-21');
// let wordEngMask22 = document.querySelector('.word-eng__mask-22');
// let wordEngMask23 = document.querySelector('.word-eng__mask-23');
// let wordEngMask24 = document.querySelector('.word-eng__mask-24');
// let wordEngMask25 = document.querySelector('.word-eng__mask-25');
// let wordEngMask26 = document.querySelector('.word-eng__mask-26');
// let wordEngMask27 = document.querySelector('.word-eng__mask-27');
// let wordEngMask28 = document.querySelector('.word-eng__mask-28');
// let wordEngMask29 = document.querySelector('.word-eng__mask-29');
// let wordEngMask30 = document.querySelector('.word-eng__mask-30');
// let wordEngMask31 = document.querySelector('.word-eng__mask-31');
// let wordEngMask32 = document.querySelector('.word-eng__mask-32');
// let wordEngMask33 = document.querySelector('.word-eng__mask-33');
// let wordEngMask34 = document.querySelector('.word-eng__mask-34');


// buttonViewEng1.onclick = function () {
// 	wordEngMask1.classList.toggle('mask-eng');
// }

// buttonViewEng2.onclick = function () {
// 	wordEngMask2.classList.toggle('mask-eng');
// }

// buttonViewEng3.onclick = function () {
// 	wordEngMask3.classList.toggle('mask-eng');
// }

// buttonViewEng4.onclick = function () {
// 	wordEngMask4.classList.toggle('mask-eng');
// }

// buttonViewEng5.onclick = function () {
// 	wordEngMask5.classList.toggle('mask-eng');
// }

// buttonViewEng6.onclick = function () {
// 	wordEngMask6.classList.toggle('mask-eng');
// }

// buttonViewEng7.onclick = function () {
// 	wordEngMask7.classList.toggle('mask-eng');
// }

// buttonViewEng8.onclick = function () {
// 	wordEngMask8.classList.toggle('mask-eng');
// }

// buttonViewEng9.onclick = function () {
// 	wordEngMask9.classList.toggle('mask-eng');
// }

// buttonViewEng10.onclick = function () {
// 	wordEngMask10.classList.toggle('mask-eng');
// }

// buttonViewEng11.onclick = function () {
// 	wordEngMask11.classList.toggle('mask-eng');
// }

// buttonViewEng12.onclick = function () {
// 	wordEngMask12.classList.toggle('mask-eng');
// }

// buttonViewEng13.onclick = function () {
// 	wordEngMask13.classList.toggle('mask-eng');
// }

// buttonViewEng14.onclick = function () {
// 	wordEngMask14.classList.toggle('mask-eng');
// }

// buttonViewEng15.onclick = function () {
// 	wordEngMask15.classList.toggle('mask-eng');
// }

// buttonViewEng16.onclick = function () {
// 	wordEngMask16.classList.toggle('mask-eng');
// }

// buttonViewEng17.onclick = function () {
// 	wordEngMask17.classList.toggle('mask-eng');
// }

// buttonViewEng18.onclick = function () {
// 	wordEngMask18.classList.toggle('mask-eng');
// }

// buttonViewEng19.onclick = function () {
// 	wordEngMask19.classList.toggle('mask-eng');
// }

// buttonViewEng20.onclick = function () {
// 	wordEngMask20.classList.toggle('mask-eng');
// }

// buttonViewEng21.onclick = function () {
// 	wordEngMask21.classList.toggle('mask-eng');
// }

// buttonViewEng22.onclick = function () {
// 	wordEngMask22.classList.toggle('mask-eng');
// }
// buttonViewEng23.onclick = function () {
// 	wordEngMask23.classList.toggle('mask-eng');
// }

// buttonViewEng24.onclick = function () {
// 	wordEngMask24.classList.toggle('mask-eng');
// }

// buttonViewEng25.onclick = function () {
// 	wordEngMask25.classList.toggle('mask-eng');
// }

// buttonViewEng26.onclick = function () {
// 	wordEngMask26.classList.toggle('mask-eng');
// }

// buttonViewEng27.onclick = function () {
// 	wordEngMask27.classList.toggle('mask-eng');
// }

// buttonViewEng28.onclick = function () {
// 	wordEngMask28.classList.toggle('mask-eng');
// }

// buttonViewEng29.onclick = function () {
// 	wordEngMask29.classList.toggle('mask-eng');
// }

// buttonViewEng30.onclick = function () {
// 	wordEngMask30.classList.toggle('mask-eng');
// }

// buttonViewEng31.onclick = function () {
// 	wordEngMask31.classList.toggle('mask-eng');
// }

// buttonViewEng32.onclick = function () {
// 	wordEngMask32.classList.toggle('mask-eng');
// }

// buttonViewEng33.onclick = function () {
// 	wordEngMask33.classList.toggle('mask-eng');
// }

// buttonViewEng34.onclick = function () {
// 	wordEngMask34.classList.toggle('mask-eng');
// }

//Добавление данных на страницу 
//lesson1
// const wordRusText = document.querySelectorAll('.word__rus-text');

// let lesson1Rus = [
// 	"Я работаю",
// 	"Мы работаем",
// 	"Они работают",
// 	"Ты работаешь",
// 	"Я работаю здесь",
// 	"Я учусь",
// 	"Я понимаю",
// 	"Я понимаю тебя",
// 	"Я знаю это",
// 	"Я знаю это очень хорошо",
// 	"Я живу в России",
// 	"Я говорю по-английски",
// 	"Я хожу в школу",
// 	"Я хожу на работу",
// 	"У меня есть брат",
// 	"У меня есть идея",
// 	"У меня есть сестра",
// 	"У меня есть машина",
// 	"Я думаю так",
// 	"Я вижу это",
// 	"Мне нужно это",
// 	"Я помню это",
// 	"Я помню это очень хорошо",
// 	"Мы понимаем тебя",
// 	"Мы говорим по-английски",
// 	"Ты знаешь это",
// 	"Ты видишь это",
// 	"Они помогают мне",
// 	"Они идут на работу",
// 	"Мы помним это",
// 	"Ты говоришь по-английски очень хорошо",
// 	"Мы живём здесь",
// 	"Я живу в этом городе",
// 	"Мы живём в этой стране",
// ]

// const wordEngText = document.querySelectorAll('.word__eng-text');

// let lesson1Eng = [
// 	"I work",
// 	"We work",
// 	"They work",
// 	"You work",
// 	"I work here",
// 	"I study",
// 	"I understand",
// 	"I understand you",
// 	"I know it",
// 	"I know it wery well",
// 	"I live in Russia",
// 	"I speak English",
// 	"I go to school",
// 	"I go to work",
// 	"I have a brother",
// 	"I have an idea",
// 	"I have a sister",
// 	"I have a car",
// 	"I think so",
// 	"I see it",
// 	"I want it",
// 	"I remember it",
// 	"I remember it very well",
// 	"We understand you",
// 	"We speak English",
// 	"I know it",
// 	"You see it",
// 	"They help me",
// 	"They go to work",
// 	"We remember it",
// 	"You speak English very well",
// 	"We leave here",
// 	"I leave in this city",
// 	"We leave in this country",
// ]

// 	for (let i = 0; i < wordRusText.length; i++) {
// 		wordRusText[i].textContent = lesson1Rus[i];
// 		wordEngText[i].textContent = lesson1Eng[i];
// 	}

	//lesson2
	// const wordRusText = document.querySelectorAll('.word__rus-text');

	// let lesson1Rus = [
	// 	"Я работаю",
	// 	"Мы работаем",
	// 	"Они работают",
	// 	"Ты работаешь",
	// 	"Я работаю здесь",
	// 	"Я учусь",
	// 	"Я понимаю",
	// 	"Я понимаю тебя",
	// 	"Я знаю это",
	// 	"Я знаю это очень хорошо",
	// 	"Я живу в России",
	// 	"Я говорю по-английски",
	// 	"Я хожу в школу",
	// 	"Я хожу на работу",
	// 	"У меня есть брат",
	// 	"У меня есть идея",
	// 	"У меня есть сестра",
	// 	"У меня есть машина",
	// 	"Я думаю так",
	// 	"Я вижу это",
	// 	"Мне нужно это",
	// 	"Я помню это",
	// 	"Я помню это очень хорошо",
	// 	"Мы понимаем тебя",
	// 	"Мы говорим по-английски",
	// 	"Ты знаешь это",
	// 	"Ты видишь это",
	// 	"Они помогают мне",
	// 	"Они идут на работу",
	// 	"Мы помним это",
	// 	"Ты говоришь по-английски очень хорошо",
	// 	"Мы живём здесь",
	// 	"Я живу в этом городе",
	// 	"Мы живём в этой стране",
	// ]
	
	// const wordEngText = document.querySelectorAll('.word__eng-text');
	
	// let lesson1Eng = [
	// 	"I work",
	// 	"We work",
	// 	"They work",
	// 	"You work",
	// 	"I work here",
	// 	"I study",
	// 	"I understand",
	// 	"I understand you",
	// 	"I know it",
	// 	"I know it wery well",
	// 	"I live in Russia",
	// 	"I speak English",
	// 	"I go to school",
	// 	"I go to work",
	// 	"I have a brother",
	// 	"I have an idea",
	// 	"I have a sister",
	// 	"I have a car",
	// 	"I think so",
	// 	"I see it",
	// 	"I want it",
	// 	"I remember it",
	// 	"I remember it very well",
	// 	"We understand you",
	// 	"We speak English",
	// 	"I know it",
	// 	"You see it",
	// 	"They help me",
	// 	"They go to work",
	// 	"We remember it",
	// 	"You speak English very well",
	// 	"We leave here",
	// 	"I leave in this city",
	// 	"We leave in this country",
	// ]
	
	// 	for (let i = 0; i < wordRusText.length; i++) {
	// 		wordRusText[i].textContent = lesson1Rus[i];
	// 		wordEngText[i].textContent = lesson1Eng[i];
	// 	}

