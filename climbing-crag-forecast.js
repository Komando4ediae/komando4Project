class ClimbingCragForecast {
  constructor(forecast, location) {
    this.forecast = forecast;
    this.location = location;
  }

  calculateConditions() {
    console.log(`With this${this.forecast} is not posible to climb`);
  }
}
