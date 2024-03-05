class Register {
    /**
     * Creates a new instance of Register.
     */
    constructor() {
      /**
       * Array to store climbing crag forecasts.
       * @type {ClimbingCragForecast[]}
       */
      this.climbingCragforecasts = [];
    }
  
    /**
     * Adds a climbing crag forecast to the register.
     * @param {ClimbingCragForecast} forecast - The climbing crag forecast to add.
     */
    addForecast(forecast) {
      this.forecasts.push(forecast);
    }
  }