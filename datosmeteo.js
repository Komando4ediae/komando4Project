/* Los datos metereológicos los hemos conseguido de la API MeteoBlue, y es un objeto de tipo JSON
como el que aparece debajo
*/

const prevision_meteo = {
    "metadata": {
        "name": "",
        "latitude": 40.36,
        "longitude": -1.54,
        "height": 1441,
        "timezone_abbrevation": "CET",
        "utc_timeoffset": 1.0,
        "modelrun_utc": "2024-02-19 00:00",
        "modelrun_updatetime_utc": "2024-02-19 08:23"
    },
    "units": {
        "time": "YYYY-MM-DD hh:mm",
        "predictability": "percent",
        "precipitation_probability": "percent",
        "pressure": "hPa",
        "relativehumidity": "percent",
        "co": "ug/m3",
        "temperature": "C",
        "winddirection": "degree",
        "precipitation": "mm",
        "windspeed": "ms-1"
    },
    "data_day": {
        "time": [
            "2024-02-19",
            "2024-02-20",
            "2024-02-21",
            "2024-02-22",
            "2024-02-23",
            "2024-02-24",
            "2024-02-25"
        ],
        "pictocode": [2, 1, 4, 16, 11, 14, 14],
        "uvindex": [4, 5, 3, 4, 3, 4, 3],
        "temperature_max": [9.71, 13.82, 15.22, 11.79, 3.62, 3.75, 4.99],
        "temperature_min": [0.83, 0.55, 0.43, 4.37, -1.01, -1.49, 0.68],
        "temperature_mean": [6.49, 6.05, 7.1, 7.54, 1.32, 0.89, 3.07],
        "felttemperature_max": [4.44, 9.02, 9.47, 5.06, -4.4, -5.04, -5.69],
        "felttemperature_min": [-2.74, -3.06, -4.39, -3.09, -10.58, -12.18, -12.8],
        "winddirection": [0, 0, 270, 270, 270, 270, 270],
        "precipitation_probability": [0, 0, 0, 83, 67, 52, 56],
        "rainspot": [
            "0000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000",
            "1191220111910122111002222110322190022111102211020",
            "2291111221922933229223332002333212933311223332212",
            "3132000333209033322003333000333300033330903322000",
            "3223000323310033332003333200333320033331003333100"
        ],
        "predictability_class": [5, 5, 5, 3, 2, 3, 2],
        "predictability": [86, 89, 84, 47, 34, 41, 25],
        "precipitation": [0.0, 0.0, 0.0, 2.4, 4.1, 7.2, 11.6],
        "snowfraction": [0.0, 0.0, 0.0, 0.0, 0.73, 0.0, 0.0],
        "sealevelpressure_max": [1035, 1035, 1030, 1023, 1016, 1017, 1019],
        "sealevelpressure_min": [1031, 1027, 1022, 1008, 1012, 1005, 1006],
        "sealevelpressure_mean": [1033, 1031, 1026, 1014, 1014, 1013, 1015],
        "windspeed_max": [5.86, 3.62, 5.0, 8.16, 12.73, 15.0, 15.95],
        "windspeed_mean": [3.38, 1.81, 3.47, 6.83, 10.26, 10.48, 13.42],
        "windspeed_min": [1.27, 0.53, 1.77, 4.94, 7.34, 9.35, 11.57],
        "relativehumidity_max": [91, 68, 63, 85, 82, 90, 82],
        "relativehumidity_min": [53, 23, 31, 58, 50, 68, 64],
        "relativehumidity_mean": [74, 47, 48, 71, 69, 80, 75],
        "convective_precipitation": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        "precipitation_hours": [0.0, 0.0, 0.0, 1.0, 3.0, 2.0, 6.0],
        "humiditygreater90_hours": [2.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0]
    }
}