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
});

startHoursNewEvent.addEventListener('input', controlEventHours);
endHoursNewEvent.addEventListener('input', controlEventHours);
startMinutesNewEvent.addEventListener('input', controlEventMinutes);
endMinutesNewEvent.addEventListener('input', controlEventMinutes);
