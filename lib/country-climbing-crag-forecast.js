import { Forecast } from './forecast.js';
import { Location } from './location.js';

/**
 * Represents a country climbing crag forecast storage. 
 */
export default class CountryClimbingCragForecast {
  /**
   * Creates a new CountryClimbingCragForecast object.
   * @param {Location[]} locationsByName - Array of the locations of the climbing crag.
   * @param {Forecast[]} forecastsByLocationName - Array of forecasts for the locations.
   * @param {String} country - The country of the climbing crag locations.
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