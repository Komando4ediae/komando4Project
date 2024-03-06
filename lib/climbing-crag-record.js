import { ClimbingCragForecast } from './climbing-crag-forecast';

/**
 * Represents a register of climbing crag forecasts for a specific date.
 */
class ClimbingCragRecord {
  /**
   * Creates a new ClimbingCragRecord.
   * 
   * @param {ClimbingCragForecast[]} climbingCragForecasts - Array of climbing crag forecasts.
   */
  constructor(climbingCragForecasts) {
    /**
     * Array of climbing crag forecasts.
     * @type {ClimbingCragForecast[]}
     */
    this.climbingCragForecasts = climbingCragForecasts;
  }
}

