function greenFlag(pronostico) {
  return (
    pronostico.temperatura >= 5 &&
    pronostico.temperatura <= 12 &&
    pronostico.humedad < 60 &&
    pronostico.precipitaciones === 0 &&
    pronostico.viento < 25
  );
}

/*Esta función recibe un objeto tipo pronóstico y devuelve un boolean*/
