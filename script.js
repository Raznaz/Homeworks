const calendar = document.querySelector('.calendar');
const btn = document.querySelector('.btn');
const table = document.querySelector('.table');
const modalColor = document.querySelector('.changeColorModal');
const colorInp = document.querySelector('.changeColorModal_inpColor');
const modalChange = document.querySelector('.changeEventModal');
const startValue = document.querySelector('.changeEventModal__inpStart');
const durationValue = document.querySelector('.changeEventModal__inpDuration');
const titleValue = document.querySelector('.changeEventModal__inpTitle');
const modalNewEvent = document.querySelector('.newEventModal');
const alarmModalMessage = document.querySelector('.alarm-event-modal');
let currentElement = null;

const startHoursNewEvent = document.querySelector(
	'.newEventModal__inpStart-hrs',
);
const startMinutesNewEvent = document.querySelector(
	'.newEventModal__inpStart-mins',
);

const endHoursNewEvent = document.querySelector('.newEventModal__inpEnd-hrs');
const endMinutesNewEvent = document.querySelector(
	'.newEventModal__inpEnd-mins',
);
const titleNewEvent = document.querySelector('.newEventModal__inpTitle');
// Change event
const startHoursChangeEvent = document.querySelector(
	'.changeEventModal__inpStart-hrs',
);
const startMinutesChangeEvent = document.querySelector(
	'.changeEventModal__inpStart-mins',
);

const endHoursChangeEvent = document.querySelector(
	'.changeEventModal__inpEnd-hrs',
);
const endMinutesChangeEvent = document.querySelector(
	'.changeEventModal__inpEnd-mins',
);
const titleChangeEvent = document.querySelector('.changeEventModal__inpTitle');

const getUniqId = () => {
	time.forEach((obj, i, arr) => {
		if (!obj.id) {
			if (!arr.find((item) => item.id === i)) {
				obj.id = i;
			} else {
				obj.id = i + 1;
			}
		}
	});
};

const controlEventHours = function () {
	if (+this.value >= 8 && +this.value <= 17) {
		this.style.backgroundColor = 'green';
	} else {
		this.style.backgroundColor = '#ff8f8f';
	}
};

const controlEventMinutes = function () {
	if (+this.value >= 0 && +this.value <= 60) {
		this.style.backgroundColor = 'green';
	} else {
		this.style.backgroundColor = '#ff8f8f';
	}
};

const closeWindow = (selector) => {
	console.log('function Close Windows - work');
	selector.classList.add('hidden');
	selector.classList.remove('show');
};

const openWindow = (selector) => {
	console.log('function Open Windows - work');
	selector.classList.remove('hidden');
	selector.classList.add('show');
};

const createCalendar = () => {
	table.innerHTML = '';
	for (let i = 0; i <= 540; i++) {
		const { hours, minutes } = getCalibrationTime(i);
		let addZeroMin = minutes === 0 ? '00' : minutes;
		const tr = document.createElement('tr');
		const td = document.createElement('td');
		const span = document.createElement('span');
		span.classList.add('time', 'hidden');
		tr.classList.add('tableRow');
		span.classList.add('time');
		span.innerHTML = `${hours}:${addZeroMin}`;

		if (!(i % 60)) {
			span.classList.remove('hidden');
			span.classList.add('bigFont');
		}
		if (!(i % 30) && i % 60) {
			span.classList.remove('hidden');
			span.classList.add('smallFont');
		}
		tr.append(td);
		tr.append(span);
		table.append(tr);
	}
};

const render = () => {
	createCalendar();
	getCorrectTime();

	const newTdArr = [...document.querySelectorAll('td')];

	for (let i = 0; i < time.length; i++) {
		for (k = 0; k < newTdArr.length; k++) {
			if (time[i].start === k) {
				newTdArr[k].dataset.id = time[i].id;
				newTdArr[k].style.backgroundColor = time[i].bgColor;
				newTdArr[k].classList.add('event');
				newTdArr[k].innerHTML = `${time[i].title}
				<span class="props">
				<i class="change-color fas fa-paint-brush">
				</i>
				<i class="delete-event fas fa-times"></i>
				</span>
				`;
				newTdArr[k].setAttribute('rowspan', `${time[i].duration}`);
			}
		}
	}
};

// ******** Добавление нового события NOTE:

btn.addEventListener('click', () => {
	openWindow(modalNewEvent);
});

modalNewEvent.addEventListener('click', (e) => {
	e.preventDefault();
	if (e.target.classList.contains('newEventModal__close')) {
		closeWindow(modalNewEvent);
	}

	if (e.target.classList.contains('newEventModal__btn')) {
		const timeResult = calculateTimeForCalendar(
			+startHoursNewEvent.value,
			+startMinutesNewEvent.value,
			+endHoursNewEvent.value,
			+endMinutesNewEvent.value,
		);
		if (!timeResult) {
			return;
		}
		const { start, duration } = timeResult;
		const newObjEvent = {
			start,
			duration,
			title: titleNewEvent.value,
		};
		time.push(newObjEvent);
		closeWindow(modalNewEvent);
		getUniqId();
		render();
	}
});

modalNewEvent.addEventListener('input', () => {
	if (
		+startHoursNewEvent.value >= 8 &&
		+startHoursNewEvent.value <= 17 &&
		+endHoursNewEvent.value >= 8 &&
		+endHoursNewEvent.value <= 17 &&
		+startMinutesNewEvent.value >= 0 &&
		+startMinutesNewEvent.value <= 60 &&
		+endMinutesNewEvent.value >= 0 &&
		+endMinutesNewEvent.value <= 60 &&
		+titleNewEvent.value.length > 0
	) {
		document.querySelector('.newEventModal__btn').disabled = false;
	} else {
		document.querySelector('.newEventModal__btn').disabled = true;
	}
	document.querySelector('.newEventModal__btn').disabled = false;
});

startHoursNewEvent.addEventListener('input', controlEventHours);
endHoursNewEvent.addEventListener('input', controlEventHours);
startMinutesNewEvent.addEventListener('input', controlEventMinutes);
endMinutesNewEvent.addEventListener('input', controlEventMinutes);

// ******** События с календарем NOTE:

calendar.addEventListener('click', (e) => {
	const target = e.target;
	if (target && target.classList.contains('event')) {
		openWindow(modalChange);
		currentElement = e.target;
		currentObj = time.find((obj) => +e.target.dataset.id === obj.id);

		let endEventTime = currentObj.start + currentObj.duration;
		startHoursChangeEvent.value = +Math.trunc(currentObj.start / 60) + 8;
		startMinutesChangeEvent.value = +currentObj.start % 60;
		endHoursChangeEvent.value = +Math.trunc(endEventTime / 60) + 8;
		endMinutesChangeEvent.value = +endEventTime % 60;
		titleChangeEvent.value = currentObj.title;
	}

	if (target && target.classList.contains('change-color')) {
		openWindow(modalColor);
		currentElement = e.target;
	}
	if (target && target.classList.contains('delete-event')) {
		const index = time.findIndex(
			(item) => +target.parentElement.parentElement.dataset.id === item.id,
		);
		time.splice(index, 1);
		console.log(time);
		render();
	}
});

// ******** Изменение цвета

colorInp.addEventListener('change', (e) => {
	currentElement.parentElement.parentElement.style.backgroundColor =
		e.target.value;
	currentObj = time.find(
		(obj) => obj.id === +currentElement.parentElement.parentElement.dataset.id,
	);
	currentObj.bgColor = e.target.value;
	closeWindow(modalColor);
});

modalColor.addEventListener('click', (e) => {
	if (e.target.classList.contains('changeColorModal__close')) {
		closeWindow(modalColor);
	}
});

// ******* Изменять событие
modalChange.addEventListener('input', function () {
	if (
		+startHoursChangeEvent.value >= 8 &&
		+startHoursChangeEvent.value <= 17 &&
		+endHoursChangeEvent.value >= 8 &&
		+endHoursChangeEvent.value <= 17 &&
		+startMinutesChangeEvent.value >= 0 &&
		+startMinutesChangeEvent.value <= 60 &&
		+endMinutesChangeEvent.value >= 0 &&
		+endMinutesChangeEvent.value <= 60 &&
		+titleChangeEvent.value.length > 0
	) {
		document.querySelector('.changeEventModal__btn').disabled = false;
	} else {
		document.querySelector('.changeEventModal__btn').disabled = true;
	}
});

modalChange.addEventListener('click', (e) => {
	e.preventDefault();
	if (e.target.classList.contains('changeEventModal__close')) {
		closeWindow(modalChange);
	}

	if (e.target.classList.contains('changeEventModal__btn')) {
		const timeResult = calculateTimeForCalendar(
			+startHoursChangeEvent.value,
			+startMinutesChangeEvent.value,
			+endHoursChangeEvent.value,
			+endMinutesChangeEvent.value,
		);
		if (!timeResult) {
			return;
		}
		const { start, duration } = timeResult;
		const currentEvent = time.find(
			(obj) => obj.id === +currentElement.dataset.id,
		);
		currentEvent.start = start;
		currentEvent.duration = duration;
		currentEvent.title = titleValue.value;

		closeWindow(modalChange);
		render();
	}
});

startHoursChangeEvent.addEventListener('input', controlEventHours);
endHoursChangeEvent.addEventListener('input', controlEventHours);
startMinutesChangeEvent.addEventListener('input', controlEventMinutes);
endMinutesChangeEvent.addEventListener('input', controlEventMinutes);

//  Alarm Message

alarmModalMessage.addEventListener('click', (e) => {
	console.log(e.target);
	if (e.target.classList.contains('alarm-event-modal__close')) {
		e.target.remove();
		closeWindow(alarmModalMessage);
	}
});

const getCalibrationTime = (min) => {
	let hours = Math.floor(min / 60) + 8;
	let minutes = min % 60;
	let seconds = 0;

	return {
		hours,
		minutes,
		seconds,
	};
};

const setAlarmEvent = (myTime) => {
	const dateNow = new Date();
	clearAllSetTimeouts();

	myTime.forEach(({ hours, minutes, seconds, title }) => {
		const eventAlarm = new Date();
		eventAlarm.setHours(hours);
		eventAlarm.setMinutes(minutes);
		eventAlarm.setSeconds(seconds);
		let diff = eventAlarm - dateNow;

		if (diff >= 0) {
			setTimeout(() => {
				openWindow(alarmModalMessage);
				document.querySelector('.alarm-event-modal__content').innerHTML = `
				<div class="alarm-event-modal__close" data-close>&times;</div>
				<h2>${title}</h2>
				<h3>Начало: ${hours}:${minutes}</h3>
				`;
				console.log(`Start Event ${title} `);
			}, diff);
		}
	});
};

const getCorrectTime = () => {
	const arrTime = time.map(({ start, title }) => {
		return { ...getCalibrationTime(start), ...{ title } };
	});
	setAlarmEvent(arrTime);
	return arrTime;
};

function calculateTimeForCalendar(stHr, stMin, endHr, endMin) {
	let getMinStart = (stHr - 8) * 60 + stMin;
	let getMinEnd = (endHr - 8) * 60 + endMin;
	let durationTimeEvent = getMinEnd - getMinStart;

	if (durationTimeEvent <= 0) {
		alert('Не правильно ввели данные. Введите заново. Спасибо');
		return;
	} else {
		return {
			start: getMinStart,
			duration: durationTimeEvent,
		};
	}
}

const clearAllSetTimeouts = () => {
	console.log('run clearAllsetTimeouts');
	let killId = setTimeout(function () {
		for (let i = killId; i > 0; i--) clearInterval(i);
	}, 0);
};

render();
