export function createWindowElements() {
	const body = document.querySelector('body');
	const container = document.createElement('div');
	container.classList.add('container');
	container.insertAdjacentHTML(
		'afterbegin',
		`<div class="background">
				<video id="video" autoplay muted loop>
					<source src="../assets/cyberbg.mp4"  type="video/mp4"></source>
				</video>
			</div>
			<div id="videoMute" class="video-mute">
			<button class="video-mute__btn">turn on music</button>
			</div>
			<div class="wrapper-text">
			<div class="wrapper-text__helper">Нажми на любую кнопку или в поле ввода :)</div>
				<textarea class="text" placeholder="Hello world!"></textarea>
			</div>`
	);
	body.prepend(container);
}

const Keyboard = {
	elements: {
		main: null,
		keyboardKeys: null,
		keys: [],
	},
	eventHandlers: {
		oninput: null,
		onclose: null,
	},
	props: {
		value: '',
		capsLock: false,
		shift: false,
		EnRu: false,
	},

	init() {
		// create main elements
		this.elements.main = document.createElement('div');
		this.elements.keyboardKeys = document.createElement('div');

		// settings main elements
		this.elements.main.classList.add('keyboard', 'keyboard--hidden');
		this.elements.keyboardKeys.classList.add('keyboard__keys');
		this.elements.keyboardKeys.append(this.createKeys());

		this.elements.keys = this.elements.keyboardKeys.querySelectorAll('.key');

		// add to DOM tree
		this.elements.main.append(this.elements.keyboardKeys);
		const container = document.querySelector('.container');
		const textarea = document.querySelector('.wrapper-text');

		// added [this.elements.main] before [textarea]
		container.insertBefore(this.elements.main, textarea);

		// automatically use keyboard for elements with textarea in class .text
		document.querySelectorAll('.text').forEach(element => {
			element.addEventListener('focus', () => {
				this.open(element.value, currentValue => {
					element.value = currentValue;
				});
			});
		});

		const body = document.querySelector('body');
		// future event for keydown
		// future event for keyup
	},

	createKeys() {
		const keysFragment = document.createDocumentFragment();
		const keyLayout = [
			'`',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'0',
			'-',
			'=',
			'Backspace',
			'Tab',
			'q',
			'w',
			'e',
			'r',
			't',
			'y',
			'u',
			'i',
			'o',
			'p',
			'[',
			']',
			'\\',
			'Caps Lock',
			'a',
			's',
			'd',
			'f',
			'g',
			'h',
			'j',
			'k',
			'l',
			';',
			"'",
			'Enter',
			'Shift',
			'z',
			'x',
			'c',
			'v',
			'b',
			'n',
			'm',
			',',
			'.',
			'/',
			'Shift',
			'Up',
			'Eng/Rus',
			'Ctrl',
			'Done',
			'Alt',
			'Space',
			'Alt',
			'Ctrl',
			'Left',
			'Bottom',
			'Right',
		];

		keyLayout.forEach(key => {
			const keyElem = document.createElement('button');
			keyElem.classList.add('key');
			keyElem.setAttribute('type', 'button');

			const svg = `	<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
							<path style="fill: #faf102" d="M14.15 30.45 11.7 28 24 15.7 36.3 28 33.85 30.45 24 20.6Z" />
						</svg>`;

			switch (key) {
				case 'Backspace':
					keyElem.classList.add('key--special', 'backspace_key');
					keyElem.textContent = 'Backspace';

					keyElem.addEventListener('click', () => {
						const textarea = document.querySelector('.text');
						const position = textarea.selectionStart;
						const first = this.props.value.slice(0, position);
						const second = this.props.value.slice(position);

						textarea.focus();
						this.props.value = first.substring(0, first.length - 1) + second;
						this.triggerEventBack('oninput');
					});
					break;
				case 'Caps Lock':
					keyElem.classList.add('key--special', 'caps-lock_key');
					keyElem.textContent = 'Caps Lock';

					keyElem.addEventListener('click', () => {
						const textarea = document.querySelector('.text');
						textarea.focus();

						this.toggleCapsLock();
						keyElem.classList.toggle('caps-lock_key--active', this.props.capsLock);
					});
					break;
				case 'Enter':
					keyElem.classList.add('key--special', 'enter_key');
					keyElem.textContent = 'Enter';

					keyElem.addEventListener('click', () => {
						const textarea = document.querySelector('.text');
						const position = textarea.selectionStart;
						const first = this.props.value.slice(0, position);
						const second = this.props.value.slice(position);

						textarea.focus();
						this.props.value = `${first}\n${second}`;

						this.triggerEvent('oninput');
					});
					break;
				case 'Space':
					keyElem.classList.add('key--special', 'space_key');
					keyElem.textContent = '';

					keyElem.addEventListener('click', () => {
						const textarea = document.querySelector('.text');
						const position = textarea.selectionStart;
						const first = this.props.value.slice(0, position);
						const second = this.props.value.slice(position);

						textarea.focus();
						this.props.value = `${first} ${second}`;
						this.triggerEvent('oninput');
					});
					break;
				case 'Shift':
					keyElem.classList.add('key--special', 'shift_key');
					keyElem.textContent = 'Shift';

					keyElem.addEventListener('click', () => {
						const textarea = document.querySelector('.text');
						textarea.focus();

						this.shiftOn();
						keyElem.classList.toggle('caps-lock_key--active', this.props.shift);
					});
					break;
				case 'Eng/Rus':
					keyElem.classList.add('key--special', 'lang-key');
					keyElem.textContent = 'Eng';

					keyElem.addEventListener('click', () => {
						const textarea = document.querySelector('.text');
						textarea.focus();
						this.changeLanguage();
						keyElem.textContent = this.props.EnRu ? 'Rus' : 'Eng';
						keyElem.classList.toggle(this.props.EnRu);
					});
					break;
				case '\\':
					keyElem.classList.add('splash_key');
					keyElem.textContent = '\\';
					break;
				case 'Tab':
					keyElem.classList.add('key--special', 'tab_key');
					keyElem.textContent = 'Tab';

					keyElem.addEventListener('click', () => {
						const textarea = document.querySelector('.text');
						const position = textarea.selectionStart;
						const first = this.props.value.slice(0, position);
						const second = this.props.value.slice(position);

						textarea.focus();
						this.props.value = `${first} ${second}`;
						this.triggerEvent('oninput');
					});
					break;
				case 'Ctrl':
					keyElem.classList.add('key--special');
					keyElem.textContent = 'Ctrl';
					break;
				case 'Alt':
					keyElem.classList.add('key--special');
					keyElem.textContent = 'Alt';
					break;
				case 'Done':
					keyElem.classList.add('key--special', 'key--hidden');
					keyElem.textContent = 'HIDE@';

					keyElem.addEventListener('click', () => {
						this.close();
						this.triggerEvent('onclose');
					});
					break;
				case 'Up':
					keyElem.insertAdjacentHTML('afterbegin', svg);
					keyElem.classList.add('key--special', 'arrow_up');

					keyElem.addEventListener('click', () => {
						console.log('up');
						// const textarea = document.querySelector('.textarea');
						// textarea.focus();
						// if (textarea.selectionStart === 0) {
						// 	textarea.selectionStart = 0;
						// 	textarea.selectionEnd = textarea.selectionStart;
						// } else {
						// 	textarea.selectionStart -= 1;
						// 	textarea.selectionEnd = textarea.selectionStart;
						// }
					});

					break;
				case 'Left':
					keyElem.insertAdjacentHTML('afterbegin', svg);
					keyElem.classList.add('key--special', 'arrow_left');

					keyElem.addEventListener('click', () => {
						const textarea = document.querySelector('.text');
						textarea.focus();
						if (textarea.selectionStart === 0) {
							textarea.selectionStart = 0;
							textarea.selectionEnd = textarea.selectionStart;
						} else {
							textarea.selectionStart -= 1;
							textarea.selectionEnd = textarea.selectionStart;
						}
					});
					break;
				case 'Right':
					keyElem.insertAdjacentHTML('afterbegin', svg);
					keyElem.classList.add('key--special', 'arrow_right');

					keyElem.addEventListener('click', () => {
						const textarea = document.querySelector('.text');
						textarea.focus();
						textarea.selectionStart += 1;
						textarea.selectionEnd = textarea.selectionStart;
					});
					break;
				case 'Bottom':
					keyElem.insertAdjacentHTML('afterbegin', svg);
					keyElem.classList.add('key--special', 'arrow_down');

					keyElem.addEventListener('click', () => {
						console.log('bottom');
						// const textarea = document.querySelector('.text');
						// textarea.focus();
						// if (textarea.selectionStart === 0) {
						// 	textarea.selectionStart = 0;
						// 	textarea.selectionEnd = textarea.selectionStart;
						// } else {
						// 	textarea.selectionStart -= 1;
						// 	textarea.selectionEnd = textarea.selectionStart;
						// }
					});
					break;

				default:
					// create standart key
					keyElem.textContent = key;

					// create event on 'click' in key
					keyElem.addEventListener('click', () => {
						const textarea = document.querySelector('.text');
						const position = textarea.selectionStart;
						const first = this.props.value.slice(0, position);
						const second = this.props.value.slice(position);

						textarea.focus();
						if (this.props.capsLock && this.props.shift) {
							this.props.value = first + keyElem.textContent.toLowerCase() + second;
						} else if (this.props.shift) {
							this.props.value = first + keyElem.textContent.toUpperCase() + second;
						} else if (this.props.capsLock) {
							this.props.value = first + keyElem.textContent.toUpperCase() + second;
						} else {
							this.props.value = first + keyElem.textContent.toLowerCase() + second;
						}

						this.triggerEvent('oninput');
					});
					break;
			}
			keysFragment.append(keyElem);
		});
		return keysFragment;
	},

	triggerEvent(handlerName) {
		const textarea = document.querySelector('.text');
		if (typeof this.eventHandlers[handlerName] === 'function') {
			const position = textarea.selectionStart;

			this.eventHandlers[handlerName](this.props.value);
			textarea.selectionEnd = position + 1;
		}
	},

	triggerEventBack(handlerName) {
		const textarea = document.querySelector('.text');
		if (typeof this.eventHandlers[handlerName] === 'function') {
			const position = textarea.selectionStart;
			this.eventHandlers[handlerName](this.props.value);
			if (position > 0) {
				textarea.selectionEnd = position - 1;
			} else {
				textarea.selectionStart = 0;
				textarea.selectionEnd = 0;
			}
		}
	},

	changeLanguage() {
		if (this.props.shift) this.shiftOn();
		if (this.props.capsLock) this.toggleCapsLock();
		this.props.EnRu = !this.props.EnRu;

		const langEn = [
			'q',
			'w',
			'e',
			'r',
			't',
			'y',
			'u',
			'i',
			'o',
			'p',
			'[',
			']',
			'a',
			's',
			'd',
			'f',
			'g',
			'h',
			'j',
			'k',
			'l',
			';',
			"'",
			'z',
			'x',
			'c',
			'v',
			'b',
			'n',
			'm',
			',',
			'.',
			'?',
		];
		const langRu = [
			'ё',
			'й',
			'ц',
			'у',
			'к',
			'е',
			'н',
			'г',
			'ш',
			'щ',
			'з',
			'х',
			'ъ',
			'ф',
			'ы',
			'в',
			'а',
			'п',
			'р',
			'о',
			'л',
			'д',
			'ж',
			'э',
			'я',
			'ч',
			'с',
			'м',
			'и',
			'т',
			'ь',
			'б',
			'ю',
			'.',
		];

		document.querySelectorAll('button').forEach(key => {
			key.classList.remove('keyboard__key--active');
			if (this.props.EnRu) {
				if (langEn.indexOf(key.textContent) > -1) {
					key.textContent = langRu[langEn.indexOf(key.textContent)];
				}
			} else if (langRu.indexOf(key.textContent) > -1) {
				key.textContent = langEn[langRu.indexOf(key.textContent)];
			}
		});
	},

	toggleCapsLock() {
		this.props.capsLock = !this.props.capsLock;
		const { keys } = this.elements;
		keys.forEach(key => {
			if (key.childElementCount === 0 && !key.classList.contains('key--special')) {
				if (this.props.shift) {
					key.textContent = this.props.capsLock ? key.textContent.toLowerCase() : key.textContent.toUpperCase();
				} else {
					key.textContent = this.props.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
				}
			}
		});
	},

	shiftOn() {
		this.props.shift = !this.props.shift;

		const defaultItemEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '[', ']', '\\', ';', "'", ',', '.', '?'];
		const shiftItemEn = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '/'];
		const defaultItemRU = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '\\', '.'];
		const shiftItemRu = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '/', ','];

		document.querySelectorAll('button').forEach(key => {
			if (this.props.shift && this.props.EnRu === false) {
				if (key.textContent.charCodeAt(0) > 64 && key.textContent.charCodeAt(0) < 91 && !key.classList.contains('key--special')) {
					key.textContent = key.textContent.toLowerCase();
				} else if (key.textContent.charCodeAt(0) > 96 && key.textContent.charCodeAt(0) < 123 && !key.classList.contains('key--special')) {
					key.textContent = key.textContent.toUpperCase();
				} else if (defaultItemEn.indexOf(key.textContent) > -1) {
					key.textContent = shiftItemEn[defaultItemEn.indexOf(key.textContent)];
				}
			} else if (this.props.EnRu === false) {
				if (key.textContent.charCodeAt(0) > 64 && key.textContent.charCodeAt(0) < 91 && !key.classList.contains('key--special')) {
					key.textContent = key.textContent.toLowerCase();
				} else if (key.textContent.charCodeAt(0) > 96 && key.textContent.charCodeAt(0) < 123 && !key.classList.contains('key--special')) {
					key.textContent = key.textContent.toUpperCase();
				} else if (shiftItemEn.indexOf(key.textContent) > -1) {
					key.textContent = defaultItemEn[shiftItemEn.indexOf(key.textContent)];
				}
			} else if (this.props.shift && this.props.EnRu === true) {
				if (key.textContent.charCodeAt(0) > 1039 && key.textContent.charCodeAt(0) < 1072 && !key.classList.contains('key--special')) {
					key.textContent = key.textContent.toLowerCase();
				} else if (key.textContent.charCodeAt(0) > 1071 && key.textContent.charCodeAt(0) < 1104 && !key.classList.contains('key--special')) {
					key.textContent = key.textContent.toUpperCase();
				} else if (defaultItemRU.indexOf(key.textContent) > -1) {
					key.textContent = shiftItemRu[defaultItemRU.indexOf(key.textContent)];
				}
			} else if (key.textContent.charCodeAt(0) > 1039 && key.textContent.charCodeAt(0) < 1072 && !key.classList.contains('key--special')) {
				key.textContent = key.textContent.toLowerCase();
			} else if (key.textContent.charCodeAt(0) > 1071 && key.textContent.charCodeAt(0) < 1104 && !key.classList.contains('key--special')) {
				key.textContent = key.textContent.toUpperCase();
			} else if (shiftItemRu.indexOf(key.textContent) > -1) {
				key.textContent = defaultItemRU[shiftItemRu.indexOf(key.textContent)];
			}
		});
	},

	open(initialValue, oninput, onclose) {
		this.props.value = initialValue || '';
		this.eventHandlers.onclose = onclose;
		this.eventHandlers.oninput = oninput;
		this.elements.main.classList.remove('keyboard--hidden');
	},

	close() {
		this.props.value = '';
		this.eventHandlers.onclose = onclose;
		this.eventHandlers.oninput = oninput;
		this.elements.main.classList.add('keyboard--hidden');
	},
};

createWindowElements();

const video = document.getElementById('video');
const muteBtn = document.querySelector('.video-mute__btn');
muteBtn.addEventListener('click', () => {
	if (video.muted) {
		video.muted = false;
		muteBtn.textContent = 'mute music';
	} else {
		video.muted = true;
		muteBtn.textContent = 'turn on music';
	}
});

window.addEventListener('DOMContentLoaded', () => {
	Keyboard.init();
});
