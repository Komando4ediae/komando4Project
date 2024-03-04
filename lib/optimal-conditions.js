/**
 * Represents optimal weather conditions.
 * @type {OptimalConditions}
 */
export const optimalConditions = {
  temperatureCelsius: {
    /**
     * Minimum temperature in Celsius.
     * @type {number}
     */
    min: 5,
    /**
     * Maximum temperature in Celsius.
     * @type {number}
     */
    max: 12
  },
  humidityPercentage: {
    /**
     * Minimum humidity percentage.
     * @type {number}
     */
    min: 0,
    /**
     * Maximum humidity percentage.
     * @type {number}
     */
    max: 60
  },
  windSpeed: {
    /**
     * Minimum wind speed.
     * @type {number}
     */
    min: 0,
    /**
     * Maximum wind speed.
     * @type {number}
     */
    max: 25
  },
  precipitationAmount: {
    /**
     * Minimum precipitation amount.
     * @type {number}
     */
    min: 0,
    /**
     * Maximum precipitation amount.
     * @type {number}
     */
    max: 0
  }
};