// Step 1: Define the function
function checkAnswer() {
  // Step 2: Set the correct answer
  const correctAnswer = "4";

  // Step 3: Get the selected radio input
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // Step 4: Check if the user selected an option
  if (!selectedOption) {
    document.getElementById("feedback").textContent =
      "Please select an answer!";
    return;
  }

  // Step 5: Get the user's answer
  const userAnswer = selectedOption.value;

  // Step 6: Compare user answer to the correct answer
  const feedback = document.getElementById("feedback");
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

// Step 7: Add click event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
