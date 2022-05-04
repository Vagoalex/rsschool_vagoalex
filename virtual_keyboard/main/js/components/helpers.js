import { UI, rusLayout, engLayout } from './UI.js';

export function createWindowElements() {
	UI.body.insertAdjacentHTML(
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
				<input type="text" class="text" />
			</div>`
	);
}

export function createKeyboardElements(language_layout) {
	const keyboard = document.querySelector('.keyboard-keys');
	language_layout.map(key => {
		const KeyElement = new Key(key);
		console.log(KeyElement.createKey(key));
		keyboard.append(KeyElement.createKey(key));
	});
}

class Key {
	constructor(keyName) {
		this.keyName = keyName;
	}
	createKey(keyName) {
		const div = document.createElement('div');
		div.classList.add('keys');
		div.textContent = keyName;
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
				break;
			case 'Enter':
				div.classList.add('enter_key');
				break;
			case 'Shift':
				div.classList.add('shift_key');
				break;
			case 'Up':
				div.classList.add('arrow_up');
				break;
			case 'Left':
				div.classList.add('arrow_left');
				break;
			case 'Down':
				div.classList.add('arrow_down');
				break;
			case 'Right':
				div.classList.add('arrow_right');
				break;
			case 'Ctrl':
				div.classList.add('ctrl_key');
				break;
			case 'Alt':
				div.classList.add('alt_key');
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
