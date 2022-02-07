const findTheOldest = function(people) {
  const age = people.map(x => {
    if (x.yearOfDeath == undefined) {
      x.yearOfDeath = new Date().getFullYear();
    }
    return x.yearOfDeath - x.yearOfBirth;
  });

  const oldestValue = age.reduce((acc, cur) => {
    return Math.max(acc, cur);
  });

  const oldestIndex = age.indexOf(oldestValue);

  return people[oldestIndex];
}

// Do not edit below this line
module.exports = findTheOldest;
