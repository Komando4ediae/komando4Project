/**
 * Class representing a geographical location defined by a longitude and a latitude.
 * @class
 */
export class Location {
  /**
   * Creates a new instance of Location.
   * @param {number} longitude - The longitude of the location.
   * @param {number} latitude - The latitude of the location.
   */
  constructor(longitude, latitude) {
    /**
     * The longitude of the location.
     * @type {number}
     */
    this.longitude = longitude;

    /**
     * The latitude of the location.
     * @type {number}
     */
    this.latitude = latitude;
  }
}
