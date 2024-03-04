class ClimbingCragForecast {
  /**
   * Creates a ClimbingCragForecast object.
   * @param {Forecast} forecast - The forecast for climbing conditions.
   * @param {Location} location - The location of the climbing crag.
   */
  constructor(forecast, location) {
    this.forecast = forecast;
    this.location = location;
  }

  /**
   * Calculates the climbing conditions based on the forecast.
   */
  calculateConditions() {
    console.log(
      `With this ${this.forecast} forecast it is not possible to climb at ${this.location.name}`
    );
  }
}
