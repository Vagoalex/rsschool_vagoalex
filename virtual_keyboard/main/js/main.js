import { createWindowElements, createKeyboardElements, setKeysToUpper, swiftLanguage } from './components/view.js';
import { changeColor, changeLightMode } from './components/helpers.js';
import { engLayout, rusLayout } from './components/layouts.js';

// Start App with render sections: radiobuttons in the top, textarea, keyboard wrapper without buttons;
(() => {
	createWindowElements();
})();

// function for render buttons in keyboard and actions with buttons
export function startApp(language) {
	if (language === 'Eng') {
		createKeyboardElements(engLayout);
	} else if (language === 'Rus') {
		createKeyboardElements(rusLayout);
	}

	console.log('отрисовалась');
	// After start App we created a UI object for easy navigation;
	const UI = {
		keys: document.querySelectorAll('.keys'),
		spaceKey: document.querySelector('.space_key'),
		shift_left: document.querySelector('.shift_left'),
		shift_right: document.querySelector('.shift_right'),
		ctrl_left: document.querySelector('.ctrl_left'),
		ctrl_right: document.querySelector('.ctrl_right'),
		alt_left: document.querySelector('.alt_left'),
		alt_right: document.querySelector('.alt_right'),
		caps_lock_key: document.querySelector('.caps-lock_key'),
		night_mode: document.querySelector('.night_mode'),
		colors: document.querySelector('.colors__input'),
		keyboard_keys: document.querySelector('.keyboard-keys'),
		textarea: document.querySelector('#textarea'),
	};
	const rus = document.querySelector('#rusKeyboard');
	const eng = document.querySelector('#engKeyboard');
	if (rus) {
		setKeysToUpper('rus', UI.keyboard_keys);
	} else if (eng) {
		setKeysToUpper('eng', UI.keyboard_keys);
	}
	// work night\light mode and colors mode for keyboard
	UI.night_mode.addEventListener('click', changeLightMode);
	UI.colors.addEventListener('input', changeColor);

	// keyboard events
	window.addEventListener('keydown', event => {
		UI.keys.forEach(key => {
			// logic in texarea
			if (event.key === key.getAttribute('keyname')) {
				UI.textarea.value += key.textContent;
			}

			// animation
			if (event.key === key.getAttribute('keyname')) {
				key.classList.add('active');
			}
			if (event.key === 'Control' && key.getAttribute('keyname') === 'Ctrl') {
				key.classList.add('active');
			}
		});

		// animation
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

		// logic in texarea
		if (event.code === 'Space') {
			UI.textarea.value += ' ';
		}
		if (event.code === 'Backspace') {
			UI.textarea.value.slice(0, -1);
		}
		if (event.ctrlKey && event.altKey) {
			const rusLang = document.querySelector('#rusKeyboard');
			const engLang = document.querySelector('#engKeyboard');
			if (rusLang) {
				swiftLanguage(rusLang);
			} else if (engLang) {
				swiftLanguage(engLang);
			}
		}
	});

	// delete animations in event 'keyup'
	window.addEventListener('keyup', event => {
		UI.keys.forEach(key => {
			if (event.key === key.getAttribute('keyname')) {
				key.classList.remove('active');
				key.classList.add('remove');
			}
			if (event.key === 'Control' && key.getAttribute('keyname') === 'Ctrl') {
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
}

startApp('Eng');
