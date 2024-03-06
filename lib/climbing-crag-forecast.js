import { Forecast } from './forecast.js';
import { Location } from './location.js';

/**
 * Represents a climbing crag forecast assessment.
 * Represents a forecast evaluation for a climbing location.
 */
class ClimbingCragForecast {
  /**
   * Creates a new ClimbingCragForecast object.
   * @param {location} location - The location of the climbing crag.
   * @param {Forecast} forecast - The forecast data.
   */
  constructor(locationName, location, forecast) {
    /**
     * The 
     * @type {String}
     */
        this.locationName = locationName;

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