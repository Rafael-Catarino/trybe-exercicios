const header = document.getElementById("header-container");
header.style.backgroundColor = "rgb(76,164,109)";

const emergencyTasks = document.getElementsByClassName("emergency-tasks")[0];
emergencyTasks.style.backgroundColor = "pink";

const noEmergencyTasks = document.querySelector(".no-emergency-tasks"); 
noEmergencyTasks.style.backgroundColor = "#F8CC3C";

const firstClassH3 = document.querySelectorAll(".emergency-tasks h3");
for (let cont = 0; cont < firstClassH3.length; cont += 1) {
  firstClassH3[cont].style.backgroundColor = "#9032F8";
}

const secondClassH3 = document.querySelectorAll(".no-emergency-tasks h3");
for (let index in secondClassH3) {
  secondClassH3[index].style.backgroundColor = "Black";
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';
