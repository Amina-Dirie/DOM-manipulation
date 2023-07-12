const passwordInput = document.getElementById("password");
const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-bar-text");
const feedbackText = document.querySelector(".feedback-text");

const MIN_LENGTH = 8; 
const MAX_LENGTH = 20; 

passwordInput.addEventListener("input", () => {
	const password = passwordInput.value;
	const strength = passwordStrength(password);
	updateProgressBar(strength);
	updateFeedbackText(strength);
});

function passwordStrength(password) {
	const length = password.length;
	if (length < MIN_LENGTH) {
		return -1; 
	}
	if (length > MAX_LENGTH) {
		return 100; 
	}

	return length * 5; 
}

function updateProgressBar(strength) {
	switch (strength) {
	  case -1:
		progressBar.style.width = "0%";
		progressBar.classList = "progress-bar";
		progressText.textContent = "";
		break;
	  case 100:
		progressBar.style.width = "100%";
		progressBar.classList = "progress-bar green";
		progressText.textContent = "GRRRREAT!";
		break;
	  default:
		progressBar.style.width = `${strength}%`;
		if (strength < 40) {
		  progressBar.classList = "progress-bar";
		  progressText.textContent = "";
		} else if (strength < 80) {
		  progressBar.classList = "progress-bar orange";
		  progressText.textContent = "PRETTY GOOD";
		} else {
		  progressBar.classList = "progress-bar green";
		  progressText.textContent = "GRRRREAT!";
		}
		break;
	}
  }

  function updateFeedbackText(strength) {
	feedbackText.style.display = strength === -1 ? "block" : "none";
	feedbackText.textContent = strength === -1 ? "Should be longer" : "";
  }