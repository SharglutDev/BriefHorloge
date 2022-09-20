// Séléctionner les aiguilles de montre

const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

let date = new Date();

//Stocker l'heure , minute , seconde  dans des varaiables

let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

let secRotateRate = (360 / 60) * sec;
let minRotateRate = (360 / 60) * min + (360 / 60) * (sec / 60); // to set the needle at the % part of the current min instead of the beginning
let hourRotateRate = (360 / 12) * hour + (360 / 12) * (min / 60); // to set the need at the % part of the current hour instead of the beginning
// next 3 lines to prevent the clock from reseting at origin position at each reset
AIGUILLEHR.style.transform = `rotate(${hourRotateRate}deg)`;
AIGUILLEMIN.style.transform = `rotate(${minRotateRate}deg)`;
AIGUILLESEC.style.transform = `rotate(${secRotateRate}deg)`;

// Déplacer les aiguilles
function demarrerLaMontre() {
  // next 4 lines to calculate the hour at each interval
  //   date = new Date();
  //   hour = date.getHours();
  //   min = date.getMinutes();
  //   sec = date.getSeconds();
  // next 2 lines to make the needles moving each sec
  hourRotateRate += 360 / (3600 * 12);
  minRotateRate += 360 / 3600;
  secRotateRate += 360 / 60;
  AIGUILLESEC.style.transform = `rotate(${secRotateRate}deg)`;
  AIGUILLEHR.style.transform = `rotate(${hourRotateRate}deg)`;
  AIGUILLEMIN.style.transform = `rotate(${minRotateRate}deg)`;
}
// Executer la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
