const city = "Boston";
const population = 667120;
const largestCityPopulation = 8804190;

if (population < largestCityPopulation)
  console.log(
    `${city}'s population is ${
      largestCityPopulation - population
    } below NYC, the largest city in the U.S. by population.`
  );
