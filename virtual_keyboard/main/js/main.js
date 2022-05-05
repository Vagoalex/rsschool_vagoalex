import { createWindowElements, createKeyboardElements, setKeysToUpper, swiftLanguage } from './components/view.js';
import { changeColor, changeLightMode } from './components/helpers.js';
import { engLayout } from './components/UI.js';

// Start App;
(() => {
	createWindowElements();
	createKeyboardElements(engLayout);
})();

export const UI = {
	keys: document.querySelectorAll('.keys'),
	spaceKey: document.querySelector('.space_key'),
	shift_left: document.querySelector('.shift_left'),
	shift_right: document.querySelector('.shift_right'),
	ctrl_left: document.querySelector('.ctrl_left'),
	ctrl_right: document.querySelector('.ctrl_right'),
	alt_left: document.querySelector('.alt_left'),
	alt_right: document.querySelector('.alt_right'),
	caps_lock_key: document.querySelector('.caps-lock_key'),
	toggle_circle: document.querySelector('.toggle_circle'),
	language_mode: document.querySelector('.language_mode'),
	night_mode: document.querySelector('.night_mode'),
	body: document.querySelector('body'),
	text_label: document.querySelector('.text-label'),
	text_input: document.querySelector('.text'),
	change_color: document.querySelector('.change_light-color'),
	keyboard_lights: document.querySelector('.keyboard_lights'),
	colors: document.querySelector('.colors__input'),
	keyboard_wrapper: document.querySelector('.keyboard-wrapper'),
	keyboard_keys: document.querySelector('.keyboard-keys'),
	arrow_up: document.querySelector('.arrow_up'),
	arrow_left: document.querySelector('.arrow_left'),
	arrow_down: document.querySelector('.arrow_down'),
	arrow_right: document.querySelector('.arrow_right'),
};
setKeysToUpper('eng', UI.keyboard_keys);

UI.night_mode.addEventListener('click', changeLightMode);
UI.colors.addEventListener('input', changeColor);

window.addEventListener('keydown', event => {
	UI.keys.forEach(key => {
		if (event.shiftKey && event.altKey) {
			const rus = key.textContent === 'Rus';
			const eng = key.textContent === 'Eng';
			if (rus) {
				console.log('rus');
				swiftLanguage();
			} else if (eng) {
				console.log('eng');
				swiftLanguage();
			}
		}
		if (event.key === key.getAttribute('keyname')) {
			key.classList.add('active');
			// console.log(key);
			// console.log(event);
		}
		if (event.code === 'Space') {
			UI.spaceKey.classList.add('active');
		}
		if (event.code === 'ShiftLeft') {
			UI.shift_right.classList.remove('active');
		}
		if (event.code === 'ShiftRight') {
			UI.shift_left.classList.remove('active');
		}
		if (event.code === 'AltLeft') {
			UI.alt_right.classList.remove('active');
		}
		if (event.code === 'AltRight') {
			UI.alt_left.classList.remove('active');
		}
		if (event.code === 'ControlLeft') {
			UI.ctrl_right.classList.remove('active');
		}
		if (event.code === 'ControlRight') {
			UI.ctrl_left.classList.remove('active');
		}
		if (event.code === 'CapsLock') {
			UI.caps_lock_key.classList.toggle('active');
		}
	});
});
window.addEventListener('keyup', event => {
	UI.keys.forEach(key => {
		if (event.key === key.getAttribute('keyname')) {
			key.classList.remove('active');
			key.classList.add('remove');
		}
		if (event.code === 'Space') {
			UI.spaceKey.classList.remove('active');
			UI.spaceKey.classList.add('remove');
		}
		if (event.code === 'ShiftLeft') {
			UI.shift_right.classList.remove('active');
			UI.shift_right.classList.remove('remove');
		}
		if (event.code === 'ShiftRight') {
			UI.shift_left.classList.remove('active');
			UI.shift_left.classList.remove('remove');
		}
		if (event.code === 'AltLeft') {
			UI.alt_right.classList.remove('active');
			UI.alt_right.classList.remove('remove');
		}
		if (event.code === 'AltRight') {
			UI.alt_left.classList.remove('active');
			UI.alt_left.classList.remove('remove');
		}
		if (event.code === 'ControlLeft') {
			UI.ctrl_right.classList.remove('active');
			UI.ctrl_right.classList.remove('remove');
		}
		if (event.code === 'ControlRight') {
			UI.ctrl_left.classList.remove('active');
			UI.ctrl_left.classList.remove('remove');
		}

		setTimeout(() => {
			key.classList.remove('remove');
		}, 200);
	});
});
