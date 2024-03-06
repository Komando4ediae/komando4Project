import { Forecast } from './forecast.js';
import { Location } from './location.js';

/**
 * Represents a climbing crag forecast assessment.
 * Represents a forecast evaluation for a climbing location.
 */
export default class ClimbingCragForecast {
  /**
   * Creates a new ClimbingCragForecast object.
   * @param {String} locationName - The name of the climbing crag location.
   * @param {location} location - The location of the climbing crag.
   * @param {Forecast[]} forecastsByLocationName - Array of forecasts for the locations.
   */
  constructor(locationsByName, forecastsByLocationName) {

    /**
     * The Array of forecasts for the locations.
     * @type {String}
     */
        this.locationsByName = locationsByName;


    /**
     * The location of the climbing crag.
     * @type {Location}
     */
        this.locationsByName = locationsByName;

    /**
     * Array of forecasts for the locations.
     * @type {Forecast[]}
     */
    this.forecastsByLocationName = forecastsByLocationName;
  }
}