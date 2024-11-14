const projectlink = document.createElement("");

link.href = "https://www.oursite.com"; //not sure which site page to link to
link.textContent = "Go to Profile Page";
link.target = "";

const container = document.getElementById("link-container");

container.appendChild(link);
