import { createWindowElements, createKeyboardElements, setKeysToUpper } from './components/view.js';
import { changeColor, changeLightMode } from './components/helpers.js';
import { engLayout, rusLayout } from './components/layouts.js';
import { keydownHandler, keyupHandler } from './components/keyboard.js';

// Start App with render sections: radiobuttons in the top, textarea, keyboard wrapper without buttons;
(() => createWindowElements())();
const nightMode = document.querySelector('.night_mode');
const colors = document.querySelector('.colors__input');
const closeCheck = document.querySelector('.check-language__btn');
closeCheck.addEventListener('click', () => {
	const check = document.querySelector('.check-language');
	const container = document.querySelector('.container');
	check.classList.add('hidden');
	container.classList.remove('fog');
	createKeyboardElements(engLayout);
	setKeysToUpper('eng', document.querySelector('.keyboard-keys'));
});

function renderApp(language) {
	if (language === 'Eng') {
		createKeyboardElements(engLayout);
		setKeysToUpper('eng', document.querySelector('.keyboard-keys'));
	} else if (language === 'Rus') {
		createKeyboardElements(rusLayout);
		setKeysToUpper('rus', document.querySelector('.keyboard-keys'));
	}
}

// work night\light mode and colors mode for keyboard
nightMode.addEventListener('click', changeLightMode);
colors.addEventListener('input', changeColor);

// keyboard events
window.addEventListener('keydown', keydownHandler);
// delete animations in event 'keyup'
window.addEventListener('keyup', keyupHandler);
