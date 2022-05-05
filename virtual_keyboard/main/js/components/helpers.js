import { UI } from '../main.js';

export function changeColor() {
	for (let i = 0; i < UI.keys.length; i++) {
		UI.keys[i].style.color = UI.colors.value;
		UI.keys[i].style.fill = UI.colors.value;
	}
	UI.keyboard_lights.style.background = UI.colors.value;
}

export function changeLightMode() {
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
