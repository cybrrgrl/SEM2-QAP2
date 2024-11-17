function normalizeCoord(value) {
    // Implementation from Problem 5
    if (typeof value !== 'string') {
      throw new Error("Invalid input: Coordinate must be a string");
    }
  
    let latitude, longitude;
  
    if (value.startsWith("[")) {
      const coords = value.replace(/[\[\]]/g, "").split(",").map(parseFloat);
      if (coords.length !== 2) throw new Error("Invalid coordinate format");
      longitude = coords[0];
      latitude = coords[1];
    } else if (value.includes(",")) {
      const coords = value.split(",").map(parseFloat);
      if (coords.length !== 2) throw new Error("Invalid coordinate format");
      latitude = coords[0];
      longitude = coords[1];
    } else {
      throw new Error("Unrecognized coordinate format");
    }
  
    if (latitude < -90 || latitude > 90) throw new Error("Invalid latitude value");
    if (longitude < -180 || longitude > 180) throw new Error("Invalid longitude value");
  
    return `(${latitude}, ${longitude})`;
  }
  
  function formatCoords(...values) {
    const formattedCoords = [];
    
    for (const value of values) {
      try {
        console.log(`Processing: ${value}`);
        const normalized = normalizeCoord(value);
        formattedCoords.push(normalized);
      } catch (error) {
        console.error(`Skipped invalid coordinate: ${value} (${error.message})`);
        continue;
      }
    }
  
    return `(${formattedCoords.join(", ")})`;
  }
  
  // output
  console.log(formatCoords("42.9755,-77.4369", "[-62.1234, 42.9755]", "300,-9000"));
  