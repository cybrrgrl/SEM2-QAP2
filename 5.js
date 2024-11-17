function normalizeCoord(value) {
    if (typeof value !== 'string') {
      throw new Error("Invalid input: Coordinate must be a string");
    }
  
    let latitude, longitude;
  
    // Check the format and extract the coordinates
    try {
      if (value.startsWith("[")) {
        // Format: "[-77.4369, 42.9755]"
        const coords = value
          .replace(/[\[\]]/g, "") // Remove square brackets
          .split(",") // Split by comma
          .map(coord => parseFloat(coord.trim())); // Parse as float and trim spaces
  
        if (coords.length !== 2) {
          throw new Error("Invalid coordinate format");
        }
  
        longitude = coords[0];
        latitude = coords[1];
      } else if (value.includes(",")) {
        // Format: "42.9755,-77.4369"
        const coords = value
          .split(",") // Split by comma
          .map(coord => parseFloat(coord.trim())); // Parse as float and trim spaces
  
        if (coords.length !== 2) {
          throw new Error("Invalid coordinate format");
        }
  
        latitude = coords[0];
        longitude = coords[1];
      } else {
        throw new Error("Unrecognized coordinate format");
      }
  
      // Validate the ranges of the coordinates
      if (latitude < -90 || latitude > 90) {
        throw new Error("Invalid latitude value");
      }
      if (longitude < -180 || longitude > 180) {
        throw new Error("Invalid longitude value");
      }
    } catch (error) {
      throw new Error(`Failed to parse coordinate: ${error.message}`);
    }
  
    // Return the reformatted coordinate as "(lat, lng)"
    return `(${latitude}, ${longitude})`;
  }
  
  // Example usage:
  try {
    console.log(normalizeCoord("42.9755,-77.4369")); // Output: "(42.9755, -77.4369)"
    console.log(normalizeCoord("[-77.4369, 42.9755]")); // Output: "(42.9755, -77.4369)"
  } catch (error) {
    console.error(error.message);
  }
  