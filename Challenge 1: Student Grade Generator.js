//A function that determines the grade of Student score
function scoreGrade(score) {
  if (score > 79 && score <= 100) {
    // Shows A if the score is between 80 and 100
    return "Your Grade is 'A'";
  } else if (score >= 60 && score <= 79) {
    // Shows B If score is between 60 and 79
    return "Your Grade is 'B'";
  } else if (score > 49 && score <= 59) {
    //Shows C If score is between 50 and 59
    return "Your Grade is 'C'";
  } else if (score >= 40 && score <= 49) {
    //Shows D If score is between 40 and 49
    return "Your Grade is 'D'";
  } else if (score < 40) {
    //Shows E  If score is between 0 and 39
    return "Your Grade is 'E'";
  } else return "Score must be from 0 - 100"; //For scores below 0 or above 100
}
//Call the function and pass an argument for the score
console.log(scoreGrade(25));
