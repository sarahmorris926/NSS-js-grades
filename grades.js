var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

let gradeA = 0;
let gradeB = 0;
let gradeC = 0;
let gradeD = 0;
let gradeF = 0;


// loop over the array

for (let i = 0; i < scores.length; i++) {
  if (scores[i] < 60) {
    gradeF++;
  } else if (scores[i] < 71 && scores[i] >= 61) {
    gradeD++;
  } else if (scores[i] < 81 && scores[i] >= 71) {
    gradeC++;
  } else if (scores[i] < 91 && scores[i] >= 81) {
    gradeB++;
  } else if (scores[i] > 91) {
    gradeA++;
  }
}


// show how many of each grade there are
console.log(`A: ${gradeA} B: ${gradeB} C: ${gradeC} D: ${gradeD} F: ${gradeF}`);

// show what is the lowest grade

  let lowScore = Math.min.apply(null, scores);
  console.log(lowScore);


// show what is the highest grade

  let highScore = Math.max.apply(null, scores);
  console.log(highScore);

