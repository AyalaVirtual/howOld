// Write your function here:
function howOld(age, year) {
  
  const futureCalculatedAge = (age + (year - 2023));
  const yearBorn = (2023 - age);
  const calculatedNumOfYears = (yearBorn - year);
  const differenceBetweenYears = (2023 - year);
  const pastCalculatedAge = (age - differenceBetweenYears);

    if (year > 2023) {
      return `You will be ${futureCalculatedAge} in the year ${year}`;
  } else if (year < yearBorn) {
      return `The year ${year} was ${calculatedNumOfYears} years before you were born`;
  } else if (year < 2023 && year > yearBorn) {
      return `You were ${pastCalculatedAge} in the year ${year}`;
  }
};


