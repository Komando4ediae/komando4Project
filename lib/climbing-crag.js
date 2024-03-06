import { Forecast } from './forecast.js';
import { Location } from './location.js';

/**
 * Represents a climbing crag assessment, combining forecast data and location.
 */
class ClimbingCrag {
  /**
   * Creates a new ClimbingCragForecast object.
   * @param {object} name - The climbing crag name.
   * @param {objetc} location - The location of the climbing crag.
   * @param {object} forecast - The forecast data.
   */
  constructor(name, forecast, location) {
    /**
     * The climbing crag name.
     * @type {string}
     */
    this.name = name;

    /**
     * The location of the climbing crag.
     * @type {Location}
     */
    this.location = location;

    /**
     * The forecast data.
     * @type {Forecast}
     */
    this.forecast = forecast;
  }
}