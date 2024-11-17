function createVideo(src, width, controls) {
    // Trim leading/trailing whitespace from the source 
    src = src.trim();
  
    // Start building the video element 
    let videoElement = `<video src="${src}"`;
  
    // ONLY add the width attribute if it's a valid integer
    if (Number.isInteger(width) && width > 0) {
      videoElement += ` width="${width}"`;
    }
  
    // Add the controls attribute if `controls` is true
    if (controls) {
      videoElement += ' controls';
    }
  
    // Close the semantic tag
    videoElement += '></video>';
  
    return videoElement;
  }
  
  // Test cases
  console.log(createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500));
 
  
  console.log(createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500, true));
  
  
  console.log(createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 'not a number', true));

  