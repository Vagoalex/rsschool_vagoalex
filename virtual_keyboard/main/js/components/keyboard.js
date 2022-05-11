import { swiftLanguage } from './view.js';
// keyboard events
export function keydownHandler(event) {
	event.preventDefault();
	const UI = {
		keys: document.querySelectorAll('.keys'),
		textarea: document.querySelector('#textarea'),
		spaceKey: document.querySelector('.space_key'),
		shift_left: document.querySelector('.shift_left'),
		shift_right: document.querySelector('.shift_right'),
		ctrl_left: document.querySelector('.ctrl_left'),
		ctrl_right: document.querySelector('.ctrl_right'),
		alt_left: document.querySelector('.alt_left'),
		alt_right: document.querySelector('.alt_right'),
		caps_lock_key: document.querySelector('.caps-lock_key'),
	};

	UI.keys.forEach(key => {
		// logic in texarea
		if (event.key === key.getAttribute('keyname') && event.key !== 'Backspace' && event.key !== 'Enter' && event.key !== 'Tab' && event.key !== 'Shift' && event.key !== 'Alt') {
			UI.textarea.value += key.textContent;
		}
		if (event.key === key.getAttribute('upperkey') && event.key !== 'Backspace') {
			UI.textarea.value += key.getAttribute('upperkey');
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
	if (event.code === 'Tab') {
		UI.textarea.value += '     ';
	}
	if (event.code === 'Enter') {
		UI.textarea.value += '\n';
	}
	if (event.key === 'Backspace') {
		UI.textarea.value = UI.textarea.value.slice(0, -1);
	}
	if ((event.ctrlKey && event.key === 'r') || (event.ctrlKey && event.key === 'к')) {
		window.location.reload();
	}
	if ((event.ctrlKey && event.key === 'R') || (event.ctrlKey && event.key === 'К')) {
		window.location.reload();
	}
	if (event.shiftKey && event.altKey) {
		const engLang = document.querySelector('#engKeyboard');
		const rusLang = document.querySelector('#rusKeyboard');
		if (rusLang) {
			swiftLanguage(rusLang);
		} else if (engLang) {
			swiftLanguage(engLang);
		}
	}
}

// delete animations in event 'keyup'
export function keyupHandler(event) {
	event.preventDefault();
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
	};

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
}
