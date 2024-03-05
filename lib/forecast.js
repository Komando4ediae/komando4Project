/**
 * Represents a weather forecast.
 * @class
 */
class Forecast {
  /**
   * Creates an instance of Forecast.
   * @constructor
   * @param {number} temperatureCelsius - The temperature in Celsius.
   * @param {number} humidityPercentage - The humidity percentage.
   * @param {number} windSpeed - The wind speed.
   * @param {number} precipitationAmount - The precipitation amount.
   */
  constructor(
    temperatureCelsius,
    humidityPercentage,
    windSpeed,
    precipitationAmount,
  ) {
    this.temperatureCelsius = temperatureCelsius;
    this.humidityPercentage = humidityPercentage;
    this.windSpeed = windSpeed;
    this.precipitationAmount = precipitationAmount;
  }
}
