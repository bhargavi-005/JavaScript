var input = document.createElement('input');
document.body.appendChild(input);
input.value = localStorage.getItem('user-value');
input.oninput = function(event) {
 localStorage.setItem('user-value', input.value);
};

