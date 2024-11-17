function toDateString(value) {
    // Check if the input is a valid Date object
    if (!(value instanceof Date) || isNaN(value)) {
      throw new Error("Invalid Date object provided");
    }
  
    // Extract and format the year, month, and day
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(value.getDate()).padStart(2, '0');
  
    // Return the formatted date string
    return `${year}-${month}-${day}`;
  }
  
  // Example usage:
  try {
    const date = new Date(2021, 0, 29); // January 29, 2021
    console.log(toDateString(date)); // Output: "2021-01-29"
  } catch (error) {
    console.error(error.message);
  }
  