const projectpageButton = document.getElementById("projectpageButton");
projectpageButton.addEventListener("click", function () {
  const buttonText = projectpageButton.textContent;
  if (buttonText === "Register") {
    console.log("Registering user...");
    projectpageButton.textContent = "Enroll";
  } else if (buttonText === "Enroll") {
    console.log("Enrolling user...");
    projectpageButton.textContent = "Submit";
  } else if (buttonText === "Submit") {
    console.log("Submitting form...");
  }
});
