function parseDateString(dateString) {
    // make sure the input is a string
    if (typeof dateString !== 'string') {
      throw new Error('Date must be a string in the format YYYY-MM-DD');
    }
  
    // constnats to match only `YYYY-MM-DD` format
    const datePattern = /^(\d{4})-(\d{2})-(\d{2})$/;
    const match = dateString.match(datePattern);
  
    // Check for ISO format or other invalid formats
    if (!match) {
      throw new Error(
        'Date must be in the format YYYY-MM-DD.'
      );
    }
  
    // Extract year, month, and day
    const [_, year, month, day] = match;
    const yearInt = parseInt(year, 10);
    const monthInt = parseInt(month, 10) - 1; 
    const dayInt = parseInt(day, 10);
  
    // Create and validate the date
    const date = new Date();
    date.setFullYear(yearInt);
    date.setMonth(monthInt);
    date.setDate(dayInt);
  
    if (
      date.getFullYear() !== yearInt ||
      date.getMonth() !== monthInt ||
      date.getDate() !== dayInt
    ) {
      throw new Error('Invalid date values provided');
    }
  
    return date;
  }
  
  // testing for console and node.js
  try {
    console.log(parseDateString('2021-01-01')); 
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    console.log(parseDateString('2021-09-29')); 
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    console.log(parseDateString('2021-01-01T14:59:47.283Z')); 
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    console.log(parseDateString('01-01-01')); 
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    console.log(parseDateString('2021-1-01')); 
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    console.log(parseDateString('2021-02-30')); 
  } catch (error) {
    console.error(error.message);
  }
  