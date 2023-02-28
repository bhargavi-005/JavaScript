var input = document.createElement('input');
document.body.appendChild(input);
input.value = localStorage.getItem('user-value');
input.oninput = function(event) {
 localStorage.setItem('user-value', input.value);
};

var output = document.createElement('p');
document.body.appendChild(output);
output.textContent = localStorage.getItem('user-value');
window.addEventListener('storage', function(event) {
 if (event.key === 'user-value') {
 output.textContent = event.newValue;
 }
});
