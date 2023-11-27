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
// 	Objet des strings à afficher en cas d'erreur
const errorMessages = {
	firstName:
		'Veuillez entrer 2 caractères alphabétiques ou plus pour le champ du Prénom.',
	lastName:
		'Veuillez entrer 2 caractères alphabétiques ou plus pour le champ du Nom.',
	email: 'Veuillez entrer un email correct',
	birthDate:
		'Vous devez entrer votre date de naissance et avoir 16 ans minimum.',
	tournamentNumber: 'Veuillez indiquer le nombre de tournois participés',
	city: 'Vous devez choisir une option.',
	checkbox1: 'Vous devez vérifier que vous acceptez les termes et conditions.',
};
// Regular Expression
let regexMail = new RegExp('[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+');
let regexTournament = new RegExp('^(?:[0-9]|[1-9][0-9])$');
let regexName = new RegExp('^[a-zA-Zéë-]{2,}$');

/**********************FUNCTIONS********************/
/*****************Form functionnalities****************/
// Function for empty field or <2 caracters

const validateFieldBirhDate = (field, errorElement, errorMessage) => {
	let birthDateUser = new Date(field.value);
	let currentDate = new Date();
	let ageUser = currentDate.getFullYear() - birthDateUser.getFullYear();
	if (ageUser < 16) {
		errorElement.textContent = errorMessage;
	} else {
		errorElement.textContent = '';
	}
};

// Function for Regex validation
const validateFieldRegex = (field, errorElement, errorMessage, regex) => {
	if (!regex.test(field.value)) {
		errorElement.textContent = errorMessage;
	} else {
		errorElement.textContent = '';
	}
};

// Function for radioInput
const validateRadioInputCity = (radioInputCity, errorElement, errorMessage) => {
	let isChecked = false;
	for (let i = 0; i < radioInputCity.length; i++) {
		if (radioInputCity[i].checked) {
			isChecked = true;
			break;
		}
	}
	if (!isChecked) {
		errorElement.textContent = errorMessage;
	} else {
		errorElement.textContent = '';
	}
};
const validateFieldCheckbox1 = (checkbox, errorElement, errorMessage) => {
	if (!checkbox.checked) {
		errorElement.textContent = errorMessage;
	} else {
		errorElement.textContent = '';
	}
};
// Appel de chaque fonction lors du Submit du formulaire
const form = document.querySelector('form');
form.addEventListener('submit', event => {
	// On empêche le comportement par défaut / recharger la page
	event.preventDefault();
	validateFieldRegex(
		firstName,
		firstNameError,
		errorMessages.firstName,
		regexName
	);
	validateFieldRegex(
		lastName,
		lastNameError,
		errorMessages.lastName,
		regexName
	);
	validateFieldBirhDate(birthDate, birthDateError, errorMessages.birthDate);
	validateFieldRegex(email, emailError, errorMessages.email, regexMail);
	validateFieldRegex(
		tournament,
		tournamentNumberError,
		errorMessages.tournamentNumber,
		regexTournament
	);
	validateRadioInputCity(
		radioInputCity,
		radioInputCityError,
		errorMessages.city
	);
	validateFieldCheckbox1(checkbox1, checkbox1Error, errorMessages.checkbox1);
	// Conditions to launch closeModal
	if (
		!firstNameError.textContent &&
		!lastNameError.textContent &&
		!birthDateError.textContent &&
		!emailError.textContent &&
		!tournamentNumberError.textContent &&
		!radioInputCityError.textContent &&
		!checkbox1Error.textContent
	) {
		// Afficher l'alerte Votre réservation a été reçue.
		closeModal();
		launchModalValidation();
	}
});
