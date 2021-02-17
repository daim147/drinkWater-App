const smallCups = document.querySelectorAll(".cup-small");
const smallCupsLength = document.querySelectorAll(".cup-small").length;

const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remain = document.getElementById("remained");

bigGlass();
smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    
    namee(idx);
  });
});

function namee(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    console.log(idx, " one");
    idx--;
    console.log(idx, " two");
  }

  smallCups.forEach((cupp, idx2) => {
    if (idx2 <= idx) {
      cupp.classList.add("full");
    } else {
      cupp.classList.remove("full");
    }
  });
  bigGlass();
}

function bigGlass() {
  var fullCups = document.querySelectorAll(".cup.cup-small.full").length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / smallCupsLength) * 100}%`;
    percentage.innerText = `${(fullCups / smallCupsLength) * 100}%`;
  }

  if (fullCups == smallCupsLength) {
    remain.style.visibility = "hidden";
    remain.style.height = 0;
  } else {
    remain.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}

// smallCups[idx].classList.toggle("full")
    //     console.log(smallCups[idx])
    // for(var i = 0; i<= idx; i++){
    //        if(idx <= smallCups.length-1){
    //         smallCups[i].classList.toggle("full") }
    // }