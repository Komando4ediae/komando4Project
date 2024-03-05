import { Location } from './location.js';

class Forecast {
    /**
   * Creates a new instance of Forecast.
   * @param {Location} location - The location associated with the forecast.
   * @param {Date} date - The date associated with the forecast.
   */
  constructor(location,date) {
    this.location = location;
    this.date = date;
  }
  temperatureCelsius = null;
  humidityPercentage = null;
  windSpeed = null;
  precipitationAmount = null;
}
