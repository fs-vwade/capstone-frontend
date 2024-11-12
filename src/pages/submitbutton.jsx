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

//adding server-side integration//
function fetchUserData() {
  const userData = {
    accountType: "registered",
  };
  if (userData.accountType === "registered") {
    projectpageButton.textContent = "Enroll";
  } else if (userData.accountType === "enrolled") {
    projectpageButton.textContent = "Submit";
  } else {
    projectpageButton.textContent = "Register";
  }
}

fetchUserData();
