import { createWindowElements, createKeyboardElements } from './components/view.js';
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
};

UI.night_mode.addEventListener('click', changeLightMode);
UI.colors.addEventListener('input', changeColor);

window.addEventListener('keydown', event => {
	UI.keys.forEach(key => {
		if ((event.key === key.getAttribute('keyname') && event.key !== 'CapsLock') || (event.code === key.getAttribute('keyname') && event.key !== 'CapsLock')) {
			key.classList.add('active');
		}
	});
});
window.addEventListener('keyup', event => {
	UI.keys.forEach(key => {
		if ((event.key === key.getAttribute('keyname') && event.key !== 'CapsLock') || (event.code === key.getAttribute('keyname') && event.key !== 'CapsLock')) {
			key.classList.remove('active');
			key.classList.add('remove');
		}

		setTimeout(() => {
			if (key.getAttribute('keyname') !== 'CapsLock') {
				key.classList.remove('remove');
			}
		}, 200);
	});
});
