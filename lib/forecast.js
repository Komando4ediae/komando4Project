import { Location } from './location.js';

class Forecast {
    /**
   * Creates a new instance of Forecast.
   * @param {number} temperatureCelcius - The temperature in Celsius.
   * @param {number} humidityPercentage - The humidity percentage.
   * @param {number} windSpeed - The wind speed in km/h.
   * @param {number} precipitationAmount - The precipitation amount in mm.
   * @param {Location} location - The location associated with the forecast.
   * @param {Date} date - The date associated with the forecast.
   */
  constructor(
    temperatureCelcius,
    humidityPercentage,
    windSpeed,
    precipitationAmount,
    location,
    date
  ) {
    this.temperatureCelcius = temperatureCelcius;
    this.humidityPercentage = humidityPercentage;
    this.windSpeed = windSpeed;
    this.precipitationAmount = precipitationAmount;
    this.location = location;
    this.date = date;
  }
}
