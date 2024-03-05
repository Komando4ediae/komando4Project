import { Location } from './location.js';

class Forecast {
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
