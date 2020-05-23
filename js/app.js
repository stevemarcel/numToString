// UI Variables
const form = document.getElementById('form');
const input = document.getElementById('input');
const result = document.getElementById('result');
const loader = document.getElementById('loader');
const error = document.getElementById('error');
const resultContent = document.getElementById('resultContent');
const resultOutput = document.getElementById('resultOutput');

// Event listeners
document.addEventListener('click', () => {
	result.style.display = 'none';
});
form.addEventListener('submit', e => {
	// Hide error message
	error.style.display = 'none';
	// Hide results
	resultContent.style.display = 'none';
	// show results
	result.style.display = 'block';
	// Show loader
	loader.style.display = 'block';
	setTimeout(() => {
		// Hide loader
		loader.style.display = 'none';
	}, 1000);
	setTimeout(numToString, 2000);
	e.preventDefault();
});

function numToString() {
	if (input.value === '') {
		// Show error message
		error.style.display = 'block';
	} else {
		let num;
		if (
			input.value % 2 === 0 &&
			input.value % 3 === 0 &&
			input.value % 5 === 0
		) {
			num = 'yu-gi-oh';
		} else if (input.value % 2 === 0 && input.value % 3 === 0) {
			num = 'yu-gi';
		} else if (input.value % 2 === 0 && input.value % 5 === 0) {
			num = 'yu-oh';
		} else if (input.value % 3 === 0 && input.value % 5 === 0) {
			num = 'gi-oh';
		} else if (input.value % 2 === 0) {
			num = 'yu';
		} else if (input.value % 3 === 0) {
			num = 'gi';
		} else if (input.value % 5 === 0) {
			num = 'oh';
		} else {
			num = input.value;
		}
		// input result into UI
		resultOutput.innerHTML = num;
		// show  result
		resultContent.style.display = 'block';
	}
	// Clear input field
	input.value = '';
}

// function numToString(e) {
//   e.preventDefault();
//   let list = [];
//   let num;

//   for (let i = 0; i <= input.value; i++) {
//     if (i % 2 === 0) {
//       num = "yu";
//     } else if (i % 3 === 0) {
//       num = "gi";
//     } else if (i % 5 === 0) {
//       num = "oh";
//     } else if (i % 2 === 0 && i % 3 === 0) {
//       num = "yu-gi";
//     } else if (i % 2 === 0 && i % 5 === 0) {
//       num = "yu-oh";
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       num = "gi-oh";
//     } else if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
//       num = "yu-gi-oh";
//     } else {
//       num = i;
//     }
//     list.push(num);
//   }
//   console.log(list);
//   return list;
// }
// numToString(100);
// numToString(22);
