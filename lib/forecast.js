/**
 * Represents a weather forecast.
 */
class Forecast {
  /**
   * Creates a new Forecast object.
   * 
   * @param {number} temperatureCelcius - The temperature in Celsius.
   * @param {number} humidityPercentage - The humidity percentage.
   * @param {number} windSpeed - The wind speed.
   * @param {number} precipitationAmount - The precipitation amount.
   */
  constructor(
    temperatureCelcius,
    humidityPercentage,
    windSpeed,
    precipitationAmount
  ) {
    /**
     * The temperature in degrees Celsius.
     * @type {number}
     */
    this.temperatureCelsius = temperatureCelsius;

    /**
     * The humidity percentage in grams per cubic meter.
     * @type {number}
     */
    this.humidityPercentage = humidityPercentage;

    /**
     * The wind speed in kilometers per hour.
     * @type {number}
     */
    this.windSpeed = windSpeed;

    /**
     * The precipitation amount in milimeters.
     * @type {number}
     */
    this.precipitationAmount = precipitationAmount;
  }
}

