function buildUrl(query, order, count, license) {
    // Validate query - ensure it's a string and is URI encoded
    if (typeof query !== 'string' || query.trim() === '') {
      throw new Error('Invalid query parameter');
    }
    
    // Validate order - must be either 'ascending' or 'descending'
    if (order !== 'ascending' && order !== 'descending') {
      throw new Error('Invalid order parameter');
    }
  
    // Validate count - must be an integer between 1 and 50
    if (typeof count !== 'number' || count < 1 || count > 50) {
      throw new Error('Invalid count parameter. Must be between 1 and 50');
    }
  
    // Validate license - must be one of the valid licenses
    const validLicenses = [
      'none', 'any', 'cc-by', 'cc-by-nc', 'cc-by-sa', 
      'cc-by-nd', 'cc-by-nc-sa', 'cc-by-nc-nd'
    ];
    if (!validLicenses.includes(license)) {
      throw new Error('Invalid license parameter');
    }
  
    // Encode the query to ensure it's properly URI encoded
    const encodedQuery = encodeURIComponent(query);
  
    // Construct the URL
    const url = `https://api.inaturalist.org/v2/observations?query=${encodedQuery}&count=${count}&order=${order}&license=${license}`;
  
    return url;
  }
  
  // Example usage
  try {
    const url = buildUrl('Monarch Butterfly', 'ascending', 25, 'cc-by');
    console.log(url); 
    // Output: https://api.inaturalist.org/v2/observations?query=Monarch%20Butterfly&count=25&order=ascending&license=cc-by
  } catch (error) {
    console.error(error.message);
  }
  