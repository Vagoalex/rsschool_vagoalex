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
		this.elements.keyboardKeys.appendChild(this.createKeys());

		this.elements.keys = this.elements.keyboardKeys.querySelectorAll('.key');

		// add to DOM tree
		this.elements.main.appendChild(this.elements.keyboardKeys);
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

			switch (key) {
				case 'Backspace':
					keyElem.classList.add('key--special');
					keyElem.textContent = 'Backspace';

					keyElem.addEventListener('click', () => {
						const textarea = document.querySelector('.textarea');
						const position = document.querySelector('.textarea').selectionStart;
						const first = this.props.value.slice(0, position);
						const second = this.props.value.slice(position);

						textarea.focus();
						this.props.value = first.substring(0, first.length - 1) + second;
						this.triggerEventBack('oninput');
					});
					break;
				case 'Caps Lock':
					break;
				case 'Enter':
					break;
				case 'Space':
					break;
				case 'Shift':
					break;
				case 'Eng/Rus':
					break;
				case 'Ctrl':
					break;
				case 'Done':
					break;
				case 'Up':
					break;
				case 'Left':
					break;
				case 'Right':
					break;
				case 'Bottom':
					break;

				default:
					// create standart key
					keyElem.textContent = key;

					// create event on 'click' in key
					keyElem.addEventListener('click', () => {
						const textarea = document.querySelector('.text');
						const position = document.querySelector('.text').selectionStart;
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
						this.defaultSound();

						this.triggerEvent('oninput');
					});
					break;
			}
		});
	},

	triggerEvent(handlerName) {
		console.log(`Event Triggered. Event: ${handlerName}`);
	},

	toggleCapsLock() {
		console.log('Caps Lock Toggled');
	},

	open(initialValue, oninput, onclose) {},

	close() {},
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
