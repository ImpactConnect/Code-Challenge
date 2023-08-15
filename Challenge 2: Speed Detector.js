//A function that takes in the car speed parameter to determine the speed rate
function speedDetector(speed) {
  //Declare variables to hold constant values
  const speedLimit = 70;
  const maxExceedPoint = 12;
  //Determine speed sexceed points
  const pointCounter = (speed - speedLimit) / 5;
  //A conditional statement that check if speed exceeds
  if (speed <= speedLimit) {
    return "Your Speed is OK";
  } else if (pointCounter <= maxExceedPoint) {
    //A warning message
    return `WARNING: You are Overspeeding, your Exceed Limit point is now ${pointCounter}`;
  } else return "License suspended";
}
//Call the function and pass the speed argument
console.log(speedDetector(120));
