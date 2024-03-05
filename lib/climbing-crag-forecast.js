import { Forecast } from './forecast.js';
import { optimalConditions } from './optimal-optimalConditions.js';

/**
 * Represents a climbing crag forecast assessment.
 * Represents a forecast evaluation for a climbing location.
 */
class ClimbingCragForecast {
  /**
   * Creates a new ClimbingCragForecast object.
   * @param {object} forecast - The forecast data.
   * @param {string} location - The location of the climbing crag.
   */
  constructor(forecast, location) {
    /**
     * The forecast data.
     * @type {object}
     */
    this.forecast = forecast;

    /**
     * The location of the climbing crag.
     * @type {string}
     */
    this.location = location;
  }
}