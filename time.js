let eventTime = [
	{ start: 0, duration: 15, title: 'Exercise', bgColor: '#E2ECF5' },
	{ start: 25, duration: 30, title: 'Travel to work', bgColor: '#E2ECF5' },
	{ start: 30, duration: 30, title: 'Plan day', bgColor: '#E2ECF5' },
	{
		start: 60,
		duration: 15,
		title: "Review yesterday's commits",
		bgColor: '#E2ECF5',
	},
	{ start: 100, duration: 15, title: 'Code review', bgColor: '#E2ECF5' },
	{
		start: 180,
		duration: 90,
		title: 'Have lunch with John',
		bgColor: '#E2ECF5',
	},
	{ start: 360, duration: 30, title: 'Skype call', bgColor: '#E2ECF5' },
	{
		start: 370,
		duration: 45,
		title: 'Follow up with designer',
		bgColor: '#E2ECF5',
	},
	{ start: 415, duration: 30, title: 'Push up branch', bgColor: '#E2ECF5' },
];

let time = eventTime.map((obj, i) => ({
	...obj,
	...{ id: i },
}));