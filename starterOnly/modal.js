function editNav() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const modalCLoseButton = document.querySelector('.close');
const modalCloseButtonValidation = document.getElementById('closeButton');
const modalCloseInputValidation = document.getElementById('inputButton');
const buttonSubmit = document.querySelector('.btn-submit');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const tournament = document.getElementById('tournamentNumber');
const checkbox1 = document.getElementById('checkbox1');
let radioInputCity = document.querySelectorAll('input[name="location"]');
const birthDate = document.getElementById('birthDate');
const bgroundValidation = document.querySelector('.bground-validation');
// const radioInputCity = document.getElementsByName('location');
// const bgroundValidation = document.getElementById('bground-validation');

// DOM Error Elements
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const birthDateError = document.getElementById('birthDateError');
const tournamentNumberError = document.getElementById('tournamentNumberError');
const radioInputCityError = document.getElementById('radioInputCityError');
const checkbox1Error = document.getElementById('checkbox1Error');

// launch modal event
modalBtn.forEach(btn => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
	modalbg.style.display = 'block';
}
// Close modal form
const closeModal = () => {
	modalbg.style.display = 'none';
};
// Close modal validation
const closeModalValidation = () => {
	bgroundValidation.style.display = 'none';
};
// Close modal input
const closeModalInput = () => {
	bgroundValidation.style.display = 'none';
};
// Close modal event
modalCLoseButton.addEventListener('click', closeModal);

// Close modal Validation
modalCloseButtonValidation.addEventListener('click', closeModalValidation);
modalCloseInputValidation.addEventListener('click', closeModalInput);

// Send confirmation form is OK
const launchModalValidation = () => {
	bgroundValidation.style.display = 'block';
};
