/**
 * Represents optimal weather conditions.
 * @type {OptimalConditions}
 */
export const optimalConditions = {
  temperatureCelsius: {
    /** 
     * Temperature in Celsius.
     * @type {number}
     */
    min: 5,
    max: 12
  },
  humidityPercentage: {
    /**
     * Humidity percentage, %.
     * @type {number}
     */
    min: 0,
    max: 60
  },
  windSpeed: {
    /**
     * Wind speed, km/h.
     * @type {number}
     */
    min: 0,
    max: 25
  },
  precipitationAmount: {
    /**
     * Precipitation amount, mm.
     * @type {number}
     */
    min: 0,
    max: 0
  }
};