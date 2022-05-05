// import { engLayout, rusLayout } from './UI.js';

class Key {
	constructor(keyName) {
		this.keyName = keyName;
	}

	createKey(keyName) {
		const div = document.createElement('div');
		div.classList.add('keys');
		div.textContent = this.keyName;
		div.setAttribute('keyname', this.keyName);
		switch (keyName) {
			case 'Backspace':
				div.classList.add('backspace_key');
				break;
			case 'Tab':
				div.classList.add('tab_key');
				break;
			case '\\':
				div.classList.add('splash_key');
				break;
			case 'Caps Lock':
				div.classList.add('caps-lock_key');
				div.setAttribute('keyname', 'CapsLock');
				break;
			case 'Enter':
				div.classList.add('enter_key');
				break;
			case 'ShiftLeft':
				div.classList.add('shift_key');
				div.classList.add('shift_left');
				div.setAttribute('keyname', 'Shift');
				div.textContent = 'Shift';
				break;
			case 'ShiftRight':
				div.classList.add('shift_key');
				div.classList.add('shift_right');
				div.setAttribute('keyname', 'Shift');
				div.textContent = 'Shift';
				break;
			case 'Up':
				div.classList.add('arrow_up');
				div.textContent = '';
				div.insertAdjacentHTML(
					'afterBegin',
					`	<svg xmlns='http://www.w3.org/2000/svg' height='48' width='48'>
						<path d='M14.15 30.45 11.7 28 24 15.7 36.3 28 33.85 30.45 24 20.6Z' />
					</svg>`
				);
				div.setAttribute('keyname', 'ArrowUp');
				break;
			case 'Left':
				div.classList.add('arrow_left');
				div.textContent = '';
				div.insertAdjacentHTML(
					'afterBegin',
					`	<svg xmlns='http://www.w3.org/2000/svg' height='48' width='48'>
						<path d='M14.15 30.45 11.7 28 24 15.7 36.3 28 33.85 30.45 24 20.6Z' />
					</svg>`
				);
				div.setAttribute('keyname', 'ArrowLeft');
				break;
			case 'Down':
				div.classList.add('arrow_down');
				div.textContent = '';
				div.insertAdjacentHTML(
					'afterBegin',
					`	<svg xmlns='http://www.w3.org/2000/svg' height='48' width='48'>
						<path d='M14.15 30.45 11.7 28 24 15.7 36.3 28 33.85 30.45 24 20.6Z' />
					</svg>`
				);
				div.setAttribute('keyname', 'ArrowDown');
				break;
			case 'Right':
				div.classList.add('arrow_right');
				div.textContent = '';
				div.insertAdjacentHTML(
					'afterBegin',
					`	<svg xmlns='http://www.w3.org/2000/svg' height='48' width='48'>
						<path d='M14.15 30.45 11.7 28 24 15.7 36.3 28 33.85 30.45 24 20.6Z' />
					</svg>`
				);
				div.setAttribute('keyname', 'ArrowRight');
				break;
			case 'ControlLeft':
				div.classList.add('ctrl_key');
				div.classList.add('ctrl_left');
				div.setAttribute('keyname', 'Ctrl');
				div.textContent = 'Ctrl';
				break;
			case 'ControlRight':
				div.classList.add('ctrl_key');
				div.classList.add('ctrl_right');
				div.setAttribute('keyname', 'Ctrl');
				div.textContent = 'Ctrl';
				break;
			case 'AltLeft':
				div.classList.add('alt_key');
				div.classList.add('alt_left');
				div.setAttribute('keyname', 'Alt');
				div.textContent = 'Alt';
				break;
			case 'AltRight':
				div.classList.add('alt_key');
				div.classList.add('alt_right');
				div.setAttribute('keyname', 'Alt');
				div.textContent = 'Alt';
				break;
			case 'Space':
				div.classList.add('space_key');
				break;

			default:
				break;
		}
		return div;
	}
}

export function createWindowElements() {
	const body = document.querySelector('body');
	body.insertAdjacentHTML(
		'afterBegin',
		`<div class="container">
			<div class="language_mode">
				<div class="language_circle"></div>
			</div>
			<div class="night_mode">
				<div class="toggle_circle"></div>
			</div>
			<div class="change_light-color">
				<div class="colors">
					<input class="colors__input" type="color" />
				</div>
			</div>
			<div class="keyboard-wrapper">
				<div class="keyboard_lights"></div>
				<div class="keyboard-keys"></div>
			</div>
			<label class="text-label" for="keyboard">Tell us your story:</label>
			<textarea class="text" id="keyboard" name="keyboard" placeholder="It was a dark and stormy night..."></textarea>
			</div>`
	);
}

export function createKeyboardElements(languageLayout) {
	const keyboard = document.querySelector('.keyboard-keys');
	languageLayout.forEach(key => {
		const KeyElement = new Key(key);
		keyboard.append(KeyElement.createKey(key));
	});
}

function replaceRusUpper(wrapper) {
	const rusKeys = wrapper;
	rusKeys.forEach(key => {
		key.setAttribute('upperKey', key.textContent.toUpperCase());
		switch (key.textContent) {
			case '1':
				key.setAttribute('upperKey', '!');
				break;
			case '2':
				key.setAttribute('upperKey', '"');
				break;
			case '3':
				key.setAttribute('upperKey', '№');
				break;
			case '4':
				key.setAttribute('upperKey', ';');
				break;
			case '5':
				key.setAttribute('upperKey', '%');
				break;
			case '6':
				key.setAttribute('upperKey', ':');
				break;
			case '7':
				key.setAttribute('upperKey', '?');
				break;
			case '8':
				key.setAttribute('upperKey', '*');
				break;
			case '9':
				key.setAttribute('upperKey', '(');
				break;
			case '0':
				key.setAttribute('upperKey', ')');
				break;
			case '-':
				key.setAttribute('upperKey', '_');
				break;
			case '=':
				key.setAttribute('upperKey', '+');
				break;
			case '\\':
				key.setAttribute('upperKey', '/');
				break;
			case '.':
				key.setAttribute('upperKey', ',');
				break;

			default:
				break;
		}
	});
}
function replaceEngUpper(wrapper) {
	const engKeys = wrapper;
	engKeys.childNodes.forEach(key => {
		key.setAttribute('upperKey', key.textContent.toUpperCase());
		switch (key.textContent) {
			case '1':
				key.setAttribute('upperKey', '!');
				break;
			case '2':
				key.setAttribute('upperKey', '@');
				break;
			case '3':
				key.setAttribute('upperKey', '#');
				break;
			case '4':
				key.setAttribute('upperKey', '$');
				break;
			case '5':
				key.setAttribute('upperKey', '%');
				break;
			case '6':
				key.setAttribute('upperKey', '^');
				break;
			case '7':
				key.setAttribute('upperKey', '&');
				break;
			case '8':
				key.setAttribute('upperKey', '*');
				break;
			case '9':
				key.setAttribute('upperKey', '(');
				break;
			case '0':
				key.setAttribute('upperKey', ')');
				break;
			case '-':
				key.setAttribute('upperKey', '_');
				break;
			case '=':
				key.setAttribute('upperKey', '+');
				break;
			case '[':
				key.setAttribute('upperKey', '{');
				break;
			case ']':
				key.setAttribute('upperKey', '}');
				break;
			case '\\':
				key.setAttribute('upperKey', '|');
				break;
			case ';':
				key.setAttribute('upperKey', ':');
				break;
			case "'":
				key.setAttribute('upperKey', '"');
				break;
			case ',':
				key.setAttribute('upperKey', '<');
				break;
			case '.':
				key.setAttribute('upperKey', '>');
				break;
			case '/':
				key.setAttribute('upperKey', '?');
				break;

			default:
				break;
		}
	});
}

export function setKeysToUpper(language, wrapper) {
	if (language === 'eng') {
		replaceEngUpper(wrapper);
	} else if (language === 'rus') {
		replaceRusUpper(wrapper);
	}
}

export function swiftLanguage() {
	console.log('.!.');
	// if (language.textContent === 'Eng') {
	// 	const keyboard = document.querySelector('.keyboard-keys');
	// 	keyboard.innerHTML = '';
	// 	createKeyboardElements(engLayout);
	// } else if (language.textContent === 'Rus') {
	// 	const keyboard = document.querySelector('.keyboard-keys');
	// 	keyboard.innerHTML = '';
	// 	createKeyboardElements(rusLayout);
	// }
}
