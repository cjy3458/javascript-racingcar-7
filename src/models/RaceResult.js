import getMaxAdvance from '../utils/getMaxAdvance.js';

class RaceResult {
  static determineWinners(cars) {
    const maxAdvance = getMaxAdvance();
    return cars
      .filter((car) => car.advance === maxAdvance)
      .map((car) => car.name);
  }
}

export default RaceResult;
