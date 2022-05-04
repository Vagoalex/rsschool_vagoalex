import { createWindowElements, createKeyboardElements } from './components/helpers.js';
import { UI, rusLayout, engLayout } from './components/UI.js';

// Start App;
(() => {
	createWindowElements();
	createKeyboardElements(engLayout);
})();

console.log(UI.night_mode);
// UI.night_mode.addEventListener('click', () => {
// 	UI.toggle_circle.classList.toggle('active');
// 	UI.body.classList.toggle('active');
// 	UI.language_mode.classList.toggle('active');
// 	UI.night_mode.classList.toggle('active');
// 	UI.keyboard_wrapper.classList.toggle('active');
// 	UI.text_input.classList.toggle('active');
// 	UI.change_color.classList.toggle('active');
// 	for (let i = 0; i < UI.keys.length; i++) {
// 		UI.keys[i].classList.toggle('keys_night');
// 	}
// });
// UI.colors.addEventListener('input', () => {
// 	for (let i = 0; i < UI.keys.length; i++) {
// 		UI.keys[i].style.color = UI.colors.value;
// 	}
// 	UI.keyboard_lights.style.background = UI.colors.value;
// });
