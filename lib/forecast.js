export class Forecast {
  constructor(
    temperatureCelsius,
    humidityPercentage,
    windSpeed,
    precipitationAmount
  ) {
    this.temperatureCelsius = temperatureCelsius;
    this.humidityPercentage = humidityPercentage;
    this.windSpeed = windSpeed;
    this.precipitationAmount = precipitationAmount;
  }
}
