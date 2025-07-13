// Utility function to handle Cloudinary image URLs
export const getImageUrl = (imageUrl) => {
  if (!imageUrl) return null;
  
  // If it's already a full URL (Cloudinary or other), return as is
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }
  
  // If it's a relative path, construct the full URL
  // This handles cases where the backend might return relative paths
  return `https://backendec-g9oj.onrender.com${imageUrl}`;
};

// Function to check if URL is from Cloudinary
export const isCloudinaryUrl = (url) => {
  return url && (url.includes('cloudinary.com') || url.includes('res.cloudinary.com'));
};

// Function to optimize Cloudinary URLs for better performance
export const optimizeCloudinaryUrl = (url, options = {}) => {
  if (!isCloudinaryUrl(url)) return url;
  
  const { width, height, quality = 'auto', format = 'auto' } = options;
  let optimizedUrl = url;
  
  // Add transformation parameters if provided
  if (width || height || quality !== 'auto' || format !== 'auto') {
    const transformations = [];
    
    if (width) transformations.push(`w_${width}`);
    if (height) transformations.push(`h_${height}`);
    if (quality !== 'auto') transformations.push(`q_${quality}`);
    if (format !== 'auto') transformations.push(`f_${format}`);
    
    if (transformations.length > 0) {
      // Insert transformations before the filename
      const urlParts = url.split('/');
      const filenameIndex = urlParts.length - 1;
      urlParts.splice(filenameIndex, 0, `c_fill,${transformations.join(',')}`);
      optimizedUrl = urlParts.join('/');
    }
  }
  
  return optimizedUrl;
};

// Fallback image for when images fail to load
export const FALLBACK_IMAGE = "/placeholder.svg"; 