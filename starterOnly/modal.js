// Si la classe actuelle est "topnav", la classe "responsive" est ajoutée, et sinon,
// la classe est rétablie à "topnav",

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

// DOM Error Elements
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const birthDateError = document.getElementById('birthDateError');
const tournamentNumberError = document.getElementById('tournamentNumberError');
const radioInputCityError = document.getElementById('radioInputCityError');
const checkbox1Error = document.getElementById('checkbox1Error');

/***************  LAUNCH MODALS ***************/

// Event click on "Je m'inscris"
modalBtn.forEach(btn => btn.addEventListener('click', launchModal));

// Launch Form
function launchModal() {
	modalbg.style.display = 'block';
}
// Launch Validation
const launchModalValidation = () => {
	bgroundValidation.style.display = 'block';
};
/***************  CLOSE MODALS ***************/

// Form
const closeModal = () => {
	modalbg.style.display = 'none';
};
// Validation
// const closeModalValidation = () => {
// 	bgroundValidation.style.display = 'none';
// };
// Input Modal
const closeModalInput = () => {
	bgroundValidation.style.display = 'none';
	window.location.reload();
};
// Event
modalCLoseButton.addEventListener('click', closeModal);

// Event Validation
// modalCloseButtonValidation.addEventListener('click', closeModalValidation);
modalCloseInputValidation.addEventListener('click', closeModalInput);

// 	Object Strings Errors
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

/********************** FORM FUNCTIONS********************/

// Function to validate field Date >16yo

const validateFieldBirhDate = (field, errorElement, errorMessage) => {
	let birthDateUser = new Date(field.value);
	let currentDate = new Date();
	let ageUser = currentDate.getFullYear() - birthDateUser.getFullYear();
	if (!field.value || ageUser < 16) {
		errorElement.textContent = errorMessage;
		field.style.border = '2px solid #FB4D60';
	} else {
		errorElement.textContent = '';
	}
};

// Function with regex
const validateFieldRegex = (field, errorElement, errorMessage, regex) => {
	if (!regex.test(field.value)) {
		errorElement.textContent = errorMessage;
		field.style.border = '2px solid #FB4D60';
	} else {
		errorElement.textContent = '';
	}
};

// Function radioInputCity
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
// FUNCTION CALLED TO SUBMIT FORM
const form = document.querySelector('form');
form.addEventListener('submit', event => {
	// Avoid reloading form
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
		//Launch modalValidation "Votre réservation a été reçue."
		closeModal();
		launchModalValidation();
	}
});
