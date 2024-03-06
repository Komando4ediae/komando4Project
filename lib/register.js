/**
 * Represents a register of climbing crag forecasts for a specific date.
 */
import { Location } from './Location';
import { Forecast } from './Forecast';

class ClimbingCragRecord {
  /**
   * Creates a new LocationForecastRegister.
   * 
   * @param {Location[]} locations - Array of location value objects.
   * @param {Forecast[]} forecasts - Array of forecasts for the locations.
   */
  constructor(locations, forecasts) {
    /**
     * Array of location value objects.
     * @type {Location[]}
     */
    this.locations = locations;

    /**
     * Array of forecasts for the locations.
     * @type {Forecast[]}
     */
    this.forecasts = forecasts;
  }

  // Method to add a forecast to the location
}
