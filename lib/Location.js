/**
 * Class representing a geographical location defined by a longitude, a latitude, and a location name.
 * @class
 */
class Location {
  /**
   * Creates a new instance of Location.
   * @param {number} longitude - The longitude of the location.
   * @param {number} latitude - The latitude of the location.
   * @param {string} locationName - The name of the location.
   */
  constructor(longitude, latitude, locationName) {
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

    /**
     * The name of the location.
     * @type {string}
     */
    this.locationName = locationName;
  }
}
