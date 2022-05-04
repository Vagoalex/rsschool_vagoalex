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
				div.setAttribute('keyname', 'ShiftLeft');
				div.textContent = 'Shift';
				break;
			case 'ShiftRight':
				div.classList.add('shift_key');
				div.setAttribute('keyname', 'ShiftRight');
				div.textContent = 'Shift';
				break;
			case 'Up':
				div.classList.add('arrow_up');
				div.setAttribute('keyname', 'ArrowUp');
				div.textContent = '';
				break;
			case 'Left':
				div.classList.add('arrow_left');
				div.setAttribute('keyname', 'ArrowLeft');
				div.textContent = '';
				break;
			case 'Down':
				div.classList.add('arrow_down');
				div.setAttribute('keyname', 'ArrowDown');
				div.textContent = '';
				break;
			case 'Right':
				div.classList.add('arrow_right');
				div.setAttribute('keyname', 'ArrowRight');
				div.textContent = '';
				break;
			case 'ControlLeft':
				div.classList.add('ctrl_key');
				div.setAttribute('keyname', 'ControlLeft');
				div.textContent = 'Ctrl';
				break;
			case 'ControlRight':
				div.classList.add('ctrl_key');
				div.setAttribute('keyname', 'ControlRight');
				div.textContent = 'Ctrl';
				break;
			case 'AltLeft':
				div.classList.add('alt_key');
				div.setAttribute('keyname', 'AltLeft');
				div.textContent = 'Alt';
				break;
			case 'AltRight':
				div.classList.add('alt_key');
				div.setAttribute('keyname', 'AltRight');
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
			<textarea class="text" id="keyboard" name="keyboard"> It was a dark and stormy night... </textarea>
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
