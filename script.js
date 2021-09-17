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
