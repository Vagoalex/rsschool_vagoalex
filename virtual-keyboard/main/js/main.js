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
			<div class="video-mute">
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
		keysContainer: null,
		keys: [],
	},
	eventHandlers: {
		oninput: null,
		onclose: null,
	},
	props: {
		value: '',
		capsLock: false,
	},

	init() {
		// create main elements
		this.elements.main = document.createElement('div');
		console.log('Init');
	},

	createKeys() {
		// create keys elements
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
