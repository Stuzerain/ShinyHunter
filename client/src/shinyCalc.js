/*
information about calculating shiny chances can be found here -- this is specifically for Pokemon Go but the math can be
applied to any Pokemon game
https://gamepress.gg/pokemongo/shiny-hunting-and-probability-how-lucky-are-you-really
*/
const utilities = {

  // given a shiny rate and a certain probability, calculate roughly how many Pokemon one should expect to see before a shiny
  // based on this formula: n=ln(1−p)ln(1−1r)
  givenProbability: (shinyRate, targetProb) => {
    let numerator = Math.log(1 - targetProb)
    let denomenator = Math.log(1 - (1 / shinyRate));

    // rounds to two decimal places and returns as a number, not a string
    return parseFloat((Math.round(numerator/denomenator * 100) / 100).toFixed(2));
  },


  // given a shiny rate and a number of catches, calculate roughly the probability of one of them having been a shiny
  // based on this formula: (1−1r)n=1−p
  findProbability: (shinyRate, number) => {
    let base = 1 - (1 / shinyRate);
    let step = Math.pow(base, number);
    var probability = (step - 1) * -1;

    // rounds to two decimal places and returns a number
    return parseFloat((Math.round(probability * 100) / 100).toFixed(2))
  }
}

const findProb = utilities.findProbability

export default findProb;

