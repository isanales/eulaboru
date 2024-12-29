const imageRegistry = new Map();

function registerImage(imageSrc, metadata) {
  if (imageRegistry.has(imageSrc)) {
    console.log(`Image ${imageSrc} is already registered with metadata:`, imageRegistry.get(imageSrc));
    return;
  }

  // Register the image with metadata
  console.log(`Registering image: ${imageSrc} with metadata:`, metadata);
  imageRegistry.set(imageSrc, metadata);

  // Add your image registration logic here
}

// Usage
registerImage('image1.jpg', { description: 'First image' }); // Registering image: image1.jpg with metadata: { description: 'First image' }
registerImage('image2.jpg', { description: 'Second image' }); // Registering image: image2.jpg with metadata: { description: 'Second image' }
registerImage('image1.jpg', { description: 'First image again' }); // Image image1.jpg is already registered with metadata: { description: 'First image' }
