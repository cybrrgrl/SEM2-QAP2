function generateLicenseLink(licenseCode, targetBlank = false) {
    const licenseMap = {
        'CC-BY': {
            url: 'https://creativecommons.org/licenses/by/4.0/',
            text: 'Creative Commons Attribution License'
        },
        'CC-BY-NC': {
            url: 'https://creativecommons.org/licenses/by-nc/4.0/',
            text: 'Creative Commons Attribution-NonCommercial License'
        },
        'CC-BY-SA': {
            url: 'https://creativecommons.org/licenses/by-sa/4.0/',
            text: 'Creative Commons Attribution-ShareAlike License'
        },
        'CC-BY-ND': {
            url: 'https://creativecommons.org/licenses/by-nd/4.0/',
            text: 'Creative Commons Attribution-NoDerivs License'
        },
        'CC-BY-NC-SA': {
            url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
            text: 'Creative Commons Attribution-NonCommercial-ShareAlike License'
        },
        'CC-BY-NC-ND': {
            url: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
            text: 'Creative Commons Attribution-NonCommercial-NoDerivs License'
        }
    };

    let linkText = '';
    let linkURL = '';

    // Check if the license code exists in the licenseMap
    if (licenseMap[licenseCode]) {
        linkText = licenseMap[licenseCode].text;
        linkURL = licenseMap[licenseCode].url;
    } else {
        // If not, use the default "All Rights Reserved"
        linkText = 'All Rights Reserved';
        linkURL = 'https://choosealicense.com/no-permission/';
    }

    // Construct the HTML link
    let link = `<a href="${linkURL}"`;
    
    // If targetBlank is true, add the target="_blank" attribute
    if (targetBlank) {
        link += ' target="_blank"';
    }

    link += `>${linkText}</a>`;

    return link;
}

function generateLicense() {
    const licenseCode = document.getElementById('licenseCode').value.trim();
    const targetBlank = document.getElementById('targetBlank').checked;
    const licenseLinkDiv = document.getElementById('licenseLink');
    
    // Generate the license link using the provided license code and targetBlank value
    const licenseLink = generateLicenseLink(licenseCode, targetBlank);
    
    // Display the generated link in the result div
    licenseLinkDiv.innerHTML = licenseLink;
}
