function pureBool(value) {
    try {
      // Log the input value
      console.log(`Processing: ${value}`);
      
      // Check if value is already a Boolean
      if (typeof value === 'boolean') {
        console.log(`Value is already a Boolean: ${value}`);
        return value;
      }
  
      // Normalize the value by converting to string and trimming extra spaces
      const strValue = String(value).toLowerCase().trim();
      console.log(`Normalized value: ${strValue}`);
      
      // Check for 'true' values
      const trueValues = ['yes', 'y', 'oui', 't', 'true', '1'];
      if (trueValues.includes(strValue)) {
        console.log(`Matched 'true' value: ${strValue}`);
        return true;
      }
  
      // Check for 'false' values
      const falseValues = ['no', 'n', 'non', 'f', 'false', '0', '-1', '-2'];
      if (falseValues.includes(strValue)) {
        console.log(`Matched 'false' value: ${strValue}`);
        return false;
      }
  
      // If the value doesn't match any known patterns, throw an error
      throw new Error('invalid value. Please try again.');
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  
  // Test cases with console logs
  console.log(pureBool("YES"));     // Expected output: true
  console.log(pureBool(1));         // Expected output: true
  console.log(pureBool("no"));      // Expected output: false
  console.log(pureBool("False"));   // Expected output: false
  console.log(pureBool(false));     // Expected output: false
  console.log(pureBool("random"));  // Expected output: Error message and 'invalid value'
  