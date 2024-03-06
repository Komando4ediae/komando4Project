/**
 * Represents a register of climbing crag forecasts for a specific date.
 */
class Register {
  /**
   * Creates a new LocationForecastRegister.
   * 
   * @param {Location} location - The location value object.
   * @param {Forecast} forecast - The forecast for the location.
   * @param {Date} date - The date of the forecast register.
   */
  constructor(location, forecast, date) {
    /**
     * The location value object.
     * @type {Location}
     */
    this.location = location;

    /**
     * The forecast for the location.
     * @type {Forecast}
     */
    this.forecast = forecast;

    /**
     * The date of the forecast register.
     * @type {Date}
     */
    this.date = date;
  }

  // Method to add a forecast to the location
}
