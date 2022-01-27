// set up for all variables

const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

//this is an index that repnresent whichever one is active
// set to one by default
let currentActive = 1;

// add event listner to the next button to listen for a click
// when it clicks a functions is going to run that whatver current whatever current active at the time increment it by one.
// if statemnet to make sure it doesn't go over 4
// if the current active is greather than the circles set it to the current active/ e.g it stays at four
// circle is a nodelist so it can be treated like an array so it has a length

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

// if statment to set current active to one if it's less than one.
prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

//update function
// looping throgh circles using the for each methond
// for Each cicrle check if the index of that circle is less that the current active
// if that so, then you add the class of active there
// else we remove the class.
// actives = get all the active circles
//progress.style handles the progress bar
//you get actives+ circles length to produce a percetnages for progress length
// they need to to be in precentages  therefore mutliple it by 100
//concatenate with a + "%" to turn it into a percentnage
// You need to subtract -1 to get a lower and more precise percentage
// if statement to check if the current active is equal to 1 e.g it;s first place we want previous to be disbaled
// else if it's at the end then disable the next button
// else we don't neither of them to be disabled
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
