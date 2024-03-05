import { Forecast } from './forecast.js';
import { optimalConditions } from './optimal-optimalConditions.js';
/**
 * Represents a climbing crag forecast assessment.
 */
class ClimbingCragForecast {
  /**
   * Creates a new ClimbingCragForecast object.
   * 
   * @param {object} forecast - The forecast data.
   * @param {object} optimalConditions - The optimal conditions for climbing.
   */
  constructor(forecast, optimalConditions) {
    /**
     * The forecast data.
     * @type {object}
     */
    this.forecast = forecast;

    /**
     * Assessment of climbing conditions.
     * @type {boolean}
     * @default false
     */
    this.assessment = false; // Default assessment is false

    // Check if forecast meets optimal conditions
    if (
      forecast.temperatureCelsius > optimalConditions.temperatureCelsius.min &&
      forecast.temperatureCelsius < optimalConditions.temperatureCelsius.max &&
      forecast.humidityPercentage > optimalConditions.humidityPercentage.min &&
      forecast.humidityPercentage < optimalConditions.humidityPercentage.max &&
      forecast.windSpeed > optimalConditions.windSpeed.min &&
      forecast.windSpeed < optimalConditions.windSpeed.max &&
      forecast.precipitationAmount > optimalConditions.precipitationAmount.min &&
      forecast.precipitationAmount < optimalConditions.precipitationAmount.max
    ) {
      /**
       * Assessment of climbing conditions.
       * @type {boolean}
       * @default true
       */
      this.assessment = true; // Set assessment to true if conditions are optimal
    }
  }
}

