function scoreGrade(score) {
  if (score > 79 && score <= 100) {
    return "Your Grade is 'A'";
  } else if (score >= 60 && score <= 79) {
    return "Your Grade is 'B'";
  } else if (score > 49 && score <= 59) {
    return "Your Grade is 'C'";
  } else if (score >= 40 && score <= 49) {
    return "Your Grade is 'D'";
  } else if (score < 40) {
    return "Your Grade is 'E'";
  } else return "Please enter the correct score";
}
console.log(scoreGrade(25));
