// Part 1: pureBool function
function pureBool(value) {
    try {
      // Check if value is boolean
      if (typeof value === 'boolean') {
        console.log(`Processing: ${value}`);
        console.log('Value is already a Boolean:', value);
        return value;
      }
  
      // Normalize the value by converting to string and trimming extra spaces
      const strValue = String(value).toLowerCase().trim();
      console.log(`Processing: ${value}`);
      console.log('Normalized value:', strValue);
  
      // check for true
      const trueValues = ['yes', 'y', 'oui', 't', 'true', '1'];
      if (trueValues.includes(strValue)) {
        console.log(`Matched 'true' value: ${strValue}`);
        return true;
      }
  
      // check for false
      const falseValues = ['no', 'n', 'non', 'f', 'false', '0', '-1', '-2'];
      if (falseValues.includes(strValue)) {
        console.log(`Matched 'false' value: ${strValue}`);
        return false;
      }
  
      // if value doesn't match any known patterns, throw an error
      throw new Error('invalid value');
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // part 2
  
  function every(...values) {
    try {
      console.log("Checking every value:");
      for (let value of values) {
        if (!pureBool(value)) {
          console.log('Not all values are "true"');
          return false;
        }
      }
      console.log('All values are "true"');
      return true;
    } catch (error) {
      console.error(error.message);
      return false;
    }
  }
  
  function any(...values) {
    try {
      console.log("Checking if any value is true:");
      for (let value of values) {
        if (pureBool(value)) {
          console.log('At least one value is "true"');
          return true;
        }
      }
      console.log('No values are "true"');
      return false;
    } catch (error) {
      console.error(error.message);
      return false;
    }
  }
  
  function none(...values) {
    try {
      console.log("Checking if no values are true:");
      for (let value of values) {
        if (pureBool(value)) {
          console.log('At least one value is "true"');
          return false;
        }
      }
      console.log('No values are "true"');
      return true;
    } catch (error) {
      console.error(error.message);
      return false;
    }
  }
  
  // For testing purposes
  console.log(every('Y', 'yes', 1));       // true
  console.log(any('Y', 'no', 1));          // true
  console.log(none('Y', 'invalid', 1));     // false
  