// Change color of keyboard and keyboard buttons
export function changeColor() {
	const keys = document.querySelectorAll('.keys');
	const keyboardLights = document.querySelector('.keyboard_lights');
	const colors = document.querySelector('.colors__input');
	for (let i = 0; i < keys.length; i++) {
		keys[i].style.color = colors.value;
		keys[i].style.fill = colors.value;
	}
	keyboardLights.style.background = colors.value;
}

// Change black\white color mode on window
export function changeLightMode() {
	const UI = {
		toggle_circle: document.querySelector('.toggle_circle'),
		body: document.querySelector('body'),
		language_mode: document.querySelector('.language_mode'),
		night_mode: document.querySelector('.night_mode'),
		keyboard_wrapper: document.querySelector('.keyboard-wrapper'),
		text_label: document.querySelector('.text-label'),
		text_input: document.querySelector('.text'),
		change_color: document.querySelector('.change_light-color'),
		keys: document.querySelectorAll('.keys'),
	};

	UI.toggle_circle.classList.toggle('active');
	UI.body.classList.toggle('active');
	UI.language_mode.classList.toggle('active');
	UI.night_mode.classList.toggle('active');
	UI.keyboard_wrapper.classList.toggle('active');
	UI.text_label.classList.toggle('active');
	UI.text_input.classList.toggle('active');
	UI.change_color.classList.toggle('active');
	for (let i = 0; i < UI.keys.length; i++) {
		UI.keys[i].classList.toggle('keys_night');
	}
}

export function swiftLanguage() {}
