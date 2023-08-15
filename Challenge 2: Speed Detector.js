function speedDetector(speed) {
  const speedLimit = 70;
  const pointCounter = (speed - speedLimit) / 5;
  const maxExceedPoint = 12;

  if (speed <= speedLimit) {
    return "Your Speed is OK";
  } else if (pointCounter <= maxExceedPoint) {
    return `WARNING: You are Overspeeding, your Exceed Limit point is now ${pointCounter}`;
  } else return "License suspended";
}
console.log(speedDetector(120));
