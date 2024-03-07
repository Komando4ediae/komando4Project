import { Forecast } from './forecast.js';
import { Location } from './location.js';

/**
 * Represents a climbing crag forecast storage. 
 */
export default class ClimbingCragForecast {
  /**
   * Creates a new ClimbingCragForecast object.
   * @param {String} locationName - The name of the climbing crag location.
   * @param {location} location - The location of the climbing crag.
   * @param {Forecast[]} forecastsByLocationName - Array of forecasts for the locations.
   * @param {String} country - The country of the climbing crag location.
   */
  constructor(locationsByName, forecastsByLocationName, country) {

    /**
     * Array of locations for the climbing crags.
     * @type {Location[]}
     */
    this.locationsByName = locationsByName;

    /**
     * Array of forecasts for the locations.
     * @type {Forecast[]}
     */
    this.forecastsByLocationName = forecastsByLocationName;

    /**
     * The country of the climbing crag location.
     * @type {String}
     */
    this.country = country;
  }
}