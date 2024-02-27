/**
 * Class representing a geographical location defined by a longitude and a latitude.
 * @class
 */
class Location {
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

  /**
   * Sets the longitude of the location.
   * @param {number} longitude - The new longitude.
   */
  setLongitude(longitude) {
    /**
     * The longitude of the location.
     * @type {number}
     */
    this.longitude = longitude;
  }

  /**
   * Sets the latitude of the location.
   * @param {number} latitude - The new latitude.
   */
  setLatitude(latitude) {
    /**
     * The latitude of the location.
     * @type {number}
     */
    this.latitude = latitude;
  }

  /**
   * Gets the longitude of the location.
   * @returns {number} The longitude of the location.
   */
  getLongitude() {
    return this.longitude;
  }

  /**
   * Gets the latitude of the location.
   * @returns {number} The latitude of the location.
   */
  getLatitude() {
    return this.latitude;
  }
}
